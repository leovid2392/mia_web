import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

export default function BeachClub() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('beachClub:metaTitle')}
      description={t('beachClub:metaDescription')}
    >
      <h1>MIA BEACHCLUB</h1>
    </Layout>
  )
}
