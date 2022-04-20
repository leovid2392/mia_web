import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

export default function Galeria() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('galeria:metaTitle')}
      description={t('galeria:metaDescription')}
    >
      <h1>MIA GALERIA</h1>
    </Layout>
  )
}
