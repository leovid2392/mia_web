import BtnMenuBars from './BtnMenuBars'
import LogoBlack from './LogoBlack'
import LanguageSelector from './LanguageSelector'

import { TaskContext } from '../context/taskContext'
import { useContext } from 'react'

import styles from '../styles/Header.module.css'

export default function Header() {
  const { handleAsideMenu } = useContext(TaskContext)

  return (
    <header className={styles.container}>
      <LogoBlack />
      <LanguageSelector />
      <BtnMenuBars action={handleAsideMenu} />
    </header>
  )
}
