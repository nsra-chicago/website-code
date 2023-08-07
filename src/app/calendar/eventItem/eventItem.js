'use client'

import MiniMap from './miniMap/miniMap'
import styles from './eventItem.module.css'
import {useState} from 'react'

// takes in event info and creates the event item div
export default function EventItem({mapID, summary, description, date, location, geoCoder}) {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const dateTime = date.split(',');

  geoCoder.geocode({address: location})
    .then((result) => {
      const { results } = result;
      setLat(results[0].geometry.location.lat());
      setLng(results[0].geometry.location.lng());
    })
    .catch((e) => {
      console.error("couldnt find a location");
      setLat(41.8781);
      setLng(-87.623177);
    }); 

  return(
    <div className={styles.container}>
      <div className={styles.summary}>
        <h1>{summary}</h1>
        <div className={styles.date}>
          <p><b>{dateTime[0]}</b></p>
          {(dateTime.length > 1) ? <p><b>{dateTime[1]}</b></p> : null}
        </div>
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionBody} dangerouslySetInnerHTML={{__html: description}} />
      </div>
      <div className={styles.location}>
        {lat && lng && <MiniMap mapID={mapID} lata={lat} long={lng}/>} 
      </div>
    </div>
  );
}
