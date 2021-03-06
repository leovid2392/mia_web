import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

// components>>>>>>>>>>
import Hero from '../components/Hero'
import TitlePage from '../components/TitlePage'
import TitleSection from '../components/TitleSection'
import Paragraph from '../components/Paragraph'
import ArticleSquare from '../components/ArticleSquare'
import LinkBorder from '../components/LinkBorder'
import ArticlePortrait from '../components/ArticlePortrait'
import ArticleFourImg from '../components/ArticleFourImg'
import ArticleSquareWhite from '../components/ArticleSquareWhite'
// components>>>>>>>>>>
// images>>>>>>>>>>
// hero>>>>>>>>>>
import hero1 from '../public/images/restaurante/hmia-5910_small500x750.jpg'
import hero2 from '../public/images/restaurante/hmia-5939_small500x750.jpg'
import hero3 from '../public/images/restaurante/hmia-6146_small750x500.jpg'
// hero>>>>>>>>>>
import morningImg from '../public/images/restaurante/MiaTulum-3735_small500x750.jpg'

import lunchImg1 from '../public/images/restaurante/hmia-6146_small750x500.jpg'
import lunchImg2 from '../public/images/restaurante/mia-5879_small500x750.jpg'
import lunchImg3 from '../public/images/restaurante/mia-5771_small750x500.jpg'
import lunchImg4 from '../public/images/restaurante/mia-5739_small500x750.jpg'
import dinnerImg from '../public/images/restaurante/hmia-5910_small500x750.jpg'
import postreImg from '../public/images/restaurante/postre1_small750x500.jpg'
import vipRoomImg from '../public/images/restaurante/IMG_4896_small750x500.jpg'
import drinkImg from '../public/images/restaurante/mia-5829_small500x750.jpg'
import wineImg from '../public/images/restaurante/vino11_small750x500.jpg'

import breakfastImg from '../public/images/restaurante/MiaTulum-3735_small500x750.jpg'

import restaurante_hero01 from '../public/images/restaurante/restaurante_hero01.jpg'
import restaurante_hero02 from '../public/images/restaurante/restaurante_hero02.jpg'
import restaurante_hero03 from '../public/images/restaurante/restaurante_hero03.jpg'

import mañana01 from '../public/images/restaurante/mañana_01.jpg'

import almuerzo01 from '../public/images/restaurante/almuerzo_01.jpg'
import almuerzo02 from '../public/images/restaurante/almuerzo_02.jpg'
import almuerzo03 from '../public/images/restaurante/almuerzo_03.jpg'
import almuerzo04 from '../public/images/restaurante/almuerzo_04.jpg'
import cena01 from '../public/images/restaurante/cena_01.jpg'
import banner01 from '../public/images/restaurante/banner_01.jpg'
import postre01 from '../public/images/restaurante/postre_01.jpg'
import pizzaGarden01 from '../public/images/restaurante/pizzaGarden_01.jpg'
import pizzaGarden02 from '../public/images/restaurante/pizzaGarden_02.jpg'
import pizzaGarden03 from '../public/images/restaurante/pizzaGarden_03.jpg'
import pizzaGarden04 from '../public/images/restaurante/pizzaGarden_04.jpg'
import pizzaGarden05 from '../public/images/restaurante/pizzaGarden_05.jpg'
import vipRoom01 from '../public/images/restaurante/vipRoom_01.jpg'
import brinda01 from '../public/images/restaurante/brinda_01.jpg'
import vino01 from '../public/images/restaurante/vino_01.jpg'
import vino02 from '../public/images/restaurante/vino_02.jpg'
// images>>>>>>>>>>

import styles from '../styles/Restaurante.module.css'
import Banner from '../components/Banner'

