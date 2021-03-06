import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

// <<<<<<<<<components<<<<<<<<<<<<<<<<<<<
import Hero from '../components/Hero'
import TitlePage from '../components/TitlePage'
import Paragraph from '../components/Paragraph'
import SliderEvents from '../components/SliderEvents'
// import ArticlePortrait from '../components/ArticlePortrait'
// import ArticleFourImg from '../components/ArticleFourImg'
// import ArticleSquare from '../components/ArticleSquare'
import ArticleSquareWhite from '../components/ArticleSquareWhite'
// import Layout2x2 from '../components/Layout2x2'
import TitleSection from '../components/TitleSection'
// import Banner from '../components/Banner'
import Layout1x1 from '../components/Layout1x1'
import BtnLinkExterno from '../components/BtnLinkExterno'
//<<<<<<<<< components<<<<<<<<<<<<<<<<<<<
//<<<<<<<<< images<<<<<<<<<<<<<<<<<<<<<<<<<<<<

import slide1 from '../public/images/djparty/cele1_small750x500.jpg'
import slide2 from '../public/images/djparty/mia-5750_small500x750.jpg'
import slide3 from '../public/images/djparty/cele3_small750x500.jpg'
import event1 from '../public/images/djparty/pop1_small500x889.jpg'

import hero1 from '../public/images/djparty/dj2_small750x500.jpg'
import hero2 from '../public/images/djparty/dj3_small750x500.jpg'
import hero3 from '../public/images/djparty/dj1_small750x500.jpg'

import collage_01 from '../public/images/djparty/collage_01.jpg'
import collage_02 from '../public/images/djparty/collage_02.jpg'
import collage_03 from '../public/images/djparty/collage_03.jpg'

import djMes_01 from '../public/images/djparty/djMes_01.jpg'

import event_april29 from '../public/images/djparty/event_april29.jpg'
import event_april30 from '../public/images/djparty/event_april30.jpg'
import event_may01 from '../public/images/djparty/event_may01.jpg'
import pablo from '../public/images/djparty/pablofierro-51_small750x500.jpg'

import styles from '../styles/djParty.module.css'

// <<<<<<<<<images<<<<<<<<<<<<<<<<<<<<<<<<<<<<
export default function DjParty() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('djParty:metaTitle')}
      description={t('djParty:metaDescription')}
    >
      {/* <Hero
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
      /> */}
      <section className={styles.djVideo}>
        <video width='100%' height={300} autoPlay muted loop>
          <source src='/video/djVideo.mp4' type='video/mp4' />
        </video>
      </section>

      <div className={styles.description}>
        <TitlePage text='dj party' />
        <Paragraph text='Con los pies en la arena, te invitamos a vivir una experiencia sonora multi sensorial, ritmos tribales, electr??nicos y ac??sticos se unen para crear un ambiente inigualable. Elementos especiales de mapping, performance y body painting te har??n vivir las mejores fiestas al estilo Tulum. The club, es el espacio que re??ne a los fan??ticos de la m??sica electr??nica, cada fiesta tiene un ambiente ??nico, desde talentos emergentes y experimentales hasta reconocidos dj`s internacionales vienen a The Club para vibrar y vivir la mejor experiencia de fiesta en la playa de M??a Tulum.' />
        <Paragraph text='Horario: 2:00 pm a 12:00 am' />
      </div>
      <div className={styles.layout1x1}>
        <Layout1x1
          img={collage_01}
          alt='image description'
          objectPosition='center'
        />
      </div>
      <div className={styles.layout3x1}>
        <Layout1x1
          img={collage_01}
          alt='image description'
          objectPosition='center'
        />
        <Layout1x1
          img={collage_02}
          alt='image description'
          objectPosition='center'
        />
        <Layout1x1
          img={collage_03}
          alt='image description'
          objectPosition='center'
        />
      </div>

      <TitleSection text='eventos' />
      <div className={styles.events}>
        <SliderEvents
          sliderData={[
            {
              id: 1,
              image: event_april29,
              ticketFairy:
                'https://www.ticketfairy.com/event/chris-lake-29apr2022/?r=1060460&utm_source=&utm_campaign=',
              eventName: 'CHRIS LAKE',
              date: 'april 29th | 2 - 12 am',
            },
            {
              id: 2,
              image: event_april30,
              ticketFairy:
                'https://www.ticketfairy.com/event/dnox-beckers-30apr2022/?r=1060460&utm_source=&utm_campaign=',
              eventName: 'D-NOX & BECKERS',
              date: 'april 30th | 2 - 12 am',
            },
            {
              id: 3,
              image: event_may01,
              ticketFairy:
                'https://www.ticketfairy.com/event/monolink-1may2022/?r=1060460&utm_source=&utm_campaign=',
              eventName: 'monolik',
              date: 'may 01st| 2 - 12 am',
            },
          ]}
        />
      </div>
      <ArticleSquareWhite
        image={djMes_01}
        title='colyn'
        paragraph='El sonido caracter??stico de Colyn evoca transmisiones de emoci??n a trav??s de recuerdos nost??lgicos que se elevan; texturas interminables y tartamudeos de sintetizadores retrasados ??????caen en ritmos euf??ricos, cada uno m??s contagioso que...'
        linkText=''
        linkHref='#'
        alt='image description'
        objectFit='cover'
        objectPosition='center'
      >
        <BtnLinkExterno
          text='ir al post'
          link='https://miatulumevents.com/colyn'
        />
      </ArticleSquareWhite>
    </Layout>
  )
}
