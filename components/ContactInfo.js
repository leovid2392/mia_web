import { FaPhone, FaRegEnvelope } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import styles from '../styles/ContactInfo.module.css'

export default function ContactInfo({ direction, phone, email }) {
  return (
    <section className={styles.container}>
      <div className={styles.item}>
        <GoLocation className={styles.icons} />
        <p className={styles.p}>{direction}</p>
      </div>
      <div className={styles.item}>
        <FaPhone className={styles.icons} />
        <p className={styles.p}>{phone}</p>
      </div>
      <div className={styles.item}>
        <FaRegEnvelope className={styles.icons} />
        <p className={styles.p}>{email}</p>
      </div>
    </section>
  )
}
