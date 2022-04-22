import { useState, useEffect } from 'react'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import useTranslation from 'next-translate/useTranslation'
import TitlePage from '../components/TitlePage'
import Paragraph from '../components/Paragraph'
import ArticlePortrait from '../components/ArticlePortrait'

import slide1 from '../public/images/bodas-1_small500x750.jpg'
import slide2 from '../public/images/mia-4744_small500x750.jpg'
import beachClub1 from '../public/images/home/mia-5750_small500x750.jpg'
import wineImg from '../public/images/home/vino-1_small722x500.jpg'
import restaurantImg from '../public/images/home/mia-6152_small500x750.jpg'
import beachClub2 from '../public/images/home/mia-6004_small500x750.jpg'
import bebidasImg from '../public/images/home/mia-4744_small500x750.jpg'
import bodasImg from '../public/images/home/bodas-1_small500x750.jpg'
import musicImg from '../public/images/home/music-2_small750x500.jpg'
import celeimg1 from '../public/images/home/cele3_small750x500.jpg'
import celeimg2 from '../public/images/home/cele1_small750x500.jpg'
import celeimg3 from '../public/images/home/cele2_small750x500.jpg'

import ArticleSquare from '../components/ArticleSquare'

import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TitleSection from '../components/TitleSection'
import InternalLink from '../components/InternalLink'
import DisplayTwoImg from '../components/DisplayTwoImg'
import ArticleSquareWhite from '../components/ArticleSquareWhite'
import ArticleThreeImg from '../components/ArticleThreeImg'

import popupImg from '../public/images/pop1_small500x889.jpg'

import Script from 'next/script'
import Popup from '../components/Popup'
import SliderReviews from '../components/SliderReviews'
import sliderComentsImg1 from '../public/images/oliver.jpg'
import sliderComentsImg2 from '../public/images/pabloFierro.jpg'
// import { TaskContext } from '../context/taskContext'
// import { useContext } from 'react'

export default function Home() {
  const [buttonPopup, setButtonPopup] = useState(false)
  const [timePopup, setTimePopup] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTimePopup(true)
    }, 3000)
  }, [])

  let { t } = useTranslation()
  return (
    <Layout
      title={t('common:metaTitle')}
      description={t('common:metaDescription')}
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
      <TitlePage text='Mia tulum' />
      <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta' />
      <ArticlePortrait
        image={restaurantImg}
        alt='image description'
        title='restaurante'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText='saber más'
        linkHref='/restaurante'
      />
      <ArticleSquare
        image={wineImg}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='70%'
        title='Vinos'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText='saber más'
        linkHref='/vino'
      />
      <section className={styles.displayTwoImg}>
        <DisplayTwoImg img1={beachClub1} img2={beachClub2} alt1='' alt2='' />
        <TitleSection text='BeachClub' />
        <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta' />
        <InternalLink link='/beachClub' text='saber más' />
      </section>

      <ArticleSquareWhite
        image={bebidasImg}
        title='bebidas'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText='saber más'
        linkHref='/bebidas'
        alt='image description'
        objectFit='cover'
        objectPosition='center'
      />
      <ArticlePortrait
        image={bodasImg}
        alt='image description'
        title='bodas'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText='saber más'
        linkHref='/bodas'
      />
      <ArticleSquare
        image={musicImg}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='djParty'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText='saber más'
        linkHref='/djParty'
      />
      <ArticleThreeImg
        img1={celeimg1}
        img2={celeimg2}
        img3={celeimg3}
        alt1={'image description'}
        alt2={'image description'}
        alt3={'image description'}
        objectPosition1='0 -100px'
        objectPosition2='center'
        objectPosition3='center'
        title='celebraciones'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText='saber más'
        linkHref='/celebraciones'
      />
      <ArticlePortrait
        image={bodasImg}
        alt='image description'
        title='blog'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText='saber más'
        linkHref='/blog'
      />
      {/* <button onClick={() => setButtonPopup(true)}>openPopup</button> */}
      {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>my popup</h3>
        <p>This is my button triggered popup</p>
      </Popup> */}

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

      <Popup trigger={timePopup} setTrigger={setTimePopup} img={popupImg}>
        {/* <h3>my popup</h3>
        <p>This is my time triggered popup</p> */}
      </Popup>
    </Layout>
  )
}
