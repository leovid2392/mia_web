import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

export default function Bodas() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('bodas:metaTitle')}
      description={t('bodas:metaDescription')}
    >
      <h1>MIA BODAS</h1>
    </Layout>
  )
}
