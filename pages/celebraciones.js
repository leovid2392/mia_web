import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

export default function Celebraciones() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('celebraciones:metaTitle')}
      description={t('celebraciones:metaDescription')}
    >
      <h1>MIA CELEBRACIONES</h1>
    </Layout>
  )
}
