import { FaWhatsapp } from 'react-icons/fa'
import styles from '../styles/BtnWhatsApp.module.css'

export default function BtnWhatsApp({ action }) {
  return (
    <button className={styles.container}>
      <a href='https://wa.me/5219842493380'>
        <FaWhatsapp onClick={action} />
      </a>
    </button>
  )
}
