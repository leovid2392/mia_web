import Link from 'next/link'
import { FaHome } from 'react-icons/fa'
import styles from '../styles/BtnHomeIcon.module.css'

export default function BtnHomeIcon({ action }) {
  return (
    <button className={styles.container} onClick={action}>
      <Link href='/'>
        <a>
          <FaHome />
        </a>
      </Link>
    </button>
  )
}
