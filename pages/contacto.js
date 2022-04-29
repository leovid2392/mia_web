import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

// <<<<<<<<<components<<<<<<<<<<<<<<<<<<<
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
import Layout1x1 from '../components/Layout1x1'
//<<<<<<<<< components<<<<<<<<<<<<<<<<<<<
//<<<<<<<<< images<<<<<<<<<<<<<<<<<<<<<<<<<<<<

import slide1 from '../public/images/contacto/cele1_small750x500.jpg'
import slide2 from '../public/images/contacto/mia-5750_small500x750.jpg'
import slide3 from '../public/images/contacto/cele3_small750x500.jpg'
import ReservationsForm from '../components/ReservationsForm'
import ContactInfo from '../components/ContactInfo'

import hero1 from '../public/images/contacto/galeria-2_small750x500.jpg'
import hero2 from '../public/images/contacto/galeria3_small750x500.jpg'
import hero3 from '../public/images/contacto/galeria5_small750x446.jpg'

import contacto_hero_01 from '../public/images/contacto/contacto_hero_01.jpg'
import contacto_hero_02 from '../public/images/contacto/contacto_hero_02.jpg'
import contacto_hero_03 from '../public/images/contacto/contacto_hero_03.jpg'
// <<<<<<<<<images<<<<<<<<<<<<<<<<<<<<<<<<<<<<

export default function Contacto() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('contacto:metaTitle')}
      description={t('contacto:metaDescription')}
    >
      <Hero
        sliderData={[
          {
            id: 1,
            image: contacto_hero_01,
          },
          {
            id: 2,
            image: contacto_hero_02,
          },
          {
            id: 3,
            image: contacto_hero_03,
          },
        ]}
      />
      <TitlePage text='reservaciones' />
      <ReservationsForm />
      <ContactInfo
        direction='Carretera. Tulum-Boca Paila Km 7.5, Tulum Beach, Zona Hotelera, 77780
          Tulum, Q.R. Interior hotel Selina'
        phone1='01 984 249 33 80'
        phone1Text='Reservas'
        phone2='01 984 133 96 62'
        phone2Text='Bodas y Eventos Especiales'
        email='info@miatulum.com'
      />
    </Layout>
  )
}
