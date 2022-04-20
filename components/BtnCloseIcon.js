import { GrFormClose } from 'react-icons/gr'
import styles from '../styles/BtnCloseIcon.module.css'

export default function BtnCloseIcon() {
  return (
    <button className={styles.container}>
      <GrFormClose />
    </button>
  )
}
