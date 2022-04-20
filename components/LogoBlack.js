import Image from 'next/image'
import logo from '../public/images/mia_logo_negro.png'
import Link from 'next/link'
export default function LogoBlack() {
  return (
    <Link href='/'>
      <a>
        <Image
          src={logo}
          alt='mia tulum logo'
          width={100}
          height={54}
          layout='fixed'
        />
      </a>
    </Link>
  )
}
