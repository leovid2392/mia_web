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

import galeria_1 from '../public/images/galeria/galeria_1.jpg'
import galeria_2 from '../public/images/galeria/galeria_2.jpg'
import galeria_3 from '../public/images/galeria/galeria_3.jpg'
import galeria_4 from '../public/images/galeria/galeria_4.jpg'
import galeria_5 from '../public/images/galeria/galeria_5.jpeg'
import galeria_6 from '../public/images/galeria/galeria_6.jpg'
import galeria_7 from '../public/images/galeria/galeria_7.jpeg'
import galeria_8 from '../public/images/galeria/galeria_8.jpg'
import galeria_9 from '../public/images/galeria/galeria_9.jpg'
import galeria_10 from '../public/images/galeria/galeria_10.jpg'
import galeria_11 from '../public/images/galeria/galeria_11.jpg'
import galeria_12 from '../public/images/galeria/galeria_12.jpg'
import galeria_13 from '../public/images/galeria/galeria_13.jpg'
import galeria_14 from '../public/images/galeria/galeria_14.jpg'
import galeria_15 from '../public/images/galeria/galeria_15.jpg'
import galeria_16 from '../public/images/galeria/galeria_16.jpg'
import galeria_17 from '../public/images/galeria/galeria_17.jpg'
import galeria_18 from '../public/images/galeria/galeria_18.jpg'
import galeria_19 from '../public/images/galeria/galeria_19.jpg'
import galeria_20 from '../public/images/galeria/galeria_20.jpg'
import galeria_21 from '../public/images/galeria/galeria_21.jpg'
import galeria_22 from '../public/images/galeria/galeria_22.jpg'
import galeria_23 from '../public/images/galeria/galeria_23.jpg'
import galeria_24 from '../public/images/galeria/galeria_24.jpeg'
import galeria_25 from '../public/images/galeria/galeria_25.jpg'

import galeria_28 from '../public/images/galeria/galeria_28.jpg'
import galeria_29 from '../public/images/galeria/galeria_29.jpg'
import galeria_30 from '../public/images/galeria/galeria_30.jpg'
import galeria_31 from '../public/images/galeria/galeria_31.jpg'
import galeria_32 from '../public/images/galeria/galeria_32.jpg'

import galeria_33 from '../public/images/galeria/galeria_33.jpg'
import galeria_34 from '../public/images/galeria/galeria_34.jpg'
import galeria_35 from '../public/images/galeria/galeria_35.jpg'
import galeria_36 from '../public/images/galeria/galeria_36.jpg'
import galeria_37 from '../public/images/galeria/galeria_37.jpg'

// import galeria_38 from '../public/images/galeria/galeria_38.jpg'

import menuStyles from '../styles/MenuPage.module.css'
import styles from '../styles/Galeria.module.css'

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
      <section className={styles.gallery}>
        <div>
          <Layout1x1
            img={galeria_1}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.vStretch}>
          <Layout1x1
            img={galeria_2}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.hStretch}>
          <Layout1x1
            img={galeria_3}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div>
          <Layout1x1
            img={galeria_4}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div>
          <Layout1x1
            img={galeria_5}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.vStretch}>
          <Layout1x1
            img={galeria_6}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.bigStretch}>
          <Layout1x1
            img={galeria_7}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div>
          <Layout1x1
            img={galeria_8}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.hStretch}>
          <Layout1x1
            img={galeria_9}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div>
          <Layout1x1
            img={galeria_10}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div>
          <Layout1x1
            img={galeria_11}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.vStretch}>
          <Layout1x1
            img={galeria_12}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div>
          <Layout1x1
            img={galeria_13}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.bigStretch}>
          <Layout1x1
            img={galeria_14}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div>
          <Layout1x1
            img={galeria_15}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.hStretch}>
          <Layout1x1
            img={galeria_16}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div>
          <Layout1x1
            img={galeria_17}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.bigStretch}>
          <Layout1x1
            img={galeria_18}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div>
          <Layout1x1
            img={galeria_19}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div>
          <Layout1x1
            img={galeria_20}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.vStretch}>
          <Layout1x1
            img={galeria_21}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.hStretch}>
          <Layout1x1
            img={galeria_22}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div>
          <Layout1x1
            img={galeria_23}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.vStretch}>
          <Layout1x1
            img={galeria_24}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.bigStretch}>
          <Layout1x1
            img={galeria_25}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.hStretch}>
          <Layout1x1
            img={galeria_28}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div>
          <Layout1x1
            img={galeria_29}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.bigStretch}>
          <Layout1x1
            img={galeria_30}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.vStretch}>
          <Layout1x1
            img={galeria_31}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div>
          <Layout1x1
            img={galeria_32}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.bigStretch}>
          <Layout1x1
            img={galeria_33}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.hStretch}>
          <Layout1x1
            img={galeria_34}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.vStretch}>
          <Layout1x1
            img={galeria_35}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div>
          <Layout1x1
            img={galeria_36}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={styles.bigStretch}>
          <Layout1x1
            img={galeria_37}
            alt='image description'
            objectPosition='center'
          />
        </div>
        {/* <div>
          <Layout1x1
            img={galeria_38}
            alt='image description'
            objectPosition='center'
          />
        </div> */}
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
