import Layout from '../components/layout'
import useTranslation from 'next-translate/useTranslation'

import Hero from '../components/Hero'

export default function Restaurante() {
  let { t } = useTranslation()
  return (
    <Layout
      title={t('restaurante:metaTitle')}
      description={t('restaurante:metaDescription')}
    >
      {/* <Hero /> */}
      <h1>MIA RESTAURANTE</h1>
    </Layout>
  )
}
