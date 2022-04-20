import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

export default function Bebidas() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('bebidas:metaTitle')}
      description={t('bebidas:metaDescription')}
    >
      <h1>MIA BEBIDAS</h1>
    </Layout>
  )
}
