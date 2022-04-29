import styles from '../styles/BtnBookNow.module.css'

export default function BtnBookNow() {
  return (
    <button className={styles.button}>
      <a
        href='http://www.opentable.com.mx/restaurant/profile/1001083/reserve?rid=1001083&restref=1001083'
        target='_blank'
        rel='noreferrer'
      >
        Reserva Ahora
      </a>
    </button>
  )
}
