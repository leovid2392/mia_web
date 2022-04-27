import BtnMenuBars from './BtnMenuBars'
import LogoBlack from './LogoBlack'
import LanguageSelector from './LanguageSelector'
import Link from 'next/link'

import { TaskContext } from '../context/taskContext'
import { useContext } from 'react'

import styles from '../styles/Header.module.css'

export default function Header() {
  const { handleAsideMenu } = useContext(TaskContext)

  return (
    <header className={styles.container}>
      <LogoBlack />
      {/* <LanguageSelector /> */}
      <BtnMenuBars action={handleAsideMenu} />
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
          <a className={styles.a}>Beach Club</a>
        </Link>
        <Link href='/bodas'>
          <a className={styles.a}>Bodas</a>
        </Link>
        <Link href='/djParty'>
          <a className={styles.a}>Dj Party</a>
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
    </header>
  )
}
