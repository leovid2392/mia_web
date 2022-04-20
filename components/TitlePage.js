import styles from '../styles/TitlePage.module.css'

export default function TitlePage({ text }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{text}</h1>
      <div className={styles.titleLine}></div>
    </div>
  )
}
