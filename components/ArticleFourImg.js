import styles from '../styles/ArticleFourImg.module.css'

import Image from 'next/image'
import TitleSection from './TitleSection'
import Paragraph from './Paragraph'
import InternalLink from './InternalLink'

export default function ArticleFourImg({
  img1,
  img2,
  img3,
  img4,
  alt1,
  alt2,
  alt3,
  alt4,
  objectPosition1,
  objectPosition2,

  objectPosition3,
  objectPosition4,
  title,
  paragraph,
  linkText,
  linkHref,
}) {
  return (
    <article className={styles.container}>
      <div className={styles.imgLayout}>
        <figure className={styles.imgContainer}>
          <Image
            src={img1}
            alt1={alt1}
            layout='fill'
            objectFit='cover'
            objectPosition={objectPosition1}
          ></Image>
        </figure>
        <figure className={styles.imgContainer2}>
          <Image
            src={img2}
            alt1={alt2}
            layout='fill'
            objectFit='cover'
            objectPosition={objectPosition2}
          ></Image>
        </figure>
        <figure className={styles.imgContainer3}>
          <Image
            src={img3}
            alt1={alt3}
            layout='fill'
            objectFit='cover'
            objectPosition={objectPosition3}
          ></Image>
        </figure>
        <figure className={styles.imgContainer4}>
          <Image
            src={img4}
            alt1={alt4}
            layout='fill'
            objectFit='cover'
            objectPosition={objectPosition4}
          ></Image>
        </figure>
      </div>
      <div>
        <TitleSection text={title} />
        <Paragraph text={paragraph} />
        <InternalLink text={linkText} link={linkHref} />
      </div>
    </article>
  )
}
