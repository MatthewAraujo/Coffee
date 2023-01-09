import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useLoja } from '../../../hooks/useLoja'

import styles from './styles.module.scss'
export default function Header() {
  const { carrinho } = useLoja()

  const quantidade = carrinho.length
  return (
    <header className={styles.container}>
      <div className={styles.image}>
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="logo"
            width={84}
            height={40}
            loading="lazy"
          />
        </Link>
      </div>
      <div className={styles.location}>
        <div className={styles.locationPoint}>
          <MapPin size={22} />
          <p>Rio de Janeiro</p>
        </div>
        <div className={styles.shop}>
          <Link href="/order">
            <ShoppingCart size={22} />
          </Link>
          <span>{quantidade}</span>
        </div>
      </div>
    </header>
  )
}
