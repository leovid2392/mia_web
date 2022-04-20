import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import hero1 from '../public/images/mia-5918_small500x750.jpg'

export default function Hero() {
  return (
    <section className={styles.container}>
      <Image src={hero1} width={320} height={480} layout='responsive'></Image>
    </section>
  )
}
