import styles from '../styles/TitleSection.module.css'

export default function TitleSection({ text }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{text}</h2>
      <div className={styles.titleLine}></div>
    </div>
  )
}
