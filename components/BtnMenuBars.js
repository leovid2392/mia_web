import { FaBars } from 'react-icons/fa'
import styles from '../styles/BtnMenuBars.module.css'

export default function BtnMenuBars({ action }) {
  return (
    <button className={styles.container}>
      <FaBars onClick={action} />
    </button>
  )
}
