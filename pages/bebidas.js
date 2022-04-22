import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

// components<<<<<<<<<<
import Hero from '../components/Hero'
import TitlePage from '../components/TitlePage'
import Paragraph from '../components/Paragraph'
import ArticlePortrait from '../components/ArticlePortrait'
import LinkBorder from '../components/LinkBorder'
import ArticleFourImg from '../components/ArticleFourImg'
import ArticleSquare from '../components/ArticleSquare'
import ArticleSquareWhite from '../components/ArticleSquareWhite'
import SliderReviews from '../components/SliderReviews'
import TitleSection from '../components/TitleSection'
import SliderBottle from '../components/SliderBottle'
// components<<<<<<<<<<
// images<<<<<<<<<<
import slide1 from '../public/images/bebidas/cele1_small750x500.jpg'
import slide2 from '../public/images/bebidas/mia-5750_small500x750.jpg'
import slide3 from '../public/images/bebidas/cele3_small750x500.jpg'
import sliderReviesImg1 from '../public/images/bebidas/botella_100x300.png'

// import hero1 from '../public/images/bebidas/mia-5848_small500x750.jpg'
// import hero2 from '../public/images/bebidas/mezcal_small750x500.jpg'
// import hero3 from '../public/images/bebidas/MiaTulum-3314_small500x750.jpg'

// images<<<<<<<<<<

export default function Bebidas() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('bebidas:metaTitle')}
      description={t('bebidas:metaDescription')}
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
            image: slide3,
          },
        ]}
      />
      <TitlePage text='bebidas' />
      <Paragraph text='El equipo de mixólogos está listo para satisfacerte con la creación de cocteles según tus gustos, con aromas cítricos, ahumados y frutales acompañados de los mejores destilados y licores premium.' />
      <ArticlePortrait
        image={slide1}
        alt='image description'
        title='mixologia'
        paragraph='Con aromas cítricos, ahumados y frutales acompañados de los mejores destilados y licores premium.'
        linkText=''
        linkHref='/'
      />
      <LinkBorder text='ver menu' link='#' />
      <ArticleFourImg
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
        title='cervezas'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText=''
        linkHref=''
      />
      <LinkBorder text='ver menu' link='#' />
      <ArticleSquare
        image={slide3}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='Destilados'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText=''
        linkHref=''
      />
      <LinkBorder text='ver menu' link='#' />
      <TitleSection text='nuestra selección' />
      <SliderBottle
        sliderData={[
          {
            id: 1,
            image: sliderReviesImg1,
            name: 'SEGUIN MANUEL POULLY-FUISE',
            review:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ',
          },
          {
            id: 2,
            image: sliderReviesImg1,
            name: 'SEGUIN MANUEL POULLY-FUISE',
            review:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ',
          },
          {
            id: 3,
            image: sliderReviesImg1,
            name: 'SEGUIN MANUEL POULLY-FUISE',
            review:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ',
          },
        ]}
      />

      <ArticleSquareWhite
        image={slide2}
        title='cóctel del mes'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText='saber más'
        linkHref='/vino'
        alt='image description'
        objectFit='cover'
        objectPosition='center'
      />
    </Layout>
  )
}
