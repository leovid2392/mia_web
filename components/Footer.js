import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <p className={styles.p}>© Mia BeachClub & Restaurant</p>
      <div className={styles.section}>
        <p className={styles.p}>Todos los derechos reservados | </p>
        <Link href={'#'}>
          <a className={styles.p}>Política de Privacidad</a>
        </Link>
        <Link href={'/contacto'}>
          <a className={styles.btnContact}>Contacto</a>
        </Link>
      </div>
    </footer>
  )
}
