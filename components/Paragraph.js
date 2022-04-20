import styles from '../styles/Paragraph.module.css'
export default function Paragraph({ text }) {
  return <p className={styles.item}>{text}</p>
}
