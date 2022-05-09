import '../styles/globals.css'
import { TaskProvider } from '../context/taskContext'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-3LB3ZS0S05`}
      />
      <Script strategy='lazyOnload'>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3LB3ZS0S05');
        `}
      </Script>
      <TaskProvider>
        <Component {...pageProps} />
      </TaskProvider>
    </>
  )
}

export default MyApp
