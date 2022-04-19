// import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import styles from '../styles/AsideMenu.module.css'

export default function AsideMenu() {
  // let { t } = useTranslation()
  return (
    <nav className={styles.container}>
      <Link href='/restaurante'>
        <a>Restaurante</a>
      </Link>
      <Link href='/bebidas'>
        <a>Bebidas</a>
      </Link>
      <Link href='/vino'>
        <a>Vino</a>
      </Link>
      <Link href='/beachClub'>
        <a>BeachClub</a>
      </Link>
      <Link href='/bodas'>
        <a>Bodas</a>
      </Link>
      <Link href='/djParty'>
        <a>DjParty</a>
      </Link>
      <Link href='/celebraciones'>
        <a>Celebraciones</a>
      </Link>
      <Link href='/galeria'>
        <a>Galeria</a>
      </Link>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <Link href='/contacto'>
        <a>Contacto</a>
      </Link>
    </nav>
  )
}
