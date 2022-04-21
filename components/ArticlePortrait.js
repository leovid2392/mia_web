import Image from 'next/image'

import TitleSection from './TitleSection'
import Paragraph from './Paragraph'
import InternalLink from './InternalLink'

import styles from '../styles/ArticlePortrait.module.css'
export default function ArticlePortrait({
  image,
  title,
  paragraph,
  linkText,
  linkHref,
  alt,
}) {
  return (
    <article className={styles.container}>
      <figure className={styles.imgContainer}>
        <Image src={image} alt={alt}></Image>
      </figure>
      <div className={styles.infoContainer}>
        <TitleSection text={title} />
        <Paragraph text={paragraph} />
        <InternalLink link={linkHref} text={linkText} />
      </div>
    </article>
  )
}
