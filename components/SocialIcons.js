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
      <a
        className={styles.a}
        href='https://www.instagram.com/miatulum/'
        target='_blank'
        rel='noreferrer'
      >
        <FaInstagram />
      </a>
      <a
        className={styles.a}
        href='https://www.facebook.com/miatulummx/?ref=page_internal'
        target='_blank'
        rel='noreferrer'
      >
        <FaFacebookF />
      </a>
      {/* <a className={styles.a} href='#'>
        <FaSpotify />
      </a> */}
      <a
        className={styles.a}
        href='https://www.google.com/search?sa=X&sxsrf=APq-WBscADPW4XdTOll0uIxGYXIMqOjdsQ:1650599510609&q=mia+tulum+beach+club&ved=2ahUKEwiL5Pur4qb3AhWITTABHVFzCKwQuzF6BAgBEAI&biw=1323&bih=665&dpr=2#:~:text=M%C3%ADa%20Restaurant%20%26%20Beach-,Club,-4.3'
        target='_blank'
        rel='noreferrer'
      >
        <FaGoogle />
      </a>
      <a
        className={styles.a}
        href='https://www.tripadvisor.com.mx/Restaurant_Review-g150813-d13722373-Reviews-Mia_Restaurant_Beach_Club-Tulum_Yucatan_Peninsula.html'
        target='_blank'
        rel='noreferrer'
      >
        <FaTripadvisor />
      </a>
      <a
        href='https://www.tripadvisor.com.mx/Restaurant_Review-g150813-d13722373-Reviews-Mia_Restaurant_Beach_Club-Tulum_Yucatan_Peninsula.html'
        target='_blank'
        rel='noreferrer'
      >
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
