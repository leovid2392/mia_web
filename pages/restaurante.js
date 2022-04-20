import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

export default function Restaurante() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('restaurante:metaTitle')}
      description={t('restaurante:metaDescription')}
    >
      <h1>MIA RESTAURANTE</h1>
    </Layout>
  )
}
