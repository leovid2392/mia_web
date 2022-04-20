import Layout from '../components/layout'
import Hero from '../components/Hero'
import useTranslation from 'next-translate/useTranslation'
import TitlePage from '../components/TitlePage'
import Paragraph from '../components/Paragraph'

export default function Home() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('common:metaTitle')}
      description={t('common:metaDescription')}
    >
      <Hero />
      <TitlePage text='Mia tulum' />
      <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel magna ultricies justo fermentum tincidunt.  Cras in sagittis enim. Quisque porta' />
      <h1>{t('common:hello')}</h1>
    </Layout>
  )
}
