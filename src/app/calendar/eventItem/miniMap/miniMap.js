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
      zoom: 16,
      attributionControl: false,
      interactive: false
    });
  },[]);


  return (
    <div id={mapID.toString()} className={styles.mapContainer} />
  );
}
