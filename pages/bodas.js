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

import boda1 from '../public/images/bodas/boda-12_small500x88.jpg'
import boda2 from '../public/images/bodas/boda-1_small750x500.jpg'
import boda3 from '../public/images/bodas/boda13_small750x500.jpg'
import cenaro from '../public/images/bodas/cenaro1_small750x500.jpg'
import pedida1 from '../public/images/bodas/pedida1_small500x750.jpg'

// <<<<<<<<<images<<<<<<<<<<<<<<<<<<<<<<<<<<<<
import styles from '../styles/Home.module.css'
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
      />
      <TitlePage text='bodas' />
      <Paragraph text='Con escenarios mágicos por naturaleza, la selva con su abundante vegetación y el mar caribe con atardeceres siderales, convierten a Tulum en el mejor destino para celebrar tu Boda.' />
      <ArticlePortrait
        image={pedida1}
        alt='image description'
        title='propuestas de matrimonio'
        paragraph='Imagina tu ceremonia a la orilla del mar; nuestro equipo de bodas podrá apoyarte con los preparativos de ceremonias civil, étnica, simbólica y/o boda maya; mientras tus invitados disfrutarán de un coctel en la playa tu podrás tener tu sesión de fotos soñada al atardecer.'
        linkText=''
        linkHref='/'
      />
      <Banner
        text='Contáctanos'
        link='/contacto'
        image={slide1}
        objectFit='cover'
        objectPosition='center'
      />
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
      />
      <TitleSection text='renovación de votos' />
      <Paragraph text='Con una extensión de 400 metros cuadrados, Mía Tulum es sin duda el lugar ideal para la celebración más especial. Con una capacidad de hasta 150 personas.' />
      <ArticleSquareWhite
        image={cenaro}
        title='cenas romanticas'
        paragraph='Celebraciones acogedoras como bodas, cenas románticas, cenas de ensayo, propuestas de matrimonio o aniversarios son algunos de los momentos en los que todo el equipo de Mía une esfuerzos para que tu celebración sea memorable.'
        linkText=''
        linkHref=''
        alt='image description'
        objectFit='cover'
        objectPosition='center'
      />
      <ArticleSquare
        image={couples}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title=''
        paragraph=''
        linkText=''
        linkHref=''
      />
      <SliderReviews
        sliderData={[
          {
            id: 1,
            image: sliderComentsImg1,
            name: 'Taina & Roger - October 24th 2021',
            review:
              'Dante our wedding coordinator was the absolute best. He was very professional, responsive and catered to our needs. If there was something we had doubts about Dante always had a plan B for it. The wedding turned out to be better than what I had dreamed of.',
          },
          {
            id: 2,
            image: sliderComentsImg2,
            name: 'Stephanie Weng & Eric LI - December 4th 2021',
            review:
              'DANTE IS MY #1, all that a bride could ever ask for!! Planning a destination wedding during Covid seemed like a daunting task but Dante made it all come together smoothly.',
          },
          {
            id: 3,
            image: sliderComentsImg1,
            name: 'Irina and Boris - September 18th  2021',
            review:
              'Dante is nunber one !!!! THE BEST !!!! Exceed all expectations!!!! We are very grateful and blessed!!! Dante - the best what you can imagine!!!! Very very, highly recommended !!! ',
          },
        ]}
      />
      <TitleSection text='Nuestros socios' />
      <figure className={styles.imgContainer}>
        <Image
          src={partnersLogo}
          alt='image description'
          width={300}
          height={120}
          layout='fixed'
        ></Image>
      </figure>
    </Layout>
  )
}
