import Link from 'next/link'
import styles from '../styles/InternalLink.module.css'

export default function InternalLink({ link, text }) {
  return (
    <Link href={link}>
      <a className={styles.item}>{text}</a>
    </Link>
  )
}
