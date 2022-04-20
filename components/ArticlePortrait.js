import Image from 'next/image'

import TitleSection from './TitleSection'
import Paragraph from './Paragraph'
import InternalLink from './InternalLink'
import articleImg from '../public/images/mia-6152_small500x750.jpg'

import styles from '../styles/ArticlePortrait.module.css'
export default function ArticlePortrait() {
  return (
    <article className={styles.container}>
      <figure className={styles.imgContainer}>
        <Image
          src={articleImg}
          width={280}
          height={420}
          layout='responsive'
        ></Image>
      </figure>
      <div className={styles.infoContainer}>
        <TitleSection text='Restaurante' />
        <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta' />
        <InternalLink link='/restaurante' text='saber más' />
      </div>
    </article>
  )
}
