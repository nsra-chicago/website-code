"use client"
import Link from 'next/link'
import styles from './button.module.css'

  export default function Button({text, link}){
  return (
    <div className={styles.button}>
      <div className={styles.link}>
        <Link href={link}>{text}</Link>
      </div>
    </div>
  );
}
