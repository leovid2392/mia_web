import styles from '../styles/Popup.module.css'
import Image from 'next/image'
import { GrFormClose } from 'react-icons/gr'

import logo from '../public/images/pop1_small500x889.jpg'

export default function Popup(props) {
  return props.trigger ? (
    <div className={styles.container}>
      <div className={styles['popup-inner']}>
        {/* <BtnCloseIcon
          className={styles['close-btn']}
          action={props.setTrigger}
        /> */}
        <button
          className={styles['close-btn']}
          onClick={() => props.setTrigger(false)}
        >
          <GrFormClose />
        </button>
        <figure className={styles.imgContainer}>
          <Image
            src={props.img}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
        </figure>
        <a className={styles.link} href={props.link} target='_blank'>
          Compra tus boletos
        </a>

        {props.children}
      </div>
    </div>
  ) : (
    ''
  )
}
