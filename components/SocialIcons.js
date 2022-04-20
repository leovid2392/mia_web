import {
  FaInstagram,
  FaFacebookF,
  FaSpotify,
  FaGoogle,
  FaTripadvisor,
} from 'react-icons/fa'
import Image from 'next/image'

import openTableIcon from '../public/images/openTableIcon.png'
import styles from '../styles/SocialIcons.module.css'

export default function SocialIcons({ text }) {
  return (
    <div className={styles.container}>
      <a className={styles.a} href='#'>
        <FaInstagram />
      </a>
      <a className={styles.a} href='#'>
        <FaFacebookF />
      </a>
      <a className={styles.a} href='#'>
        <FaSpotify />
      </a>
      <a className={styles.a} href='#'>
        <FaGoogle />
      </a>
      <a className={styles.a} href='#'>
        <FaTripadvisor />
      </a>
      <a href='#'>
        <Image
          src={openTableIcon}
          alt='open table icon'
          width={30}
          height={24}
        />
      </a>
    </div>
  )
}
