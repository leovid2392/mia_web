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

import miaTulum_02 from '../../../public/images/blog/miaTulum_02.jpg'

import menuStyles from '../../../styles/MenuPage.module.css'
// import styles from '../styles/Home.module.css'
import styles from '../../../styles/Home.module.css'

export default function PabloFierro() {
  return (
    <Layout>
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
        <div className={styles.celebraciones}>
          <div className={styles.celebraciones_imgContainer}>
            <Layout1x1
              img={miaTulum_02}
              alt='image description'
              objectPosition='center'
            />
          </div>
        </div>
        <TitlePage text='¡Mía Tulum, tu paladar con un nuevo menú!' />
      </div>
      <Paragraph text='Tulum te da mil razones para que lo conozcas desde un majestuoso sitio arqueológico, hermosas playas, espectaculares cenotes, selvas que te reconectan con la naturaleza y una gastronomía que despierta todos tus sentidos. ' />
      <Paragraph text='El secreto de la felicidad consiste en tener buenos momentos y el restaurante Mía Tulum te ayuda a crearlos por medio de su gran experiencia culinaria, la cual es una fusión sofisticada de la gastronomía mexicana y europea.' />
      <Paragraph text='El chef ejecutivo de Mía Tulum Daniel Díaz Linares, invita a los comensales a romper los tabúes y así explorar los sabores diferentes en un maravilloso recorrido por México y el mundo a través de sus platillos; utilizando diversos ingredientes, técnicas, culturas y tradición, logrando obtener distintos sabores de una manera muy original e innovadora. ' />
      <Paragraph text='Asimismo, el nuevo menú de cenas de Mía Tulum presenta diversos platillos iniciando con entradas tales como callo de hacha sobre risotto al champagne, camarones al coco bañados en salsa de mango con un toque de jengibre y menta; mejillones meuniere con cebolla, perejil y vino blanco; ensalada de betabel rostizado a las finas hierbas acompañado de cremoso queso de cabra, miel de agave, reducción de balsámico y nuez caramelizada, entre otras delicias para el paladar.' />
      <Paragraph text='Entre los platillos principales los comensales pueden disfrutar de pato confitado en una deliciosa salsa a la jamaica y fresa, salmón en pipián de melón con risotto de quinoa; chamorro de cordero acompañado de cuscús marroquí, el imperdible short rib cocinado lentamente al horno durante ocho horas con cerveza oscura, ajo, vino tinto y sellado a la mostaza. Además de otras doce propuestas las cuales mantienen el toque de la cocina internacional junto con su historia, creatividad, diversidad y trascendencia.' />
      <Paragraph text='Y para maximizar la experiencia gastronómica, el sommelier puede ayudar a conseguir la combinación perfecta entre el vino y la comida, ya que Mía Tulum cuenta con la cava más completa del destino con más de 300 etiquetas de 12 países, entre ellos australianos, franceses, americanos y mexicanos por mencionar algunos, todos ordenados por países y año de su cosecha, así como una amplia variedad de cervezas artesanales, destilados y por supuesto coctelería.' />
      <Paragraph text='Y para maximizar la experiencia gastronómica, el sommelier puede ayudar a conseguir la combinación perfecta entre el vino y la comida, ya que Mía Tulum cuenta con la cava más completa del destino con más de 300 etiquetas de 12 países, entre ellos australianos, franceses, americanos y mexicanos por mencionar algunos, todos ordenados por países y año de su cosecha, así como una amplia variedad de cervezas artesanales, destilados y por supuesto coctelería.' />
      <Paragraph text='Para tener un cierre completo de la cena, vale la pena disfrutar de un exquisito postre que puede ir desde mousse de coco con pulpa de mango; pastelito tibio de mole con chocolate, helado de plátano y crocante de cacao; mousse de tres chocolates con helado de vainilla y créme brülée, acompañado con crocante de almendra.' />
      <Paragraph text='Cabe destacar que el restaurante Mía, también te brinda escenarios mágicos, bohemios y naturales, al contar con un ambiente selvático, a la orilla de las paradisíacas playas del mar caribe, que conjugan la armonía de un club de playa, un restaurante de pizzas y The Club el cual lleva a una conexión especial con la diversión y la música. Además de terrazas abiertas, iluminadas con la luz de la luna y velas, logrando una armonía con la naturaleza que invitan a relajarse y dejarse consentir por el excelente servicio que brinda todo el equipo de servicio.' />
      <Paragraph text='Mía Tulum, ofrece servicios únicos en su tipo desde tener una excelente ubicación en la zona hotelera de Tulum, un ambiente familiar, permite llevar a tu mascota, cuenta con un amplio estacionamiento sujeto a disponibilidad.' />
    </Layout>
  )
}
