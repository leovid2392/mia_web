import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

// components<<<<<<<<<<
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
import SliderBottle from '../components/SliderBottle'
// components<<<<<<<<<<
// images<<<<<<<<<<
import slide1 from '../public/images/vino/cele1_small750x500.jpg'
import slide2 from '../public/images/vino/mia-5750_small500x750.jpg'
import slide3 from '../public/images/vino/cele3_small750x500.jpg'
import sliderReviesImg1 from '../public/images/bebidas/botella_100x300.png'

// images<<<<<<<<<<

export default function Vino() {
  let { t } = useTranslation()
  return (
    <Layout title={t('vino:metaTitle')} description={t('vino:metaDescription')}>
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
      <TitlePage text='vinos' />
      <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta' />
      <ArticleSquareWhite
        image={slide2}
        title='cava mas completa del destino'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText=''
        linkHref=''
        alt='image description'
        objectFit='cover'
        objectPosition='center'
      />
      <ArticlePortrait
        image={slide3}
        alt='image description'
        title=''
        paragraph='c'
        linkText=''
        linkHref='/'
      />
      <ArticleSquare
        image={slide1}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='wine spectator'
        paragraph=''
        linkText=''
        linkHref=''
      />
      <ArticleSquare
        image={slide2}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title=''
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText=''
        linkHref=''
      />
      <Banner
        text='Nuestas 300 etiquetas'
        link='#'
        image={slide1}
        objectFit='cover'
        objectPosition='center'
      />

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
      <TitleSection text='maridaje' />
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
      <Banner
        text='Espera nuestro próximo festival'
        link='#'
        image={slide1}
        objectFit='cover'
        objectPosition='center'
      />
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
        title='festivales de vino'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText=''
        linkHref=''
      />
    </Layout>
  )
}
