import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

// components<<<<<<<<<<
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
import SliderBottle from '../components/SliderBottle'
import LinkBorder from '../components/LinkBorder'
// components<<<<<<<<<<
// images<<<<<<<<<<
import hero1 from '../public/images/vino/vino6Text_small750x500.jpg'
import wine4Img from '../public/images/vino/vino4_small750x500.jpg'
import wine7Img from '../public/images/vino/vino7_small750x422.jpg'
import wine9Img from '../public/images/vino/vino9_small750x500.jpg'
import wine10Img from '../public/images/vino/vino10_small750x500.jpg'
import wine12Img from '../public/images/vino/vino12_small750x500.jpg'
import wine18Img from '../public/images/vino/vino18_small500x667.jpg'
import slide1 from '../public/images/vino/cele1_small750x500.jpg'
import slide2 from '../public/images/vino/mia-5750_small500x750.jpg'
import slide3 from '../public/images/vino/cele3_small750x500.jpg'
import fest1 from '../public/images/vino/VINOMEXICANO-21_small750x422.jpg'
import fest2 from '../public/images/vino/VINOMEXICANO-28_small750x422.jpg'
import fest3 from '../public/images/vino/WINEFEST-9_small750x422.jpg'
import fest4 from '../public/images/vino/WINEFEST-26_small750x422.jpg'
import sliderReviesImg1 from '../public/images/bebidas/botella_100x300.png'

// images<<<<<<<<<<

import styles from '../styles/vino.module.css'

export default function Vino() {
  let { t } = useTranslation()
  return (
    <Layout title={t('vino:metaTitle')} description={t('vino:metaDescription')}>
      <Hero
        sliderData={[
          {
            id: 1,
            image: hero1,
          },
          {
            id: 2,
            image: wine12Img,
          },
          {
            id: 3,
            image: wine18Img,
          },
        ]}
      />
      <TitlePage text='vinos' />
      <Paragraph text='¿En verdad eres amante de la buena comida y apasionado de los vinos? ¡Nosotros también! ' />
      <Paragraph text='La vida, el sacrificio y la inmortalidad son algunos de los simbolismos del vino, en Mía la cultura vinícola está establecida como un estilo de vida, desde vinos jóvenes y frescos para tomar durante el dia en la playa hasta vinos complejos para satisfacer a los paladares más exigentes. ' />
      <section className={styles.cava}>
        <ArticleSquareWhite
          image={wine7Img}
          title='la mejor cava de vinos en tulum'
          paragraph='La cava de vinos se ha convertido en uno de los atractivos principales, siendo  la más completa de todo el destino y albergando más de 350 etiquetas de 12 diferentes países como Argentina, Chile, Estados Unidos, Australia, Italia, España, Francia, Alemanía, Nueva Zelanda, Portugal y por supuesto México.'
          linkText=''
          linkHref=''
          alt='image description'
          objectFit='cover'
          objectPosition='center'
        >
          <LinkBorder text='ver menu' link='#' />
          {/* <Paragraph text='En nuestra Cava encontrarás desde vinos jóvenes y frescos para tomar durante el día en la playa hasta vinos complejos para satisfacer a los paladares más exigentes.' /> */}
        </ArticleSquareWhite>
      </section>
      {/* <ArticlePortrait
        image={wine18Img}
        alt='image description'
        title='Todo lo que buscas'
        paragraph='En nuestra Cava encontrarás desde vinos jóvenes y frescos para tomar durante el día en la playa hasta vinos complejos para satisfacer a los paladares más exigentes.'
        linkText=''
        linkHref='/'
      /> */}
      {/* <section className={styles.wineSpectator}>
        <ArticleSquare
          image={wine9Img}
          alt='image description'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          title='wine spectator'
          paragraph=''
          linkText=''
          linkHref=''
        />
      </section> */}

      {/* <ArticleSquare
        image={wine12Img}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='carta de vinos'
        paragraph=''
        linkText=''
        linkHref=''
      >
        <LinkBorder text='ver menu' link='#' />
      </ArticleSquare> */}

      <section className={styles.maridaje}>
        <TitleSection text='maridaje' />
        <Paragraph text='Alrededor del vino se desarrollan dos experiencias que son un must; la cena maridaje, en la que nuestro sommelier trabaja para acompañar los platillos insignia de Mía con el vino indicado y destacar cada bocado. Nuestro head Sommelier Rafael Pelissier te puede guiar por nuestra cava y recomendarte vinos con sabores únicos, complejos y de aromas seductores, te invitamos a acompañarnos en nuestra pasión por el vino.' />
        <Layout2x2
          img1={wine4Img}
          img2={wine9Img}
          img3={wine10Img}
          alt1='image description'
          alt2='image description'
          alt3='image description'
          objectPosition1='center'
          objectPosition2='center'
          objectPosition3='center'
        />
      </section>
      {/* <TitleSection text='nuestra selección' /> */}
      {/* <SliderBottle
        sliderData={[
          {
            id: 1,
            image: sliderReviesImg1,
            name: 'SEGUIN MANUEL POULLY-FUISE',
            review:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ',
          },
          {
            id: 2,
            image: sliderReviesImg1,
            name: 'SEGUIN MANUEL POULLY-FUISE',
            review:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ',
          },
          {
            id: 3,
            image: sliderReviesImg1,
            name: 'SEGUIN MANUEL POULLY-FUISE',
            review:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ',
          },
        ]}
      /> */}
      {/* <Banner
        text='Espera nuestro próximo festival'
        link='#'
        image={slide1}
        objectFit='cover'
        objectPosition='center'
      /> */}
      <ArticleFourImg
        img1={fest1}
        img2={fest2}
        img3={fest3}
        img4={fest2}
        alt1={'image description'}
        alt2={'image description'}
        alt3={'image description'}
        alt4={'image description'}
        objectPosition1='center'
        objectPosition2='center'
        objectPosition3='center'
        objectPosition4='center'
        title='festival de vinos'
        paragraph='Otra experiencia es el Festival de vinos, es una fiesta que se realiza en el segundo semestre del año en la que Mía invita a enólogos y sommeliers para conocer las nuevas propuestas que se desarrollan a nivel nacional e internacional. Nuestro ya reconocido Festival se encuentra acompañado de música, entretenimiento y canapés.'
        linkText=''
        linkHref=''
      />
    </Layout>
  )
}
