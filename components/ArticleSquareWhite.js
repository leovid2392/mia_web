import InternalLink from './InternalLink'
import Paragraph from './Paragraph'
import TitleSection from './TitleSection'
import Image from 'next/image'

import styles from '../styles/ArticleSquareWhite.module.css'

export default function ArticleSquareWhite({
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
      <div className={styles.textContainer}>
        <TitleSection text={title} />
        <Paragraph text={paragraph} />
        <InternalLink link={linkHref} text={linkText} />
      </div>
    </article>
  )
}