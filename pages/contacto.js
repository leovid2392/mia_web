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
      <TitlePage text='reservaciones' />
      <ReservationsForm />
      <ContactInfo
        direction='Carretera. Tulum-Boca Paila Km 7.5, Tulum Beach, Zona Hotelera, 77780
          Tulum, Q.R.'
        phone='01 998 123 24 25'
        email='info@miatulum.com'
      />
    </Layout>
  )
}
