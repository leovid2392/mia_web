import Link from 'next/link'
import styles from '../styles/LinkBorder.module.css'

export default function LinkBorder({ text, link }) {
  return (
    <Link href={link}>
      <a className={styles.a}>{text}</a>
    </Link>
  )
}
