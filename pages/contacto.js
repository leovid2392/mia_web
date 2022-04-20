import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

export default function Contacto() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('contacto:metaTitle')}
      description={t('contacto:metaDescription')}
    >
      <h1>MIA CONTACTO</h1>
    </Layout>
  )
}
