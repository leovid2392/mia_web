import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

// <<<<<<<<<components<<<<<<<<<<<<<<<<<<<
import Hero from '../components/Hero'
import TitlePage from '../components/TitlePage'
import Paragraph from '../components/Paragraph'
// import ArticlePortrait from '../components/ArticlePortrait'
import ArticleFourImg from '../components/ArticleFourImg'
// import ArticleSquare from '../components/ArticleSquare'
// import ArticleSquareWhite from '../components/ArticleSquareWhite'
import Layout2x2 from '../components/Layout2x2'
// import TitleSection from '../components/TitleSection'
import Banner from '../components/Banner'
import Layout1x1 from '../components/Layout1x1'
import ArticlePortrait from '../components/ArticlePortrait'
//<<<<<<<<< components<<<<<<<<<<<<<<<<<<<
//<<<<<<<<< images<<<<<<<<<<<<<<<<<<<<<<<<<<<<
import slide1 from '../public/images/beachClub/cele1_small750x500.jpg'
import slide2 from '../public/images/beachClub/mia-5750_small500x750.jpg'
import slide3 from '../public/images/beachClub/cele3_small750x500.jpg'
import solteras from '../public/images/beachClub/solteras_small750x500.jpg'

import hero1 from '../public/images/beachClub/beachclub1_small750x422.jpg'
import hero2 from '../public/images/beachClub/beachclub2_small750x500.jpg'
import hero3 from '../public/images/beachClub/beachclub3_small750x500.jpg'
import hero4 from '../public/images/beachClub/beachclub4_small750x464.jpg'
import hero5 from '../public/images/beachClub/beachclub5_small750x500.jpg'

import beach1 from '../public/images/beachClub/mia-6126_small500x750.jpg'
import beach2 from '../public/images/beachClub/beachclub2_small750x500.jpg'
import beach3 from '../public/images/beachClub/BEACH-CLUB-31_small750x500.jpg'
import beach4 from '../public/images/beachClub/galeria-2_small750x500.jpg'

// <<<<<<<<<images<<<<<<<<<<<<<<<<<<<<<<<<<<<<

import styles from '../styles/beachClub.module.css'

export default function BeachClub() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('beachClub:metaTitle')}
      description={t('beachClub:metaDescription')}
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
          {
            id: 4,
            image: hero4,
          },
          {
            id: 5,
            image: hero5,
          },
        ]}
      />
      <div className={styles.description}>
        <TitlePage text='Beach Club' />
        <Paragraph text='cal- MAR- se es nuestro lema, los pasos que damos en Mía son ligeros, los respiros son rítmicos al unísono del viento acariciando las palmeras; el vaivén de las olas azul turquesa y los elementos naturales se conjugan para conectar con un espacio de tranquilidad, plenitud y de apreciación del arte que irradia la vegetación en abundancia.' />
        <Paragraph text='Horario: 10:00am a 7:00pm' />
      </div>
      <div className={styles.beachClub}>
        <Layout1x1
          img={beach4}
          alt='image description'
          objectPosition='center'
        />
        <Layout2x2
          img1={beach1}
          img2={beach2}
          img3={beach3}
          alt1='image description'
          alt2='image description'
          alt3='image description'
          objectPosition1='center'
          objectPosition2='center'
          objectPosition3='center'
        />
      </div>
      <Banner
        text='Reserva tu lugar'
        link='/contacto'
        image={slide2}
        objectFit='cover'
        objectPosition='center'
      />

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
        title='despedidas de solero(a)'
        paragraph=''
        linkText=''
        linkHref=''
      /> */}
      <section className={styles.despedidas}>
        <ArticlePortrait
          image={solteras}
          alt='image description'
          title='despedidas de soleros'
          paragraph='Si lo que buscas es celebrar la despedida de soltera más divertida de Tulum, en Mía encontrarás la mejor opción. Ponte en manos de nuestra coordinadora quien logrará que tu celebración sea la más especial para ti y todas tus amigas. Comienza por un día en la playa en el mejor ambiente, música de DJ, body painting, hookas y más. Culmínalo bailando en la arena en la mejor experiencia de fiesta en todo Tulum. Contáctanos para más información.'
          linkText='Agenda tu fecha'
          linkHref='/'
        >
          {/* <a href=''>Contacto</a> */}
        </ArticlePortrait>
      </section>
    </Layout>
  )
}
