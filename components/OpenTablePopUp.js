import Script from 'next/script'
import styles from '../styles/OpenTablePopUp.module.css'

export default function OpenTablePopUp() {
  return (
    <div className={styles.container}>
      <h2>insertar OT wigget</h2>
      <div className={styles.widgetContainer}>
        <h2>widget</h2>
        {/* <Script
          src='//www.opentable.com.mx/widget/reservation/loader?rid=1001083&type=standard&theme=standard&iframe=true&domain=commx&lang=en-US&newtab=false&ot_source=Restaurant%20website'
          strategy='lazyOnload'
          onLoad={() => console.log('opentable wigget ready')}
        /> */}
      </div>
    </div>
  )
}
