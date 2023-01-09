import Image from 'next/image'
import styles from './styles.module.scss'

import { Timer, Package, Coffee, ShoppingCart } from 'phosphor-react'

export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.pitch}>
        <h1>Find the perfect coffee anytime during the day</h1>
        <p>With Coffe Delivery you get your coffe anywere you are anytime</p>

        <div className={styles.benefitsContainer}>
          <div className={styles.benefitContainer}>
            <div className={styles.benefit}>
              <ShoppingCart className={styles.shopping} size={22} />
              <p>Simple and secure purchase</p>
            </div>
            <div className={styles.benefit}>
              <Timer className={styles.timer} size={22} />
              <p>Fast and tracked delivery</p>
            </div>
          </div>
          <div className={styles.benefitContainer}>
            <div className={styles.benefit}>
              <Package className={styles.package} size={22} />
              <p>Packaging keeps the coffee intact</p>
            </div>
            <div className={styles.benefit}>
              <Coffee className={styles.coffee} size={22} />
              <p>Coffee arrives fresh to you</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.image}>
        <Image
          src="/banner.png"
          alt="coffe"
          width={476}
          height={360}
          loading="lazy"
        />
      </div>
    </div>
  )
}
