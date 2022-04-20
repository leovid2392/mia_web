import Head from 'next/head'
import Header from './Header'
import AsideMenu from './AsideMenu'
import Footer from './Footer'
import FollowUsSection from './FollowUsSection'
import NewsLetter from './NewsLetter'
import BtnBookNow from './BtnBookNow'

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <Header />
      <BtnBookNow />
      <AsideMenu />
      <main>{children}</main>
      <FollowUsSection />
      <NewsLetter />
      <Footer />
    </>
  )
}
