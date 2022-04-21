import styles from '../styles/ArticleThreeImg.module.css'

import Image from 'next/image'
import TitleSection from './TitleSection'
import Paragraph from './Paragraph'
import InternalLink from './InternalLink'
export default function ArticleThreeImg({
  img1,
  img2,
  img3,
  alt1,
  alt2,
  alt3,
  objectPosition1,
  objectPosition2,
  objectPosition3,
  title,
  paragraph,
  linkText,
  linkHref,
}) {
  return (
    <article className={styles.container}>
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
      <figure className={styles.imgContainer}>
        <Image
          src={img3}
          alt1={alt3}
          layout='fill'
          objectFit='cover'
          objectPosition={objectPosition3}
        ></Image>
      </figure>
      <div>
        <TitleSection text={title} />
        <Paragraph text={paragraph} />
        <InternalLink text={linkText} link={linkHref} />
      </div>
    </article>
  )
}
