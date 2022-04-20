import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

export default function Blog() {
  let { t } = useTranslation()
  return (
    <Layout title={t('blog:metaTitle')} description={t('blog:metaDescription')}>
      <h1>MIA BLOG</h1>
    </Layout>
  )
}
