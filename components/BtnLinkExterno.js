import { FaWhatsapp } from 'react-icons/fa'
import styles from '../styles/BtnLinkExterno.module.css'

export default function BtnLinkExterno({ text, link }) {
  return (
    <button className={styles.container}>
      <a href={link} className={styles.link} target='_blank' rel='noreferrer'>
        {text}
      </a>
      {/* <a href='https://wa.me/5219842493380' className={styles.link}>
      </a> */}
    </button>
  )
}
