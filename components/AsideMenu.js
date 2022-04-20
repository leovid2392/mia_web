import Link from 'next/link'
import BtnCloseIcon from './BtnCloseIcon'
import styles from '../styles/AsideMenu.module.css'

export default function AsideMenu() {
  return (
    <div className={styles.container}>
      <BtnCloseIcon />
      <nav className={styles.navContainer}>
        <Link href='/restaurante'>
          <a className={styles.a}>Restaurante</a>
        </Link>
        <Link href='/bebidas'>
          <a className={styles.a}>Bebidas</a>
        </Link>
        <Link href='/vino'>
          <a className={styles.a}>Vino</a>
        </Link>
        <Link href='/beachClub'>
          <a className={styles.a}>BeachClub</a>
        </Link>
        <Link href='/bodas'>
          <a className={styles.a}>Bodas</a>
        </Link>
        <Link href='/djParty'>
          <a className={styles.a}>DjParty</a>
        </Link>
        <Link href='/celebraciones'>
          <a className={styles.a}>Celebraciones</a>
        </Link>
        <Link href='/galeria'>
          <a className={styles.a}>Galeria</a>
        </Link>
        <Link href='/blog'>
          <a className={styles.a}>Blog</a>
        </Link>
        <Link href='/contacto'>
          <a className={styles.a}>Contacto</a>
        </Link>
      </nav>
    </div>
  )
}
