import Head from 'next/head'
import Header from './Header'
import AsideMenu from './AsideMenu'
import Footer from './Footer'
import FollowUsSection from './FollowUsSection'
import NewsLetter from './NewsLetter'
import BtnBookNow from './BtnBookNow'
import BtnWhatsApp from './BtnWhatsApp'

import styles from '../styles/Layout.module.css'
import OpenTablePopUp from './OpenTablePopUp'

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      {/* <div className={styles.container}> */}
      <Header />
      <BtnBookNow />
      <AsideMenu />
      {/* <BtnWhatsApp /> */}
      <OpenTablePopUp />
      {/* </div> */}
      <main>{children}</main>
      <FollowUsSection />
      <NewsLetter />
      <Footer />
    </>
  )
}
