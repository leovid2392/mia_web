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

import ma??ana01 from '../public/images/restaurante/ma??ana_01.jpg'

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
      <Paragraph text='Los sabores en la cocina de nuestro restaurante han sido creados para sorprender y satisfacer a tu paladar, con sabores de rincones del mundo queremos integrar a la perfecci??n ingredientes de m??xima calidad con las bebidas adecuadas,  la Cava es uno de los lugares m??s fascinantes dentro de M??a, con vinos llenos de historias para acompa??ar tu d??a.' />
      <section className={styles.breakfast}>
        <ArticleSquare
          image={ma??ana01}
          alt='image description'
          layout='fill'
          objectFit='cover'
          objectPosition='70%'
          title='por la ma??ana'
          paragraph='Despierta y dir??gete al restaurante para ser recibido por la hermosa vista al mar, nuestra cocina por las ma??anas se caracteriza por su sabor casero, pan reci??n horneado, fruta, caf?? fresco y jugos reci??n preparados. Nuestra recomendaci??n son los huevos M??a y el sope de cecina.'
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
          paragraph='No hay nada m??s satisfactorio que disfrutar de un pescado fresco a la talla bien preparado y acompa??arlo con un vino blanco al pie de playa. Preparamos tus alimentos con dedicaci??n, el men?? del almuerzo fue dise??ado para que disfrutes M??xico desde el paladar, encontrar??s tacos, aguachiles, ceviches, molcajetes y deliciosos platillos internacionales.'
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
        paragraph='Por las noches el ambiente del restaurante se transforma para ser iluminado por la luz de las velas, en un ambiente c??lido y acogedor, libre y bohemio para que disfrutes s??lo o en compa????a de los platillos que han distinguido la personalidad de nuestra alta cocina internacional, del??itate con nuestras creaciones como el callo de hacha con risotto al champagne, mejillones meuniere, mero miso morita y el predilecto de nuestros clientes, el  short rib. Cenar en el restaurante es definitivamente una experiencia gastron??mica de gran nivel.'
        linkText=''
        linkHref=''
      >
        <p className={styles.p}>
          Pregunta a tu mesero por el c??ctel del d??a o la recomendaci??n de
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
          paragraph='La comida ideal tiene el cierre perfecto, atr??vete a probar los postres internacionales y con sabor a M??xico que nuestro chef pastelero ha preparado para culminar tu lunch o cena inigualablemente.'
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
          paragraph='Rodeado de un ambiente divertido y casual, transp??rtate a N??poles a trav??s del sabor de nuestra aut??ntica pizza italiana, delgada, con  borde crujiente y con una base suave prensada a mano, salsa de tomate fresca, aceite de oliva extra virgen y queso mozarella. El chef Stefano sabe perfectamente hacerte sentir como en casa. ??Andiamo al giardino della pizza!'
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
        text='Reserva tu mesa aqu??'
        objectFit='cover'
        objectPosition='center'
        link='/contacto'
      />
      <ArticlePortrait
        image={vipRoom01}
        alt='image description'
        title='vip room'
        paragraph='El sal??n privado es un nuevo espacio ubicado en el primer piso de M??a, equipado con aire acondicionado y una decoraci??n acogedora inspirada al estilo Marroqu??. Es el espacio ideal para cenas ??ntimas, celebraciones especiales y catas de vino. Este nuevo espacio tiene capacidad limitada para 20 personas.'
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
          paragraph='Somos alquimistas, creamos c??cteles enigm??ticos que cuenten historias,  que tengan armon??a, enfatizando los productos de la tierra local y salvaguardando la misma.'
          linkText='saber m??s'
          linkHref='/bebidas'
        />
      </section>

      {/* <ArticleSquareWhite
        image={vino02}
        title='vinos'
        paragraph='Si tienes duda sobre el mejor maridaje el sommelier de casa Rafael Pelissier te puede guiar por nuestra cava y recomendarte vinos con sabores ??nicos, complejos y de aromas seductivos, te invitamos a acompa??arnos en nuestra pasi??n por el vino.'
        linkText='saber m??s'
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
        paragraph='Si tienes duda sobre el mejor maridaje el sommelier de casa Rafael Pelissier te puede guiar por nuestra cava y recomendarte vinos con sabores ??nicos, complejos y de aromas seductivos, te invitamos a acompa??arnos en nuestra pasi??n por el vino.'
        linkText='saber m??s'
        linkHref='/bebidas'
      />
    </Layout>
  )
}
