import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/LanguageSelector.module.css'

export default function LanguageSelector() {
  let router = useRouter()
  return (
    <ul className={styles.container}>
      {router.locales.map((locale) => (
        <li className={styles.liItem} key={locale}>
          <Link href={router.asPath} locale={locale}>
            <a>{locale}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
