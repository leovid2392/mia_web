import Image from 'next/image'
import logo from '../public/images/mia_logo_negro.png'

export default function LogoBlack() {
  return (
    <Image
      src={logo}
      alt='mia tulum logo'
      width={100}
      height={54}
      layout='fixed'
    />
  )
}
