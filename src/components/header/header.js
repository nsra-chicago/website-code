"use client"
import Button from './button/button'
import styles from './header.module.css'

export default function Header() {
  return(
    <div className={styles.header}>
      <Button text='home' link='/'/>
      <Button text='linktree' link='https://linktr.ee/northspauldingrenters'/>
      <Button text='calendar' link='/calendar'/>
      <Button text='gallery' link='/'/>
      <Button text='archive' link='/'/>
    </div>
  );
};