export default function Restaurante() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('restaurante:metaTitle')}
      description={t('restaurante:metaDescription')}
    >
      <Hero
        sliderData={[
          {
            id: 1,
            image: restaurante_hero01,
          },
          {
            id: 2,
            image: restaurante_hero02,
          },
          {
            id: 3,
            image: restaurante_hero03,
          },
        ]}
      />
      <TitlePage text='restaurante' />
      <Paragraph text='Los sabores en la cocina de nuestro restaurante han sido creados para sorprender y satisfacer a tu paladar, con sabores de rincones del mundo queremos integrar a la perfección ingredientes de máxima calidad con las bebidas adecuadas,  la Cava es uno de los lugares más fascinantes dentro de Mía, con vinos llenos de historias para acompañar tu día.' />
      <section className={styles.breakfast}>
        <ArticleSquare
          image={mañana01}
          alt='image description'
          layout='fill'
          objectFit='cover'
          objectPosition='70%'
          title='por la mañana'
          paragraph='Despierta y dirígete al restaurante para ser recibido por la hermosa vista al mar, nuestra cocina por las mañanas se caracteriza por su sabor casero, pan recién horneado, fruta, café fresco y jugos recién preparados. Nuestra recomendación son los huevos Mía y el sope de cecina.'
          linkText=''
          linkHref=''
        >
          <p className={styles.p}>Horario: 8:00 am - 11:00 am </p>
          <LinkBorder text='ver menu' link='./menu/restaurante/desayuno' />
        </ArticleSquare>
      </section>
      <section className={styles.lunch}>
        <ArticleFourImg
          img1={almuerzo01}
          img2={almuerzo02}
          img3={almuerzo03}
          img4={almuerzo04}
          alt1={'image description'}
          alt2={'image description'}
          alt3={'image description'}
          alt4={'image description'}
          objectPosition1='center'
          objectPosition2='center'
          objectPosition3='center'
          objectPosition4='center'
          title='para el almuerzo'
          paragraph='No hay nada más satisfactorio que disfrutar de un pescado fresco a la talla bien preparado y acompañarlo con un vino blanco al pie de playa. Preparamos tus alimentos con dedicación, el menú del almuerzo fue diseñado para que disfrutes México desde el paladar, encontrarás tacos, aguachiles, ceviches, molcajetes y deliciosos platillos internacionales.'
          linkText=''
          linkHref=''
        >
          <p className={styles.p}>Horario: 12:00 pm - 06:00 pm </p>
          <LinkBorder text='ver menu' link='./menu/restaurante/lunch' />
        </ArticleFourImg>
      </section>
      <ArticleSquare
        image={cena01}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='por la noche'
        paragraph='Por las noches el ambiente del restaurante se transforma para ser iluminado por la luz de las velas, en un ambiente cálido y acogedor, libre y bohemio para que disfrutes sólo o en compañía de los platillos que han distinguido la personalidad de nuestra alta cocina internacional, deléitate con nuestras creaciones como el callo de hacha con risotto al champagne, mejillones meuniere, mero miso morita y el predilecto de nuestros clientes, el  short rib. Cenar en el restaurante es definitivamente una experiencia gastronómica de gran nivel.'
        linkText=''
        linkHref=''
      >
        <p className={styles.p}>
          Pregunta a tu mesero por el cóctel del día o la recomendación de
          maridaje sugerida por nuestro Sommelier.
        </p>
        <p className={styles.p}>Horario: 6:00 pm - 11:30 pm </p>
        <LinkBorder text='ver menu' link='./menu/restaurante/cenas' />
      </ArticleSquare>
      <section className={styles.dessert}>
        <ArticlePortrait
          image={postre01}
          alt='image description'
          title='postres'
          paragraph='La comida ideal tiene el cierre perfecto, atrévete a probar los postres internacionales y con sabor a México que nuestro chef pastelero ha preparado para culminar tu lunch o cena inigualablemente.'
          linkText=''
          linkHref=''
        >
          <LinkBorder text='ver menu' link='./menu/restaurante/postres' />
        </ArticlePortrait>
      </section>
      <section className={styles.pizza}>
        <ArticleFourImg
          img1={pizzaGarden01}
          img2={pizzaGarden05}
          img3={pizzaGarden03}
          img4={pizzaGarden04}
          alt1={'image description'}
          alt2={'image description'}
          alt3={'image description'}
          alt4={'image description'}
          objectPosition1='0 -20px'
          objectPosition2='center'
          objectPosition3='center'
          objectPosition4='center'
          title='pizza garden'
          paragraph='Rodeado de un ambiente divertido y casual, transpórtate a Nápoles a través del sabor de nuestra auténtica pizza italiana, delgada, con  borde crujiente y con una base suave prensada a mano, salsa de tomate fresca, aceite de oliva extra virgen y queso mozarella. El chef Stefano sabe perfectamente hacerte sentir como en casa. ¡Andiamo al giardino della pizza!'
          linkText=''
          linkHref=''
        >
          <p className={styles.p}>Horario: 1 pm - 11:30 pm </p>
          <LinkBorder text='ver menu' link='./menu/restaurante/pizzaGarden' />
        </ArticleFourImg>
      </section>

      <Banner
        image={banner01}
        alt='image description'
        text='Reserva tu mesa aquí'
        objectFit='cover'
        objectPosition='center'
        link='/contacto'
      />
      <ArticlePortrait
        image={vipRoom01}
        alt='image description'
        title='vip room'
        paragraph='El salón privado es un nuevo espacio ubicado en el primer piso de Mía, equipado con aire acondicionado y una decoración acogedora inspirada al estilo Marroquí. Es el espacio ideal para cenas íntimas, celebraciones especiales y catas de vino. Este nuevo espacio tiene capacidad limitada para 20 personas.'
        linkText=''
        linkHref=''
      />
      <section className={styles.drinkWithUs}>
        <ArticleSquare
          image={brinda01}
          alt='image description'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          title='Brinda con nosotros'
          paragraph='Somos alquimistas, creamos cócteles enigmáticos que cuenten historias,  que tengan armonía, enfatizando los productos de la tierra local y salvaguardando la misma.'
          linkText='saber más'
          linkHref='/bebidas'
        />
      </section>

      {/* <ArticleSquareWhite
        image={vino02}
        title='vinos'
        paragraph='Si tienes duda sobre el mejor maridaje el sommelier de casa Rafael Pelissier te puede guiar por nuestra cava y recomendarte vinos con sabores únicos, complejos y de aromas seductivos, te invitamos a acompañarnos en nuestra pasión por el vino.'
        linkText='saber más'
        linkHref='/vino'
        alt='image description'
        objectFit='cover'
        objectPosition='center'
      /> */}
      <ArticleSquare
        image={vino02}
        alt='image description'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        title='vinos'
        paragraph='Si tienes duda sobre el mejor maridaje el sommelier de casa Rafael Pelissier te puede guiar por nuestra cava y recomendarte vinos con sabores únicos, complejos y de aromas seductivos, te invitamos a acompañarnos en nuestra pasión por el vino.'
        linkText='saber más'
        linkHref='/bebidas'
      />
    </Layout>
  )
}
