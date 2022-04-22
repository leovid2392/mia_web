import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

// <<<<<<<<<components<<<<<<<<<<<<<<<<<<<
import Hero from '../components/Hero'
import TitlePage from '../components/TitlePage'
import Paragraph from '../components/Paragraph'
// import ArticlePortrait from '../components/ArticlePortrait'
// import ArticleFourImg from '../components/ArticleFourImg'
// import ArticleSquare from '../components/ArticleSquare'
import ArticleSquareWhite from '../components/ArticleSquareWhite'
// import Layout2x2 from '../components/Layout2x2'
import TitleSection from '../components/TitleSection'
// import Banner from '../components/Banner'
import Layout1x1 from '../components/Layout1x1'
//<<<<<<<<< components<<<<<<<<<<<<<<<<<<<
//<<<<<<<<< images<<<<<<<<<<<<<<<<<<<<<<<<<<<<

import slide1 from '../public/images/djparty/cele1_small750x500.jpg'
import slide2 from '../public/images/djparty/mia-5750_small500x750.jpg'
import slide3 from '../public/images/djparty/cele3_small750x500.jpg'

import hero1 from '../public/images/djparty/dj2_small750x500.jpg'
import hero2 from '../public/images/djparty/dj3_small750x500.jpg'
import hero3 from '../public/images/djparty/dj1_small750x500.jpg'

// <<<<<<<<<images<<<<<<<<<<<<<<<<<<<<<<<<<<<<
export default function DjParty() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('djParty:metaTitle')}
      description={t('djParty:metaDescription')}
    >
      <Hero
        sliderData={[
          {
            id: 1,
            image: hero1,
          },
          {
            id: 2,
            image: hero2,
          },
          {
            id: 3,
            image: hero3,
          },
        ]}
      />
      <TitlePage text='djparty' />
      <Paragraph text='Con los pies en la arena, te invitamos a vivir una experiencia sonora multi sensorial, ritmos tribales, electrónicos y acústicos se unen para crear un ambiente inigualable.' />
      <Layout1x1 img={slide3} alt='image description' objectPosition='center' />
      <TitleSection text='eventos' />
      <ArticleSquareWhite
        image={slide2}
        title='pablo fierro'
        paragraph='Autor y compositor de guitarra, bajo, percusión y piano, ha desarrollado cientos de producciones de los más diversos estilos junto a diferentes artistas de talla mundial, como Gilles Peterson, Louie Vega, Atjazz y Black Coffee, entre otros.'
        linkText='ir al blog'
        linkHref='#'
        alt='image description'
        objectFit='cover'
        objectPosition='center'
      />
    </Layout>
  )
}
