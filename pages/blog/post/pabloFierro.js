import Layout from '../../../components/layout'

import useTranslation from 'next-translate/useTranslation'

// <<<<<<<<<components<<<<<<<<<<<<<<<<<<<
import Hero from '../../../components/Hero'
import TitlePage from '../../../components/TitlePage'
import Paragraph from '../../../components/Paragraph'
import ArticlePortrait from '../../../components/ArticlePortrait'
import ArticleFourImg from '../../../components/ArticleFourImg'
import ArticleSquare from '../../../components/ArticleSquare'
import ArticleSquareWhite from '../../../components/ArticleSquareWhite'
import Layout2x2 from '../../../components/Layout2x2'
import TitleSection from '../../../components/TitleSection'
import Banner from '../../../components/Banner'
import Layout1x1 from '../../../components/Layout1x1'
import LinkBorder from '../../../components/LinkBorder'
import ArticleThreeImg from '../../../components/ArticleThreeImg'
//<<<<<<<<< components<<<<<<<<<<<<<<<<<<<
//<<<<<<<<< images<<<<<<<<<<<<<<<<<<<<<<<<<<<<

import slide1 from '../../../public/images/galeria/cele1_small750x500.jpg'
import slide2 from '../../../public/images/galeria/mia-5750_small500x750.jpg'
import slide3 from '../../../public/images/galeria/cele3_small750x500.jpg'

export default function PabloFierro() {
  return (
    <Layout>
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
      <TitlePage text='Pablo Fierro' />
      <Paragraph text='Pablo Fierro se mantiene firme en la cima de una nueva ola de música electrónica cosmopolita, conectando sonidos ancestrales que traspasan fronteras, integrándolos en composiciones electrónicas alucinantes profundamente influenciadas por sus raíces tropicales.' />
      <Paragraph text='Nacido y criado en las Islas Canarias, el músico, DJ y productor realiza desde composición de música para películas hasta la dirección de su propio sello discográfico internacional, Vida Records.' />
      <Paragraph text='Letrista y compositor para guitarra, bajo, percusión y piano, ha desarrollado cientos de producciones de los más diversos estilos junto a diferentes artistas de talla mundial, como Gilles Peterson, Louie Vega, Atjazz y Black Coffee, entre otros. Desde muy joven ha dedicado su vida a canalizar su energía hacia la música, alcanzando un poder extraordinario para conmover e inspirar a otras personas a través de creaciones evocadoras en las que sus imponentes composiciones de percusión se entremezclan y equilibran con profundas influencias culturales. Pablo ha tenido éxitosos lanzamientos en sellos como Innervisions, MoBlack, Compost y Sony Music, entre otros' />
      <Paragraph text='El español ha tocado en algunos de los clubes más influyentes del mundo, siendo habitual verlo en escenarios como Watergate (Berlín), Djoon (París), Cielo (Nueva York) y Heart (Ibiza).' />
      <TitleSection text='más vistos' />
    </Layout>
  )
}
