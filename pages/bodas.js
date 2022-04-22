import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

// <<<<<<<<<components<<<<<<<<<<<<<<<<<<<
import Hero from '../components/Hero'
import TitlePage from '../components/TitlePage'
import Paragraph from '../components/Paragraph'
import ArticlePortrait from '../components/ArticlePortrait'
// import ArticleFourImg from '../components/ArticleFourImg'
// import ArticleSquare from '../components/ArticleSquare'
import ArticleSquareWhite from '../components/ArticleSquareWhite'
import Layout2x2 from '../components/Layout2x2'
import TitleSection from '../components/TitleSection'
import Banner from '../components/Banner'
import SliderReviews from '../components/SliderReviews'
import Image from 'next/image'
// import Layout1x1 from '../components/Layout1x1'
//<<<<<<<<< components<<<<<<<<<<<<<<<<<<<
//<<<<<<<<< images<<<<<<<<<<<<<<<<<<<<<<<<<<<<
import slide1 from '../public/images/bodas/cele1_small750x500.jpg'
import slide2 from '../public/images/bodas/mia-5750_small500x750.jpg'
import slide3 from '../public/images/bodas/cele3_small750x500.jpg'
import sliderComentsImg1 from '../public/images/oliver.jpg'
import sliderComentsImg2 from '../public/images/pabloFierro.jpg'
import partnersLogo from '../public/images/bodas/logo-junebug_small300x120.png'
// <<<<<<<<<images<<<<<<<<<<<<<<<<<<<<<<<<<<<<
import styles from '../styles/Home.module.css'
export default function Bodas() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('bodas:metaTitle')}
      description={t('bodas:metaDescription')}
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
      <TitlePage text='bodas' />
      <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta' />
      <ArticlePortrait
        image={slide1}
        alt='image description'
        title='propuestas de matrimonio'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText=''
        linkHref='/'
      />
      <Banner
        text='Contáctanos'
        link='/contacto'
        image={slide1}
        objectFit='cover'
        objectPosition='center'
      />
      <TitleSection text='renovación de votos' />
      <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta' />
      <Layout2x2
        img1={slide1}
        img2={slide2}
        img3={slide3}
        alt1='image description'
        alt2='image description'
        alt3='image description'
        objectPosition1='center'
        objectPosition2='center'
        objectPosition3='center'
      />
      <ArticleSquareWhite
        image={slide2}
        title='cenas romanticas'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText=''
        linkHref=''
        alt='image description'
        objectFit='cover'
        objectPosition='center'
      />
      <SliderReviews
        sliderData={[
          {
            id: 1,
            image: sliderComentsImg1,
            name: 'Iris Ilike',
            review:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ',
          },
          {
            id: 2,
            image: sliderComentsImg2,
            name: 'Gregg Reeves',
            review:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ',
          },
          {
            id: 3,
            image: sliderComentsImg1,
            name: 'Claudia Clements',
            review:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ',
          },
        ]}
      />
      <TitleSection text='Nuestros socios' />
      <figure className={styles.imgContainer}>
        <Image
          src={partnersLogo}
          alt='image description'
          width={300}
          height={120}
          layout='fixed'
        ></Image>
      </figure>
    </Layout>
  )
}
