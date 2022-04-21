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
//<<<<<<<<< components<<<<<<<<<<<<<<<<<<<
//<<<<<<<<< images<<<<<<<<<<<<<<<<<<<<<<<<<<<<

import slide1 from '../public/images/celebraciones/cele1_small750x500.jpg'
import slide2 from '../public/images/celebraciones/mia-5750_small500x750.jpg'
import slide3 from '../public/images/celebraciones/cele3_small750x500.jpg'

// <<<<<<<<<images<<<<<<<<<<<<<<<<<<<<<<<<<<<<

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
      <TitlePage text='celebraciones' />
      <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta' />
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
        title='despedidas de solero(a)'
        paragraph=''
        linkText=''
        linkHref=''
      />
      <Layout1x1 img={slide3} alt='image description' objectPosition='center' />
      <TitleSection text='cumpleaños' />
      <ArticleSquare
        image={slide2}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='aniversarios'
        paragraph=''
        linkText=''
        linkHref=''
      />
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
      <TitleSection text='cócteles' />
      <ArticlePortrait
        image={slide1}
        alt='image description'
        title='grupos de incentivo'
        paragraph=''
        linkText=''
        linkHref='/'
      />

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
    </Layout>
  )
}
