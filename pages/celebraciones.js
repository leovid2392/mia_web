import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

// <<<<<<<<<components<<<<<<<<<<<<<<<<<<<
import Hero from '../components/Hero'
import TitlePage from '../components/TitlePage'
import Paragraph from '../components/Paragraph'
import ArticlePortrait from '../components/ArticlePortrait'
import ArticleFourImg from '../components/ArticleFourImg'
import ArticleSquare from '../components/ArticleSquare'
import ArticleSquareWhite from '../components/ArticleSquareWhite'
import Layout2x2 from '../components/Layout2x2'
import TitleSection from '../components/TitleSection'
import Banner from '../components/Banner'
import Layout1x1 from '../components/Layout1x1'
import LinkBorder from '../components/LinkBorder'
import BtnLinkExterno from '../components/BtnLinkExterno'
//<<<<<<<<< components<<<<<<<<<<<<<<<<<<<
//<<<<<<<<< images<<<<<<<<<<<<<<<<<<<<<<<<<<<<

import slide1 from '../public/images/celebraciones/cele1_small750x500.jpg'
import slide2 from '../public/images/celebraciones/mia-5750_small500x750.jpg'
import slide3 from '../public/images/celebraciones/cele3_small750x500.jpg'

import celebraciones_hero_01 from '../public/images/celebraciones/celebraciones_hero_01.jpg'
import celebraciones_hero_02 from '../public/images/celebraciones/celebraciones_hero_02.jpg'
import celebraciones_hero_03 from '../public/images/celebraciones/celebraciones_hero_03.jpg'

// <<<<<<<<<images<<<<<<<<<<<<<<<<<<<<<<<<<<<<

import styles from '../styles/Celebraciones.module.css'

export default function Celebraciones() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('celebraciones:metaTitle')}
      description={t('celebraciones:metaDescription')}
    >
      <Hero
        sliderData={[
          {
            id: 1,
            image: celebraciones_hero_01,
          },
          {
            id: 2,
            image: celebraciones_hero_02,
          },
          {
            id: 3,
            image: celebraciones_hero_03,
          },
        ]}
      />
      <div className={styles.description}>
        <TitlePage text='celebraciones' />
        <Paragraph text='Mía Tulum se carateriza por ser un espacio de fiesta, alegria y celebración constante al ser y estar en el momento presente, es el espacio relajado, casual e ideal para celebrar cumpleaños, despedidas de soltera, cocteles y grupos de incentivos y cenas de ensayo. ' />
        <Paragraph text='Nuestro equipo de coordinadores en casa te ayudarán a explorar las diferentes opciones y  áreas con atmósferas diferentes para tu celebración especial.  ' />
        <BtnLinkExterno
          text='Aparta tu fecha'
          link='https://wa.me/5219841339662'
        />
      </div>
      {/* <ArticleFourImg
        img1={slide1}
        img2={slide2}
        img3={slide3}
        img4={slide2}
        alt1={'image description'}
        alt2={'image description'}
        alt3={'image description'}
        alt4={'image description'}
        objectPosition1='center'
        objectPosition2='center'
        objectPosition3='center'
        objectPosition4='center'
        title='despedidas de solero(a)'
        paragraph=''
        linkText=''
        linkHref=''
      /> */}
      {/* <TitleSection text='cumpleaños' /> */}
      {/* <div className={styles.layout1x1}>
        <Layout1x1
          img={slide3}
          alt='image description'
          objectPosition='center'
        />
      </div> */}
      {/* <div className={styles.layout3x1}>
        <Layout1x1
          img={slide3}
          alt='image description'
          objectPosition='center'
        />
        <Layout1x1
          img={slide3}
          alt='image description'
          objectPosition='center'
        />
        <Layout1x1
          img={slide3}
          alt='image description'
          objectPosition='center'
        />
      </div> */}
      {/* <ArticleSquare
        image={slide2}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='aniversarios'
        paragraph=''
        linkText=''
        linkHref=''
      /> */}
      {/* <TitleSection text='cócteles' /> */}
      {/* <Layout2x2
        img1={slide1}
        img2={slide2}
        img3={slide3}
        alt1='image description'
        alt2='image description'
        alt3='image description'
        objectPosition1='center'
        objectPosition2='center'
        objectPosition3='center'
      /> */}
      {/* <ArticlePortrait
        image={slide1}
        alt='image description'
        title='grupos de incentivo'
        paragraph=''
        linkText=''
        linkHref='/'
      /> */}

      {/* <div className={styles.cena}>
        <ArticleSquare
          image={slide2}
          alt='image description'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          title='cena de ensayo'
          paragraph=''
          linkText=''
          linkHref=''
        />
      </div> */}
    </Layout>
  )
}
