import { FaPhone, FaRegEnvelope, FaWhatsapp } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import styles from '../styles/ContactInfo.module.css'

export default function ContactInfo({
  direction,
  email,
  phone1,
  phone2,
  phone1Text,
  phone2Text,
}) {
  return (
    <section className={styles.container}>
      <div className={styles.item}>
        <GoLocation className={styles.icons} />
        <p className={styles.p}>{direction}</p>
      </div>
      <div className={styles.item}>
        <FaWhatsapp className={styles.icons} />
        <div>
          <p className={styles.p}>{phone1}</p>
          <p className={styles.p}>{phone1Text}</p>
        </div>
      </div>
      <div className={styles.item}>
        <FaWhatsapp className={styles.icons} />
        <div>
          <p className={styles.p}>{phone2}</p>
          <p className={styles.p}>{phone2Text}</p>
        </div>
      </div>
      <div className={styles.item}>
        <FaRegEnvelope className={styles.icons} />
        <p className={styles.p}>{email}</p>
      </div>
    </section>
  )
}
