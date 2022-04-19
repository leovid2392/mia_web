import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('common:metaTitle')}
      description={t('common:metaDescription')}
    >
      <h1>{t('common:hello')}</h1>
    </Layout>
  )
}
