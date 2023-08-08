'use client'

import MiniMap from './miniMap/miniMap'
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './eventItem.module.css'
import {useState, useEffect} from 'react'

// takes in event info and creates the event item div
export default function EventItem({mapID, summary, description, date, location, geoCoder}) {
  const [mapData, setMapData] = useState({lat: null, lng: null, mapID: null});
  const [locationReady, setLocationReady] = useState(false);

  const dateTime = date.split(',');
  
  //something about this code makes the geocode function
  //get called multiple times
  //shouldnt matter once this work is done via a script
  
  useEffect(() => {
    geoCoder.geocode({address: location})
    .then((result) => {
      console.log('debug getting geocode! remove at some point');
      const { results } = result;
      setMapData({
        lat: results[0].geometry.location.lat(),
        lng: results[0].geometry.location.lng(),
        mapID: results[0].place_id  
      });
     setLocationReady(true);
    })
    .catch((e) => {
      console.error("couldnt find a location");
      setMapData({
        lat: 41.8781,
        lng: -87.623177,
        mapID: 'ChIJ7cv00DwsDogRAMDACa2m4K8' 
      });
      setLocationReady(true);
    });
  }, []);
  
  return(
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.summary}>
          <h1>{summary}</h1>
          <div className={styles.date}>
            <p><b>{dateTime[0]}</b></p>
            {(dateTime.length > 1) ? <p><b>{dateTime[1]}</b></p> : null}
          </div>
        </div>
        <div className={styles.location}>
          { locationReady && <MiniMap mapID={mapData.mapID} lata={mapData.lat} long={mapData.lng}/>} 
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionBody} dangerouslySetInnerHTML={{__html: description}} />
        </div>
      </div>
    </div>
  );
}
