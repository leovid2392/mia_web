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

import vino_hero_01 from '../public/images/vino/vino_hero_01_02.jpg'
import vino_hero_02 from '../public/images/vino/vino_hero_02.jpg'
import vino_hero_03 from '../public/images/vino/vino_hero_03.jpg'
import cavaMasCompleta_01 from '../public/images/vino/cavaMasCompleta_01.jpg'
import maridaje_01 from '../public/images/vino/maridaje_01.jpg'
import maridaje_02 from '../public/images/vino/maridaje_02.jpg'
import maridaje_03 from '../public/images/vino/maridaje_03.jpg'

import festivalVinos_01 from '../public/images/vino/festivalVinos_01.jpg'
import festivalVinos_02 from '../public/images/vino/festivalVinos_02.jpg'
import festivalVinos_03 from '../public/images/vino/festivalVinos_03.jpg'
import festivalVinos_04 from '../public/images/vino/festivalVinos_04.jpg'

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
            image: vino_hero_01,
          },
          {
            id: 2,
            image: vino_hero_02,
          },
          {
            id: 3,
            image: vino_hero_03,
          },
        ]}
      />
      <TitlePage text='vinos' />
      <Paragraph text='??En verdad eres amante de la buena comida y apasionado de los vinos? ??Nosotros tambi??n! ' />
      <Paragraph text='La vida, el sacrificio y la inmortalidad son algunos de los simbolismos del vino, en M??a la cultura vin??cola est?? establecida como un estilo de vida, desde vinos j??venes y frescos para tomar durante el dia en la playa hasta vinos complejos para satisfacer a los paladares m??s exigentes. ' />
      <section className={styles.cava}>
        <ArticleSquare
          image={cavaMasCompleta_01}
          alt='image description'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          title='la mejor cava de vinos en tulum'
          paragraph='La cava de vinos se ha convertido en uno de los atractivos principales, siendo  la m??s completa de todo el destino y albergando m??s de 300 etiquetas de 12 diferentes pa??ses como Argentina, Chile, Estados Unidos, Australia, Italia, Espa??a, Francia, Aleman??a, Nueva Zelanda, Portugal y por supuesto M??xico.'
          linkText=''
          linkHref=''
        >
          <LinkBorder text='ver menu' link='./menu/restaurante/vinos' />
        </ArticleSquare>
        {/* <ArticleSquareWhite
          image={cavaMasCompleta_01}
          title='la mejor cava de vinos en tulum'
          paragraph='La cava de vinos se ha convertido en uno de los atractivos principales, siendo  la m??s completa de todo el destino y albergando m??s de 300 etiquetas de 12 diferentes pa??ses como Argentina, Chile, Estados Unidos, Australia, Italia, Espa??a, Francia, Aleman??a, Nueva Zelanda, Portugal y por supuesto M??xico.'
          linkText=''
          linkHref=''
          alt='image description'
          objectFit='cover'
          objectPosition='center'
        >
          <LinkBorder text='ver menu' link='./menu/restaurante/vinos' />
        </ArticleSquareWhite> */}
      </section>
      {/* <ArticlePortrait
        image={wine18Img}
        alt='image description'
        title='Todo lo que buscas'
        paragraph='En nuestra Cava encontrar??s desde vinos j??venes y frescos para tomar durante el d??a en la playa hasta vinos complejos para satisfacer a los paladares m??s exigentes.'
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
        <Paragraph text='Alrededor del vino se desarrollan dos experiencias que son un must; la cena maridaje, en la que nuestro sommelier trabaja para acompa??ar los platillos insignia de M??a con el vino indicado y destacar cada bocado. Nuestro head Sommelier Rafael Pelissier te puede guiar por nuestra cava y recomendarte vinos con sabores ??nicos, complejos y de aromas seductores, te invitamos a acompa??arnos en nuestra pasi??n por el vino.' />
        <Layout2x2
          img1={maridaje_01}
          img2={maridaje_02}
          img3={maridaje_03}
          alt1='image description'
          alt2='image description'
          alt3='image description'
          objectPosition1='center'
          objectPosition2='center'
          objectPosition3='center'
        />
      </section>
      {/* <TitleSection text='nuestra selecci??n' /> */}
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
        text='Espera nuestro pr??ximo festival'
        link='#'
        image={slide1}
        objectFit='cover'
        objectPosition='center'
      /> */}
      <ArticleFourImg
        img1={festivalVinos_01}
        img2={festivalVinos_02}
        img3={festivalVinos_03}
        img4={festivalVinos_04}
        alt1={'image description'}
        alt2={'image description'}
        alt3={'image description'}
        alt4={'image description'}
        objectPosition1='center'
        objectPosition2='center'
        objectPosition3='center'
        objectPosition4='center'
        title='festival de vinos'
        paragraph='Otra experiencia es el Festival de vinos, es una fiesta que se realiza en el segundo semestre del a??o en la que M??a invita a en??logos y sommeliers para conocer las nuevas propuestas que se desarrollan a nivel nacional e internacional. Nuestro ya reconocido Festival se encuentra acompa??ado de m??sica, entretenimiento y canap??s.'
        linkText=''
        linkHref=''
      />
    </Layout>
  )
}
