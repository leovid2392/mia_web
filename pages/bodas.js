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
// import Layout1x1 from '../components/Layout1x1'
//<<<<<<<<< components<<<<<<<<<<<<<<<<<<<
//<<<<<<<<< images<<<<<<<<<<<<<<<<<<<<<<<<<<<<
import slide1 from '../public/images/bodas/cele1_small750x500.jpg'
import slide2 from '../public/images/bodas/mia-5750_small500x750.jpg'
import slide3 from '../public/images/bodas/cele3_small750x500.jpg'

// <<<<<<<<<images<<<<<<<<<<<<<<<<<<<<<<<<<<<<

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
      <TitleSection text='Nuestros socios' />
    </Layout>
  )
}
