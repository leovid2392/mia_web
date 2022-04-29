import Layout from '../../components/layout'
import useTranslation from 'next-translate/useTranslation'

// <<<<<<<<<components<<<<<<<<<<<<<<<<<<<
import Hero from '../../components/Hero'
import TitlePage from '../../components/TitlePage'
import Paragraph from '../../components/Paragraph'
import ArticlePortrait from '../../components/ArticlePortrait'
import ArticleFourImg from '../../components/ArticleFourImg'
import ArticleSquare from '../../components/ArticleSquare'
import ArticleSquareWhite from '../../components/ArticleSquareWhite'
import Layout2x2 from '../../components/Layout2x2'
import TitleSection from '../../components/TitleSection'
import Banner from '../../components/Banner'
import Layout1x1 from '../../components/Layout1x1'
import LinkBorder from '../../components/LinkBorder'
import ArticleThreeImg from '../../components/ArticleThreeImg'

import BtnLinkExterno from '../../components/BtnLinkExterno'
//<<<<<<<<< components<<<<<<<<<<<<<<<<<<<
//<<<<<<<<< images<<<<<<<<<<<<<<<<<<<<<<<<<<<<

import slide1 from '../../public/images/blog/cele1_small750x500.jpg'
import slide2 from '../../public/images/blog/mia-5750_small500x750.jpg'
import slide3 from '../../public/images/blog/cele3_small750x500.jpg'
import djColyn_01 from '../../public/images/blog/djColyn_01.jpg'
import djMonolik_01 from '../../public/images/blog/djMonolik_01.jpeg'

import miaTulum_01 from '../../public/images/blog/miaTulum_01.jpg'

// import menuStyles from '../../../styles/MenuPage.module.css'
import menuStyles from '../../styles/MenuPage.module.css'
import styles from '../../styles/Blog.module.css'

// <<<<<<<<<images<<<<<<<<<<<<<<<<<<<<<<<<<<<<

export default function Blog() {
  let { t } = useTranslation()
  return (
    <Layout title={t('blog:metaTitle')} description={t('blog:metaDescription')}>
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
        <TitlePage text='blog' />
      </div>
      {/* <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta' /> */}
      <section className={styles.post1}>
        <ArticlePortrait
          image={djColyn_01}
          alt='image description'
          title='colyn'
          paragraph='El sonido característico de Colyn evoca transmisiones de emoción a través de recuerdos nostálgicos que se elevan; texturas interminables y tartamudeos de sintetizadores retrasados ​​caen en ritmos eufóricos, cada uno más contagioso que...'
          linkText=''
          linkHref='/blog/post/pabloFierro'
        >
          <BtnLinkExterno
            text='ver post'
            link='https://miatulumevents.com/colyn'
          />
        </ArticlePortrait>
      </section>
      <ArticlePortrait
        image={djMonolik_01}
        alt='image description'
        title='monolik'
        paragraph='Cantautor y productor de música electrónica. Para muchos, eso puede sonar como dos aspectos muy diferentes de la cultura sonora moderna, lo que a su vez hace de Monolink un personaje fascinante, porque.....'
        linkText=''
        linkHref='/blog/post/pabloFierro'
      >
        <BtnLinkExterno
          text='ver post'
          link='https://miatulumevents.com/monolink'
        />
      </ArticlePortrait>
      <section className={styles.post3}>
        <ArticlePortrait
          image={miaTulum_01}
          alt='image description'
          title='¡Mía Tulum, tu paladar con un nuevo menú!'
          paragraph='Tulum te da mil razones para que lo conozcas desde un majestuoso sitio arqueológico, hermosas playas, espectaculares cenotes, selvas que te reconectan con la naturaleza y una gastronomía que despierta todos tus sentidos...'
          linkText='ver post'
          linkHref='/blog/post/miaTulum'
        ></ArticlePortrait>
      </section>
    </Layout>
  )
}
