import BtnMenuBars from './BtnMenuBars'
import LogoBlack from './LogoBlack'
import LanguageSelector from './LanguageSelector'

import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.container}>
      <LogoBlack />
      <LanguageSelector />
      <BtnMenuBars />
    </header>
  )
}
