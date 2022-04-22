import { GrFormClose } from 'react-icons/gr'
import styles from '../styles/BtnCloseIcon.module.css'

export default function BtnCloseIcon({ action }) {
  return (
    <button className={styles.container}>
      <GrFormClose onClick={action} />
    </button>
  )
}
