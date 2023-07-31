"use client"
import Cell from './cell/cell' 
import styles from './textGrid.module.css' 
import { useState, useEffect } from 'react';

export default function TextGrid({text, width, height}) {
  const [gridText, setGridText] = useState('X'.repeat(width*height));

  // look i know this is weird but idk what else to do
  if(text.length > width*height){
    console.error("woah there text doesnt fit") 
    return null;
  }

  const prepareText = (txt, size) => {
    if(txt.length == size){
      return txt;
    }

    const remainingSpaces = size - text.length
    let modifiedText = txt; 
    for(let i = 0; i<remainingSpaces; i++){
      const pos = Math.floor(Math.random() * modifiedText.length + 1);

      modifiedText = [modifiedText.slice(0, pos), " ", modifiedText.slice(pos)].join('')
    }

    return modifiedText;
  }
  
  const row = (location, charArray) =>{
    const fLoc = (location == "top") ? "tl" : ((location == "bottom") ? "bl" : "l");
    const lLoc = (location == "top") ? "tr" : ((location == "bottom") ? "br" : "r");
    const mLoc = (location == "top") ? "t" : ((location == "bottom") ? "b" : "m");
    
    return charArray.map((char, idx)=>{
      if(idx == 0){
        return (<Cell key={idx} character={char} location={fLoc}/>);
      }
      else if(idx == charArray.length-1){
        return (<Cell key={idx} character={char} location={lLoc}/>);
      }else{
        return (<Cell key={idx} character={char} location={mLoc}/>);
      }
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setGridText(prepareText(text, width*height));
    }, 500);
    
    return () => clearInterval(interval);
  },[]);
  
  const regEx = new RegExp(".{1,"+height + "}", "g");
  const textGroups = gridText.match(regEx);
  return(
    <div>
      {
        textGroups.map((rowText, idx) => {
          const rowLoc = (idx == 0) ? "top" : ((idx == height-1) ? "bottom" : "middle");

          return (
            <div key={rowLoc + idx} className={styles.row}>
              {row(rowLoc, rowText.split(""))}
            </div>
          );
        })
      }
    </div>
  );
};
