import { useState, useEffect, useContext } from 'react'
import { TaskContext } from '../context/taskContext'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import useTranslation from 'next-translate/useTranslation'
import TitlePage from '../components/TitlePage'
import Paragraph from '../components/Paragraph'
import ArticlePortrait from '../components/ArticlePortrait'

import Layout1x1 from '../components/Layout1x1'
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

import home_hero01 from '../public/images/home/home_hero01.jpg'
import home_hero02 from '../public/images/home/home_hero08.jpg'
import home_hero03 from '../public/images/home/home_hero02.jpg'
import home_hero04 from '../public/images/home/home_hero04.jpg'

import restaurante01 from '../public/images/home/restaurante_01.jpg'
import vino01 from '../public/images/home/vino_01.jpg'

import beachClub01 from '../public/images/home/beachClub_01.jpg'
import beachClub02 from '../public/images/home/beachClub_02.jpg'
import beachClub03 from '../public/images/home/beachClub_03.jpg'
import beachClub04 from '../public/images/home/beachClub_04.jpg'

import bebidas01 from '../public/images/home/bebidas_01.jpg'
import bodas_01 from '../public/images/home/bodas_01.jpg'

import djParty01 from '../public/images/home/djParty_01.jpg'

import celebraciones01 from '../public/images/home/celebraciones_01.jpg'

