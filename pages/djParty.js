import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

export default function DjParty() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('djParty:metaTitle')}
      description={t('djParty:metaDescription')}
    >
      <h1>MIA DjParty</h1>
    </Layout>
  )
}
