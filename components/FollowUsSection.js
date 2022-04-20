import styles from '../styles/FollowUsSection.module.css'

import TitleSection from './TitleSection'
import SocialIcons from './SocialIcons'

export default function FollowUsSection() {
  return (
    <section className={styles.container}>
      <TitleSection text='Siguenos' />
      <SocialIcons />
    </section>
  )
}
