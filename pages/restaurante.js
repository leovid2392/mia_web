import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

// components>>>>>>>>>>
import Hero from '../components/Hero'
import TitlePage from '../components/TitlePage'
import TitleSection from '../components/TitleSection'
import Paragraph from '../components/Paragraph'
import ArticleSquare from '../components/ArticleSquare'
import LinkBorder from '../components/LinkBorder'
import ArticlePortrait from '../components/ArticlePortrait'
import ArticleFourImg from '../components/ArticleFourImg'
import ArticleSquareWhite from '../components/ArticleSquareWhite'
// components>>>>>>>>>>
// images>>>>>>>>>>
import slide1 from '../public/images/bodas-1_small500x750.jpg'
import slide2 from '../public/images/mia-4744_small500x750.jpg'

import lunchImg1 from '../public/images/restaurante/mia-6146_small750x500.jpg'
import lunchImg2 from '../public/images/restaurante/mia-5879_small500x750.jpg'
import lunchImg3 from '../public/images/restaurante/mia-5771_small750x500.jpg'
import lunchImg4 from '../public/images/restaurante/mia-5739_small500x750.jpg'
import dinnerImg from '../public/images/restaurante/mia-5910_small500x750.jpg'
import postreImg from '../public/images/restaurante/postre1_small750x500.jpg'
import drinkImg from '../public/images/restaurante/mia-5829_small500x750.jpg'
import wineImg from '../public/images/restaurante/vino11_small750x500.jpg'

import breakfastImg from '../public/images/restaurante/MiaTulum-3735_small500x750.jpg'
// images>>>>>>>>>>

import styles from '../styles/Restaurante.module.css'
import Banner from '../components/Banner'

export default function Restaurante() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('restaurante:metaTitle')}
      description={t('restaurante:metaDescription')}
    >
      <Hero
        sliderData={[
          {
            id: 1,
            image: slide1,
          },
          {
            id: 2,
            image: slide2,
          },
          {
            id: 3,
            image: slide1,
          },
        ]}
      />
      <TitlePage text='restaurante' />
      <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta' />
      <ArticleSquare
        image={breakfastImg}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='70%'
        title='por la mañana'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText=''
        linkHref=''
      />
      <p className={styles.p}>Horario: 8:00 am - 11:00 pm </p>
      <LinkBorder text='ver menu' link='#' />
      <ArticleFourImg
        img1={lunchImg1}
        img2={lunchImg2}
        img3={lunchImg3}
        img4={lunchImg4}
        alt1={'image description'}
        alt2={'image description'}
        alt3={'image description'}
        alt4={'image description'}
        objectPosition1='center'
        objectPosition2='center'
        objectPosition3='center'
        objectPosition4='center'
        title='para el almuerzo'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText=''
        linkHref=''
      />
      <p className={styles.p}>Horario: 11:00 pm - 06:00 pm </p>
      <LinkBorder text='ver menu' link='#' />
      <ArticlePortrait
        image={dinnerImg}
        alt='image description'
        title='por la noche'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText=''
        linkHref=''
      />
      <p className={styles.p}>Horario: 6:00 pm - 10:00 pm </p>
      <LinkBorder text='ver menu' link='#' />
      <ArticlePortrait
        image={postreImg}
        alt='image description'
        title='postres'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText=''
        linkHref=''
      />
      <p className={styles.p}>Horario: 6:00 pm - 10:00 pm </p>
      <LinkBorder text='ver menu' link='#' />
      <Banner
        image={postreImg}
        alt='image description'
        text='Reserva tu mesa aquí'
        objectFit='cover'
        objectPosition='center'
        link='/contacto'
      />
      <ArticlePortrait
        image={postreImg}
        alt='image description'
        title='vip room'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText=''
        linkHref=''
      />
      <ArticleSquare
        image={drinkImg}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='Brinda con nosotros'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText='saber más'
        linkHref='/bebidas'
      />

      <ArticleSquareWhite
        image={wineImg}
        title='vinos'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText='saber más'
        linkHref='/vino'
        alt='image description'
        objectFit='cover'
        objectPosition='-100px'
      />
    </Layout>
  )
}
