import InternalLink from './InternalLink'
import Paragraph from './Paragraph'
import TitleSection from './TitleSection'
import Image from 'next/image'

import styles from '../styles/ArticleSquareWhite.module.css'

export default function ArticleSquareWhite({
  image,
  objectFit,
  objectPosition,
  title,
  paragraph,
  linkText,
  linkHref,
  alt,
  children,
}) {
  return (
    <article className={styles.container}>
      <figure className={styles.imgContainer}>
        <Image
          src={image}
          alt={alt}
          layout='fill'
          objectFit={objectFit}
          objectPosition={objectPosition}
        ></Image>
      </figure>
      <div className={styles.textContainer}>
        <TitleSection text={title} />
        <Paragraph text={paragraph} />
        <InternalLink link={linkHref} text={linkText} />
        {children}
      </div>
    </article>
  )
}
