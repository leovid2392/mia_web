import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

// <<<<<<<<<components<<<<<<<<<<<<<<<<<<<
import Hero from '../components/Hero'
import TitlePage from '../components/TitlePage'
import Paragraph from '../components/Paragraph'
import ArticlePortrait from '../components/ArticlePortrait'
// import ArticleFourImg from '../components/ArticleFourImg'
import ArticleSquare from '../components/ArticleSquare'
import ArticleSquareWhite from '../components/ArticleSquareWhite'
import Layout2x2 from '../components/Layout2x2'
import TitleSection from '../components/TitleSection'
import Banner from '../components/Banner'
import SliderReviews from '../components/SliderReviews'
import Layout1x1 from '../components/Layout1x1'
import BtnLinkExterno from '../components/BtnLinkExterno'

import Image from 'next/image'
// import Layout1x1 from '../components/Layout1x1'
//<<<<<<<<< components<<<<<<<<<<<<<<<<<<<
//<<<<<<<<< images<<<<<<<<<<<<<<<<<<<<<<<<<<<<
import slide1 from '../public/images/bodas/cele1_small750x500.jpg'
import slide2 from '../public/images/bodas/mia-5750_small500x750.jpg'
import slide3 from '../public/images/bodas/cele3_small750x500.jpg'
import sliderComentsImg1 from '../public/images/oliver.jpg'
import sliderComentsImg2 from '../public/images/pabloFierro.jpg'
import partnersLogo from '../public/images/bodas/logo-junebug_small300x120.png'

import hero1 from '../public/images/bodas/bride_small500x751.jpg'
import hero2 from '../public/images/bodas/boda-10_small500x750.jpg'
import hero3 from '../public/images/bodas/boda11_small500x750.jpg'
import couples from '../public/images/bodas/couple_awards.jpg'
import bodas_com from '../public/images/bodas/bodas_com.jpg'
import logo_bodas_com from '../public/images/bodas/logo_bodas_com.png'

import boda1 from '../public/images/bodas/boda-12_small500x88.jpg'
import boda2 from '../public/images/bodas/boda-1_small750x500.jpg'
import boda3 from '../public/images/bodas/boda13_small750x500.jpg'
import cenaro from '../public/images/bodas/cenaro1_small750x500.jpg'
import pedida1 from '../public/images/bodas/pedida1_small500x750.jpg'
import weddingWireLogo from '../public/images/bodas/logo-weddingwire_400x177.png'
import boda_hero_01 from '../public/images/bodas/boda_hero_01.jpg'
import boda_hero_02 from '../public/images/bodas/boda_hero_02.jpg'
import boda_hero_03 from '../public/images/bodas/boda_hero_03.jpg'

import anillo_01 from '../public/images/bodas/anillo_01.jpg'

// <<<<<<<<<images<<<<<<<<<<<<<<<<<<<<<<<<<<<<
import styles from '../styles/Home.module.css'
import bodaStyle from '../styles/bodas.module.css'

