import styles from '../styles/Layout1x1.module.css'
import Image from 'next/image'
export default function Layout1x1({ img, alt, objectPosition }) {
  return (
    <figure className={styles.imgContainer}>
      <Image
        src={img}
        alt={alt}
        objectPosition={objectPosition}
        layout='fill'
        objectFit='cover'
      />
    </figure>
  )
}