import blog01 from '../public/images/home/blog_01.jpeg'
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
      <Hero
        sliderData={[
          {
            id: 1,
            image: home_hero01,
          },
          {
            id: 2,
            image: home_hero02,
          },
          {
            id: 3,
            image: home_hero03,
          },
          {
            id: 4,
            image: home_hero04,
          },
        ]}
      />
      {/* <Hero
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
      /> */}
      <TitlePage text='Mia tulum' />
      <Paragraph text='En un ambiente bohemio y relajado, entre palmas cocoteras y dunas de arena blanca se encuentra Mía Tulum; un lugar que conjuga con armonía un club de playa, un restaurante de cocina internacional de autor, un salón privado y The Club. Un espacio paradisíaco enmarcado por vistas espectaculares al mar caribe, ubicado estratégicamente en la mejor área de la zona hotelera de Tulum.' />
      <Paragraph text='En Mía Tulum siempre está sucediendo algo, desde eventos de música con DJ`s reconocidos, noches especiales con música bohemia, catas de vino, tequila, mezcal y cerveza artesanal, cenas con chefs invitados y por supuesto eventos privados como bodas y celebraciones especiales.' />
      <Paragraph text='Mía Tulum abrió sus puertas en 2017, desde entonces continúa en constante cambio y evolución para lograr que todos los viajeros se enamoren de sus elementos, el nido y el túnel de madera que marca la entrada al lugar y se han convertido ya en emblemas de Tulum.' />
      <ArticlePortrait
        image={restaurante01}
        alt='image description'
        title='restaurante'
        paragraph='Mía combina la atmósfera perfecta, ofreciendo una gran experiencia culinaria de cocina internacional con un concepto casual dining, en un ambiente minimalista casual.'
        linkText='saber más'
        linkHref='/restaurante'
      />
      <section className={styles.vino}>
        <ArticleSquare
          image={vino01}
          alt='image description'
          layout='fill'
          objectFit='cover'
          objectPosition='70%'
          title='Vinos'
          paragraph='¿En verdad eres amante de la buena comida y apasionado de los vinos? ¡Nosotros también! Te invitamos a descubrir la cava mas completa del destino con más de 350 etiquetas de vino de 12 paises.'
          linkText='saber más'
          linkHref='/vino'
        />
      </section>
      <section className={styles.beachClub}>
        <div className={styles.beachClub_textContainer}>
          <TitleSection text='Beach Club' />
          <Paragraph text='cal- MAR- se es nuestro lema, los pasos que damos en Mía son ligeros, los respiros son rítmicos al unísono del viento acariciando las palmeras; el vaivén de las olas azul turquesa y los elementos naturales se conjugan para conectar con un espacio de tranquilidad, plenitud y de apreciación del arte que irradia la vegetación en abundancia.' />
          <InternalLink link='/beachClub' text='saber más' />
        </div>
        <div className={styles.beachClub_imgContainer}>
          <div className={styles.beachClub_imgContainer1}>
            <DisplayTwoImg
              img1={beachClub03}
              img2={beachClub04}
              alt1='some description'
              alt2='some description'
            />
            {/* <Layout1x1
              img={beachClub03}
              alt='descripcion de imagen'
              objectPosition='center'
            /> */}
          </div>
          <div className={styles.beachClub_imgContainer2}>
            <DisplayTwoImg
              img1={beachClub01}
              img2={beachClub02}
              alt1='some description'
              alt2='some description'
            />
            {/* <Layout1x1
              img={beachClub01}
              alt='descripcion de imagen'
              objectPosition='center'
            /> */}
            {/* <Layout1x1
              img={beachClub02}
              alt='descripcion de imagen'
              objectPosition='center'
            /> */}
            {/* <Layout1x1
              img={beachClub04}
              alt='descripcion de imagen'
              objectPosition='center'
            /> */}
          </div>
        </div>
      </section>
      <section className={styles.bebidas}>
        <ArticleSquareWhite
          image={bebidas01}
          title='bebidas'
          paragraph='Somos alquimistas, creamos cócteles enigmáticos con armonía, enfatizando los productos de la tierra local y salvaguardando la misma.'
          linkText='saber más'
          linkHref='/bebidas'
          alt='image description'
          objectFit='cover'
          objectPosition='center'
        />
      </section>
      <ArticlePortrait
        image={bodas_01}
        alt='image description'
        title='bodas'
        paragraph='Con escenarios mágicos por naturaleza, la selva con su abundante vegetación y el mar caribe con atardeceres siderales, convierten a Mia Tulum en el mejor lugar para celebrar tu Boda.'
        linkText='saber más'
        linkHref='/bodas'
      />
      <section className={styles.djParty}>
        <ArticleSquare
          image={djParty01}
          alt='image description'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          title='dj Party'
          paragraph='Con los pies en la arena, te invitamos a vivir una experiencia sonora multisensorial, ritmos tribales, electrónicos y acústicos se unen para crear un ambiente inigualable.'
          linkText='saber más'
          linkHref='/djParty'
        />
      </section>
      <ArticleThreeImg
        img1={celebraciones01}
        img2={celebraciones01}
        img3={celebraciones01}
        alt1={'image description'}
        alt2={'image description'}
        alt3={'image description'}
        objectPosition1='center'
        objectPosition2='center'
        objectPosition3='center'
        title='celebraciones'
        paragraph='Mía Tulum se carateriza por ser un espacio de fiesta, alegria y celebración constante al ser y estar en el momento presente, es el espacio relajado, casual e ideal para celebrar cumpleaños, despedidas de soltera, cocteles y grupos de incentivos.'
        linkText='saber más'
        linkHref='/celebraciones'
      />
      <ArticlePortrait
        image={blog01}
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

      <section>
        <TitleSection text='opiniones' />
        <SliderReviews
          sliderData={[
            {
              id: 1,
              name: 'LuisiGonzalez',
              review1:
                'Estuvimos a principio de abril por la invitación de Paula, nos dio una atención excelente, nos mostró del lugar y nos explicó todo! UNA GENIA. Súper atentos en todo momento y nos hicieron pasar un día increíble ! La atención de todos fue espectacular.',
              review2:
                'La comida riquísima , las papas enorme la porción, guacamole exquisito ¡Las bebidas bien frescas para pasar el calor! La vista excepcional, lugares geniales para poder sacar unas fotos divinas esperamos volver pronto.',
              review3:
                'Recomendamos este lugar al 1000% ya que te vas a encontrar con todo lo que está bien, buena vista, buena comida y lo más importante buena atención, los chicos son geniales!',
              review4: 'Gracias Paula por tu atención',
              date: 'abril de 2022',
            },
            {
              id: 2,
              name: 'Cladigo89',
              review1: '100% Recomendado',
              review2:
                'Sitio estupendo! Paula la chica que nos recibió encantadora! Pasamos una gran noche, margaritas de 10! Si quieres buena cena y fiesta este es el sitio!',
              date: 'abril de 2022',
            },
            {
              id: 3,
              name: 'Karenr7733',
              review1: 'Excelente lugar!!!',
              review2: `Quedé encantada con la diversidad de vinos, es excelente. Por la tarde pude broncearme a pie de playa y tomar unos drinks, después pedí un platillo y un postre, realmente el sabor muy bueno. Por la noche la fiesta es increíble, los DJ'S son los mejores, puedo decir que pase una de las mejores fiestas en Mía. OBVIO VENDRÍA MIL VECES MÁS!!!`,
              date: 'abril de 2022',
            },
            {
              id: 4,
              name: 'rub_na818',
              review1: 'Experiencia inolvidable en Tulum',
              review2: `Pasamos el mejor rato en este restaurante, los platillos estaban todos deliciosos en especial el risotto de mariscos y el chamorro de cordero, nuestro mesero Juan Carlos nos atendió de maravilla y nos hizo sentir como en casa, cuentan con la mejor selección de vinos y mezcales de Tulum.`,
              review3: `Sin duda volveremos muchas veces!`,
              date: 'abril de 2022',
            },
          ]}
        />
      </section>

      <Popup trigger={timePopup} setTrigger={setTimePopup} img={popupImg}>
        {/* <h3>my popup</h3>
        <p>This is my time triggered popup</p> */}
      </Popup>
    </Layout>
  )
}