export default function Bodas() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('bodas:metaTitle')}
      description={t('bodas:metaDescription')}
    >
      <Hero
        sliderData={[
          {
            id: 1,
            image: boda_hero_01,
          },
          {
            id: 2,
            image: boda_hero_02,
          },
          {
            id: 3,
            image: boda_hero_03,
          },
        ]}
      />
      <div className={bodaStyle.description}>
        <TitlePage text='bodas' />
        <Paragraph text='Con escenarios mágicos por naturaleza, la selva con su abundante vegetación y el mar caribe con atardeceres siderales, convierten a Tulum en el mejor destino para celebrar tu Boda. Con una extensión de 400 metros cuadrados, Mía Tulum es sin duda el lugar ideal para la celebración más especial con una capacidad de hasta 200 personas. Imagina tu ceremonia a la orilla del mar; nuestros wedding planners van contigo de la mano, apoyandote paso a paso en la creación de un estilo único y apoyarte con los preparativos de ceremonias civil, étnica, simbólica y/o boda maya; mientras tus invitados disfrutarán de un coctel en la playa tu podrás tener tu sesión de fotos soñada al atardecer. Tu fiesta iniciará con un delicioso banquete a la luz de la luna y celebrarás tu union en un escenario que todos recordarán.' />

        <Paragraph text='Somos el único lugar que no cobra renta de locación y nuestro equipo de coordinación está incluido en la contratación de tu boda.' />
      </div>
      <ArticlePortrait
        image={anillo_01}
        alt='image description'
        title=''
        paragraph='Celebraciones acogedoras como bodas, cenas románticas, cenas de ensayo, propuestas de matrimonio, renovación de votos o aniversarios son algunos de los momentos en los que todo el equipo de Mía une esfuerzos para que tu celebración sea memorable.'
        linkText=''
        linkHref='/'
      >
        <BtnLinkExterno
          text='Aparta tu fecha'
          link='https://wa.me/5219841339662'
        />
      </ArticlePortrait>
      {/* <Banner
        text='Contáctanos'
        link='/contacto'
        image={slide1}
        objectFit='cover'
        objectPosition='center'
      /> */}
      {/* <TitleSection text='renovación de votos' />
      <Paragraph text='Con una extensión de 400 metros cuadrados, Mía Tulum es sin duda el lugar ideal para la celebración más especial. Con una capacidad de hasta 150 personas.' />
      <Layout2x2
        img1={boda1}
        img2={boda2}
        img3={boda3}
        alt1='image description'
        alt2='image description'
        alt3='image description'
        objectPosition1='center'
        objectPosition2='center'
        objectPosition3='center'
      /> */}

      {/* <ArticleSquareWhite
        image={cenaro}
        title='cenas romanticas'
        paragraph='Celebraciones acogedoras como bodas, cenas románticas, cenas de ensayo, propuestas de matrimonio o aniversarios son algunos de los momentos en los que todo el equipo de Mía une esfuerzos para que tu celebración sea memorable.'
        linkText=''
        linkHref=''
        alt='image description'
        objectFit='cover'
        objectPosition='center'
      /> */}
      <div className={bodaStyle.couples}>
        {/* <ArticleSquare
          image={couples}
          alt='image description'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          title=''
          paragraph=''
          linkText=''
          linkHref=''
        /> */}
        <div className={bodaStyle.couplesImg1}>
          <Layout1x1
            img={couples}
            alt='image description'
            objectPosition='center'
          />
        </div>
        <div className={bodaStyle.couplesImg2}>
          <Layout1x1
            img={bodas_com}
            alt='image description'
            objectPosition='center'
          />
        </div>
      </div>
      <TitleSection text='Testimonios' />
      <div className={bodaStyle.reviews}>
        <SliderReviews
          sliderData={[
            {
              id: 1,
              name: 'Taina & Roger',
              review1:
                'Dante our wedding coordinator was the absolute best. He was very professional, responsive and catered to our needs. If there was something we had doubts about Dante always had a plan B for it. The wedding turned out to be better than what I had dreamed of.',
              date: 'October 24th 2021',
            },
            {
              id: 2,
              name: 'Stephanie Weng & Eric LI',
              review1:
                'DANTE IS MY #1, all that a bride could ever ask for!! Planning a destination wedding during Covid seemed like a daunting task but Dante made it all come together smoothly.',
              date: 'December 4th 2021',
            },
            {
              id: 3,
              name: 'Irina and Boris - September 18th  2021',
              review1:
                'Dante is nunber one !!!! THE BEST !!!! Exceed all expectations!!!! We are very grateful and blessed!!! Dante - the best what you can imagine!!!! Very very, highly recommended !!! ',
              date: 'September 18th  2021',
            },
          ]}
        />
      </div>
      <TitleSection text='Nuestros aliados' />
      <section className={bodaStyle.socios}>
        <figure className={styles.imgContainer}>
          <Image
            src={partnersLogo}
            alt='image description'
            width={300}
            height={120}
            layout='fixed'
          ></Image>
        </figure>
        <figure className={styles.imgContainer}>
          <Image
            src={weddingWireLogo}
            alt='image description'
            width={280}
            height={100}
            layout='fixed'
          ></Image>
        </figure>
        <figure className={styles.imgContainer}>
          <Image
            src={logo_bodas_com}
            alt='image description'
            width={280}
            height={100}
            layout='fixed'
          ></Image>
        </figure>
      </section>
    </Layout>
  )
}
