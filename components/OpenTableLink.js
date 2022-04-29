import TitleSection from './TitleSection'
import Image from 'next/image'
import Script from 'next/script'

export default function OpenTableLink() {
  return (
    <div>
      {/* <Script
        type='text/javascript'
        src='//www.opentable.com.mx/widget/reservation/loader?rid=1001083&type=button&theme=standard&color=1&iframe=true&domain=commx&lang=es-MX&newtab=false&ot_source=Restaurant%20website'
        strategy='lazyOnload'
        id='openTableWigget'
      >
        {`document.getElementById('openTableWigget').classList.add('hidden')`}
      </Script> */}
      <a
        href='http://www.opentable.com.mx/restaurant/profile/1001083/reserve?rid=1001083&restref=1001083'
        target='_blank'
        rel='noopener'
      >
        {' '}
        BOTON OPENTABLE
        {/* <Image
        height='250px'
        width='250px'
        src='https://restaurant.opentable.com.mx/badge/ot/DC-2022.png'
        /> */}
      </a>
    </div>
  )
}
