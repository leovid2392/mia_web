import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <nav>
        <Link href='/restaurante'>
          <a>Restaurante</a>
        </Link>
        <Link href='/vino'>
          <a>Vino</a>
        </Link>
      </nav>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  )
}
