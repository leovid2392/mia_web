import Image from 'next/image'
import styles from '../styles/DisplayTwoImg.module.css'

export default function DisplayTwoImg({ img1, img2, alt1, alt2 }) {
  return (
    <div className={styles.container}>
      <figure className={styles.imageContainer}>
        <Image src={img1} layout='fill' alt={alt1} objectFit='cover'></Image>
      </figure>
      <figure className={styles.imageContainer}>
        <Image src={img2} layout='fill' alt={alt2} objectFit='cover'></Image>
      </figure>
    </div>
  )
}
