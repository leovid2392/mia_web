import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

export default function Vino() {
  let { t } = useTranslation()
  return (
    <Layout title={t('vino:metaTitle')} description={t('vino:metaDescription')}>
      <h1>MIA VINO</h1>
    </Layout>
  )
}
