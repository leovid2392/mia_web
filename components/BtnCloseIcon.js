import { GrFormClose } from 'react-icons/gr'
import styles from '../styles/BtnCloseIcon.module.css'

export default function BtnCloseIcon({ action }) {
  return (
    <button className={styles.container}>
      <span>
        <GrFormClose onClick={action} />
      </span>
    </button>
  )
}
