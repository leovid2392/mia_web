import { TaskContext } from '../context/taskContext'
import { useContext } from 'react'
import Link from 'next/link'
import BtnCloseIcon from './BtnCloseIcon'
import styles from '../styles/AsideMenu.module.css'
import BtnHomeIcon from './BtnHomeIcon'

export default function AsideMenu() {
  const { isAsideMenuOpen, handleAsideMenu } = useContext(TaskContext)

  return (
    <div
      className={styles[`${isAsideMenuOpen ? 'container' : 'hiddeSideBar'}`]}
    >
      <div className={styles.iconContainer}>
        <BtnHomeIcon action={handleAsideMenu} />
        <BtnCloseIcon action={handleAsideMenu} />
      </div>
      <nav className={styles.navContainer}>
        <Link href='/restaurante'>
          <a className={styles.a} onClick={handleAsideMenu}>
            Restaurante
          </a>
        </Link>
        <Link href='/bebidas'>
          <a className={styles.a} onClick={handleAsideMenu}>
            Bebidas
          </a>
        </Link>
        <Link href='/vino'>
          <a className={styles.a} onClick={handleAsideMenu}>
            Vino
          </a>
        </Link>
        <Link href='/beachClub'>
          <a className={styles.a} onClick={handleAsideMenu}>
            Beach Club
          </a>
        </Link>
        <Link href='/bodas'>
          <a className={styles.a} onClick={handleAsideMenu}>
            Bodas
          </a>
        </Link>
        <Link href='/djParty'>
          <a className={styles.a} onClick={handleAsideMenu}>
            Dj Party
          </a>
        </Link>
        <Link href='/celebraciones'>
          <a className={styles.a} onClick={handleAsideMenu}>
            Celebraciones
          </a>
        </Link>
        <Link href='/galeria'>
          <a className={styles.a} onClick={handleAsideMenu}>
            Galeria
          </a>
        </Link>
        <Link href='/blog'>
          <a className={styles.a} onClick={handleAsideMenu}>
            Blog
          </a>
        </Link>
        <Link href='/contacto'>
          <a className={styles.a} onClick={handleAsideMenu}>
            Contacto
          </a>
        </Link>
      </nav>
    </div>
  )
}
