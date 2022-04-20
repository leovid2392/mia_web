import Layout from '../components/layout'
import Hero from '../components/Hero'
import useTranslation from 'next-translate/useTranslation'
import TitlePage from '../components/TitlePage'
import Paragraph from '../components/Paragraph'
import ArticlePortrait from '../components/ArticlePortrait'

import slide1 from '../public/images/bodas-1_small500x750.jpg'
import slide2 from '../public/images/mia-4744_small500x750.jpg'
export default function Home() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('common:metaTitle')}
      description={t('common:metaDescription')}
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
      <TitlePage text='Mia tulum' />
      <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta' />
      <ArticlePortrait />
    </Layout>
  )
}
