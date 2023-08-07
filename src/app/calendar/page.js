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
      const eventDate = new Date(event.startDate.toJSDate());

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
      {isLoaded && createItems(vevents)}
    </main>
  )
}
