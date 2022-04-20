import Head from 'next/head'
import Link from 'next/link'
import Header from './Header'
import AsideMenu from './AsideMenu'
import Footer from './Footer'

export default function Layout({ children, title, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <Header />
      <AsideMenu />
      {/* <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/restaurante'>
          <a>Restaurante</a>
        </Link>
      </nav> */}
      <main>{children}</main>
      <Footer />
    </div>
  )
}
