import styles from '../styles/Layout2x2.module.css'
import Image from 'next/image'
export default function Layout2x2({
  img1,
  img2,
  img3,
  alt1,
  alt2,
  alt3,
  objectPosition1,
  objectPosition2,
  objectPosition3,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.imgLayout}>
        <figure className={styles.imgContainer}>
          <Image
            src={img1}
            alt={alt1}
            objectPosition={objectPosition1}
            layout='fill'
            objectFit='cover'
          />
        </figure>
        <figure className={styles.imgContainer2}>
          <Image
            src={img2}
            alt={alt2}
            objectPosition={objectPosition2}
            layout='fill'
            objectFit='cover'
          />
        </figure>
        <figure className={styles.imgContainer3}>
          <Image
            src={img3}
            alt={alt3}
            objectPosition={objectPosition3}
            layout='fill'
            objectFit='cover'
          />
        </figure>
      </div>
    </div>
  )
}
