'use client'

import Image from 'next/image'
import styles from './page.module.css'
import calendar from './public_calendar.json'
import ICAL from 'ical.js'
import EventItem from './eventItem/eventItem'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export default function Calendar() {
  const calData = calendar.calendar.join("\r\n");
  const jcal = ICAL.parse(calData);
  const comp = new ICAL.Component(jcal);
  const vevents = comp.getAllSubcomponents('vevent');

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_G
  })

  const createItems = (events) => {
    const geocoder = new window.google.maps.Geocoder();
    
    return events.map((vevent, idx) =>{
      const event = new ICAL.Event(vevent);

      let eventDate = new Date(event.startDate.toJSDate());
      if(event.isRecurring()){
        const today = new Date();
        const nextTime = event.iterator({
          year: today.getFullYear(),
          month: today.getMonth() + 1,
          day: today.getDate(),
          hour: event.startDate._time.hour, 
          isDate: false
        }, event.startDate.zone).next();
        
        eventDate = nextTime.toJSDate();
      }

      return (
        <EventItem 
          key={idx}
          mapID={idx}
          summary={event.summary}
          description={event.description}
          date={eventDate.toLocaleString()}
          location={event.location}
          geoCoder={geocoder}
        />
      );
    });
  }

  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <div className={styles.message}>
          <h1>coming up</h1>
        </div>
        <button className={styles.calButton}>
          <a href="https://calendar.google.com/calendar/embed?src=b77a7c74ce194f6cc2245231fd6918c285a9123e68f736f2c359d4a3bbf55a06%40group.calendar.google.com&ctz=America%2FChicago">
            more events
          </a>
        </button>
      </div>
      <div className={styles.bottom}>
        {isLoaded && createItems(vevents)}
      </div>
    </main>
  )
}
