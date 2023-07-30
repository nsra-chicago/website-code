import Image from 'next/image'
import styles from './page.module.css'
import TextGrid from '../components/textGrid/textGrid'

export default function Home() {
  const message = "NSRA is the hardest working tenant union in chicago and wont stop till the buildings are ours."
  
  return (
    <main className={styles.main}>
      <TextGrid text={message} width={15} height={15}/>
    </main>
  )
}
