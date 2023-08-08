'use client'

import { useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import styles from './miniMap.module.css'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_M;


export default function MiniMap({mapID, lata, long}){
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapID.toString(),
      style: 'mapbox://styles/catagato/cll05nrh600p701qp26zz54kk',
      center: [long, lata],
      zoom: 15,
      attributionControl: false,
      interactive: false
    });
  },[]);

  return (
    <a href={"https://www.google.com/maps/place/?q=place_id:" + mapID}>
      <div id={mapID.toString()} className={styles.mapContainer} />
    </a>
  );
}
