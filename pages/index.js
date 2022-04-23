import { useState, useEffect, useContext } from 'react'
import { TaskContext } from '../context/taskContext'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import useTranslation from 'next-translate/useTranslation'
import TitlePage from '../components/TitlePage'
import Paragraph from '../components/Paragraph'
import ArticlePortrait from '../components/ArticlePortrait'

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

import celeimg4 from '../public/images/home/cele1_large2000x1333.jpg'

// hero<<<<<<
import hero1 from '../public/images/home/hmia-5072_small500x750.jpg'
import hero2 from '../public/images/home/mia-5918_small500x750.jpg'
import hero2_2 from '../public/images/home/mia-5918_large2000x1333.jpg'
import hero3 from '../public/images/home/hemia-5750_small500x750.jpg'
import hero4 from '../public/images/home/hmia-5092_small500x750.jpg'
import hero5 from '../public/images/home/hmar_small750x500.jpg'
// hero<<<<<<

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
import blog1 from '../public/images/home/pablofierro-51_small750x500.jpg'

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
      {/* <Hero
        sliderData={[
          {
            id: 1,
            image: celeimg2,
          },
          {
            id: 2,
            image: hero2,
          },
          {
            id: 3,
            image: hero3,
          },
          {
            id: 4,
            image: hero4,
          },
          {
            id: 5,
            image: hero5,
          },
        ]}
      /> */}
      <Hero
        sliderData={[
          {
            id: 1,
            image: hero2,
            image2: hero2_2,
          },
          {
            id: 2,
            image: hero2,
            image2: celeimg1,
          },
          {
            id: 3,
            image: hero3,
            image2: celeimg1,
          },
        ]}
      />
      <TitlePage text='Mia tulum' />
      <Paragraph text='Un lugar que conjuga con armonía un club de playa, un restaurante de cocina internacional de autor, un salón privado y The Club, todo en un ambiente bohemio y relajado.' />
      <ArticlePortrait
        image={restaurantImg}
        alt='image description'
        title='restaurante'
        paragraph='Mía combina la atmósfera perfecta, ofreciendo una experiencia culinaria de cocina internacional con un concepto casual dining, en un ambiente minimalista casual.'
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
        paragraph='¿En verdad eres amante de la buena comida y apasionado de los vinos? ¡Nosotros también!'
        linkText='saber más'
        linkHref='/vino'
      />
      <section className={styles.displayTwoImg}>
        <DisplayTwoImg img1={beachClub1} img2={beachClub2} alt1='' alt2='' />
        <TitleSection text='BeachClub' />
        <Paragraph text='cal- MAR- se es nuestro lema, los pasos que damos en Mía son ligeros, los respiros son rítmicos al unísono del viento acariciando las palmeras; el vaivén de las olas azul turquesa y los elementos naturales se conjugan para conectar con un espacio de tranquilidad, plenitud y de apreciación del arte que irradia la vegetación en abundancia.' />
        <InternalLink link='/beachClub' text='saber más' />
      </section>

      <ArticleSquareWhite
        image={bebidasImg}
        title='bebidas'
        paragraph='Somos alquimistas, creamos cócteles enigmáticos con armonía, enfatizando los productos de la tierra local y salvaguardando la misma.'
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
        paragraph='Con escenarios mágicos por naturaleza, la selva con su abundante vegetación y el mar caribe con atardeceres siderales, convierten a Tulum en el mejor destino para celebrar tu Boda.'
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
        paragraph='Una experiencia sonora multi sensorial, ritmos tribales, electrónicos y acústicos se unen para crear un ambiente inigualable en Tulum y vivir las mejores fiestas.'
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
        paragraph='Mía Tulum se carateriza por ser un espacio de fiesta, alegria y celebración constante al ser y estar en el momento presente, es el espacio relajado, casual e ideal para celebrar cumpleaños, despedidas de soltera, cocteles y grupos de incentivos.'
        linkText='saber más'
        linkHref='/celebraciones'
      />
      <ArticlePortrait
        image={blog1}
        alt='image description'
        title='blog'
        paragraph='Cantautor y productor de música electrónica. Para muchos, eso puede sonar como dos aspectos muy diferentes de la cultura sonora moderna, lo que a su vez hace de Monolink un personaje fascinante, porque.....'
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
