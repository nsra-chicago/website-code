"use client"
import Button from './button/button'
import styles from './header.module.css'

export default function Header() {
  return(
    <div className={styles.header}>
      <Button text='home' link='/'/>
      <Button text='linktree' link='https://linktr.ee/northspauldingrenters'/>
      <Button text='calendar' link='https://calendar.google.com/calendar/embed?src=b77a7c74ce194f6cc2245231fd6918c285a9123e68f736f2c359d4a3bbf55a06%40group.calendar.google.com&ctz=America%2FChicago'/>
      <Button text='constitution' link='/nsra-constitution.pdf'/>
    </div>
  );
};
