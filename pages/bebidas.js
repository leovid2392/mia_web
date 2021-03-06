import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

// components<<<<<<<<<<
import Hero from '../components/Hero'
import TitlePage from '../components/TitlePage'
import Paragraph from '../components/Paragraph'
import ArticlePortrait from '../components/ArticlePortrait'
import LinkBorder from '../components/LinkBorder'
import ArticleFourImg from '../components/ArticleFourImg'
import ArticleSquare from '../components/ArticleSquare'
import ArticleSquareWhite from '../components/ArticleSquareWhite'
import SliderReviews from '../components/SliderReviews'
import TitleSection from '../components/TitleSection'
import SliderBottle from '../components/SliderBottle'
// components<<<<<<<<<<
// images<<<<<<<<<<
import slide1 from '../public/images/bebidas/cele1_small750x500.jpg'
import slide2 from '../public/images/bebidas/mia-5750_small500x750.jpg'
import slide3 from '../public/images/bebidas/cele3_small750x500.jpg'
import sliderReviesImg1 from '../public/images/bebidas/botella_100x300.png'

import beer1 from '../public/images/bebidas/cerveza2_small500x750.jpg'
import beer2 from '../public/images/bebidas/cerceza1_small500x750.jpg'
import beer3 from '../public/images/bebidas/cerveza3_small500x750.jpg'
import beer4 from '../public/images/bebidas/restaurant_drink_2.jpg'

import desti from '../public/images/bebidas/mia-5829_small500x750.jpg'
import desti2 from '../public/images/bebidas/destilado1_small750x422.jpg'
import bebidas_hero_01 from '../public/images/bebidas/bebidas_hero_01.jpg'
import bebidas_hero_02 from '../public/images/bebidas/bebidas_hero_02.jpg'
import bebidas_hero_03 from '../public/images/bebidas/bebidas_hero_03.jpg'
import mixologia01 from '../public/images/bebidas/mixologia_02.jpg'

import cerveza_01 from '../public/images/bebidas/cerveza_01.jpg'
import cerveza_02 from '../public/images/bebidas/cerveza_02.jpg'
import cerveza_03 from '../public/images/bebidas/cerveza_03.jpg'
import cerveza_04 from '../public/images/bebidas/cerveza_04.jpg'
import destilados_01 from '../public/images/bebidas/destilados_01.jpg'
// import hero1 from '../public/images/bebidas/mia-5848_small500x750.jpg'
// import hero2 from '../public/images/bebidas/mezcal_small750x500.jpg'
// import hero3 from '../public/images/bebidas/MiaTulum-3314_small500x750.jpg'

// images<<<<<<<<<<

import styles from '../styles/bebidas.module.css'

export default function Bebidas() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('bebidas:metaTitle')}
      description={t('bebidas:metaDescription')}
    >
      <Hero
        sliderData={[
          {
            id: 1,
            image: bebidas_hero_01,
          },
          {
            id: 2,
            image: bebidas_hero_02,
          },
          {
            id: 3,
            image: bebidas_hero_03,
          },
        ]}
      />
      {/* <TitlePage text='bebidas' /> */}
      {/* <Paragraph text='Nuestro equipo de bartenders lograr?? que cada visita que tengas en M??a Tulum sea con la mejor experiencia en bebidas, consulta nuestro c??ctel especial de temporada creado por las mejores manos y utilizando los productos de la m??s alta calidad.' /> */}
      <ArticlePortrait
        image={mixologia01}
        alt='image description'
        title='mixolog??a'
        paragraph='El equipo de mix??logos est?? listo para satisfacerte con la creaci??n de cocteles seg??n tus gustos, con aromas c??tricos, ahumados y frutales acompa??ados de los mejores destilados y licores premium.'
        linkText=''
        linkHref='/'
        objectPosition='center'
      >
        <LinkBorder text='ver menu' link='./menu/restaurante/mixologia' />
      </ArticlePortrait>
      <section className={styles.beer}>
        <ArticleFourImg
          img1={cerveza_01}
          img2={cerveza_02}
          img3={cerveza_03}
          img4={cerveza_04}
          alt1={'image description'}
          alt2={'image description'}
          alt3={'image description'}
          alt4={'image description'}
          objectPosition1='center'
          objectPosition2='center'
          objectPosition3='center'
          objectPosition4='center'
          title='cervezas'
          paragraph='Mia se distingue  por ser el lugar con mayor n??mero de cervezas artesanales en Tulum. Ad??ntrate en esta aventura y prueba nuestra selecci??n de cervezas Pilsner, Ipa, Pale Ale, Stout y m??s.'
          linkText=''
          linkHref=''
        >
          <LinkBorder text='ver menu' link='./menu/restaurante/cervezas' />
        </ArticleFourImg>
      </section>
      <ArticleSquare
        image={destilados_01}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='Destilados'
        paragraph='En Mia encontrar??s una amplia selecci??n de destilados incluyendo las m??s reconocidas marcas premium como Mezcal Sabios de lua gran reserva, Tequila Clase azul ultra a??ejo Ron Matusalem 23 a??os y Whisky Bushmills 21 a??os entre otros.'
        linkText=''
        linkHref=''
      >
        <LinkBorder text='ver menu' link='./menu/restaurante/destilados' />
      </ArticleSquare>
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

      {/* <ArticleSquareWhite
        image={slide2}
        title='c??ctel del mes'
        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta'
        linkText='saber m??s'
        linkHref='/vino'
        alt='image description'
        objectFit='cover'
        objectPosition='center'
      /> */}
    </Layout>
  )
}
