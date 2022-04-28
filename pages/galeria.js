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
import ArticleThreeImg from '../components/ArticleThreeImg'
//<<<<<<<<< components<<<<<<<<<<<<<<<<<<<
//<<<<<<<<< images<<<<<<<<<<<<<<<<<<<<<<<<<<<<

import slide1 from '../public/images/galeria/cele1_small750x500.jpg'
import slide2 from '../public/images/galeria/mia-5750_small500x750.jpg'
import slide3 from '../public/images/galeria/cele3_small750x500.jpg'

import menuStyles from '../styles/MenuPage.module.css'

// <<<<<<<<<images<<<<<<<<<<<<<<<<<<<<<<<<<<<<

export default function Galeria() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('galeria:metaTitle')}
      description={t('galeria:metaDescription')}
    >
      {/* <Hero
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
      /> */}
      <div className={menuStyles.titlePage}>
        <TitlePage text='galeria' />
      </div>
      <section>
        <Layout1x1
          img={slide1}
          alt='image description'
          objectPosition='center'
        />
        <Layout1x1
          img={slide1}
          alt='image description'
          objectPosition='center'
        />
        <Layout1x1
          img={slide1}
          alt='image description'
          objectPosition='center'
        />
      </section>
      {/* <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta' /> */}
      {/* <ArticleSquare
        image={slide1}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='restaurante'
        paragraph=''
        linkText=''
        linkHref=''
      >
        <LinkBorder text='ver galeria' link='#' />
      </ArticleSquare> */}
      {/* <ArticleSquare
        image={slide1}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='bebidas'
        paragraph=''
        linkText=''
        linkHref=''
      >
        <LinkBorder text='ver galeria' link='#' />
      </ArticleSquare> */}
      {/* <ArticleSquare
        image={slide1}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='vino'
        paragraph=''
        linkText=''
        linkHref=''
      >
        <LinkBorder text='ver galeria' link='#' />
      </ArticleSquare> */}
      {/* <ArticleSquare
        image={slide1}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='beach club'
        paragraph=''
        linkText=''
        linkHref=''
      >
        <LinkBorder text='ver galeria' link='#' />
      </ArticleSquare> */}
      {/* <ArticleSquare
        image={slide1}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='bodas'
        paragraph=''
        linkText=''
        linkHref=''
      >
        <LinkBorder text='ver galeria' link='#' />
      </ArticleSquare> */}
      {/* <ArticleSquare
        image={slide1}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='dj party'
        paragraph=''
        linkText=''
        linkHref=''
      >
        <LinkBorder text='ver galeria' link='#' />
      </ArticleSquare> */}
      {/* <ArticleSquare
        image={slide1}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='celebraciones'
        paragraph=''
        linkText=''
        linkHref=''
      >
        <LinkBorder text='ver galeria' link='#' />
      </ArticleSquare> */}
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
        title='restaurante'
        paragraph=''
        linkText=''
        linkHref=''
      />
      <LinkBorder text='ver galeria' link='#' /> */}
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
      {/* <TitleSection text='bebidas' /> */}
      {/* <LinkBorder text='ver galeria' link='#' /> */}
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
      {/* <Layout1x1 img={slide3} alt='image description' objectPosition='center' /> */}
      {/* <TitleSection text='vinos' /> */}
      {/* <LinkBorder text='ver galeria' link='#' /> */}
      {/* <ArticleSquare
        image={slide3}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='BeachClub'
        paragraph=''
        linkText=''
        linkHref=''
      /> */}
      {/* <LinkBorder text='ver galeria' link='#' /> */}
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
      {/* <TitleSection text='bodas' /> */}
      {/* <LinkBorder text='ver galeria' link='#' /> */}
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
        title='djparty'
        paragraph=''
        linkText=''
        linkHref=''
      /> */}
      {/* <LinkBorder text='ver galeria' link='#' /> */}
      {/* <ArticleThreeImg
        img1={slide1}
        img2={slide2}
        img3={slide3}
        alt1={'image description'}
        alt2={'image description'}
        alt3={'image description'}
        objectPosition1='0 -100px'
        objectPosition2='center'
        objectPosition3='center'
        title='celebraciones'
        paragraph=''
        linkText=''
        linkHref=''
      /> */}
      {/* <LinkBorder text='ver galeria' link='#' /> */}
    </Layout>
  )
}
