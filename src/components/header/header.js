"use client"
import Button from './button/button'
import styles from './header.module.css'

export default function Header() {
  return(
    <div className={styles.header}>
      <Button text='linktree' link='/'/>
      <Button text='calendar' link='/'/>
      <Button text='gallery' link='/'/>
      <Button text='archive' link='/'/>
    </div>
  );
};
