import Head from 'next/head'
import Link from 'next/link'
import Header from './Header'

export default function Layout({ children, title, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <Header />
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/restaurante'>
          <a>Restaurante</a>
        </Link>
      </nav>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  )
}
