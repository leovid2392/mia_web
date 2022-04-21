import Image from 'next/image'
import styles from '../styles/ArticleSquare.module.css'
import InternalLink from './InternalLink'
import Paragraph from './Paragraph'
import TitleSection from './TitleSection'

export default function ArticleSquare({
  image,
  alt,
  layout,
  objectFit,
  objectPosition,
  title,
  paragraph,
  linkText,
  linkHref,
}) {
  return (
    <section className={styles.container}>
      <figure className={styles.imgContainer}>
        <Image
          src={image}
          alt={alt}
          layout={layout}
          objectFit={objectFit}
          objectPosition={objectPosition}
        />
      </figure>
      <div>
        <TitleSection text={title} />
        <Paragraph text={paragraph} />
        <InternalLink text={linkText} link={linkHref} />
      </div>
    </section>
  )
}
