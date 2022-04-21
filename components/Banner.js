import styles from '../styles/Banner.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Banner({
  text,
  image,
  alt,
  objectFit,
  objectPosition,
  link,
}) {
  return (
    <div className={styles.container}>
      <figure className={styles.imgContainer}>
        <Image
          src={image}
          alt={alt}
          layout='fill'
          objectFit={objectFit}
          objectPosition={objectPosition}
        />
      </figure>
      <div className={styles.dark}></div>
      <Link href={link}>
        <a className={styles.a}>{text}</a>
      </Link>
    </div>
  )
}
