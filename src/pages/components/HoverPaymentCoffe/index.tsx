import Image from 'next/image'
import { Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './styles.module.scss'

interface HoverPaymentCoffeeProps {
  id: number
  title: string
  image: string
  price: number
}
export default function PaymentCoffe({
  id,
  title,
  image,
  price,
}: HoverPaymentCoffeeProps) {
  const [coffees, setCoffees] = useState(1)
  function handleAddCoffee() {
    setCoffees(coffees + 1)
  }
  function handleRemoveCoffee() {
    setCoffees(coffees - 1)
    if (coffees === 1) {
      setCoffees(1)
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.containerImage}>
          <Image
            src={image}
            alt={title}
            width={120}
            height={120}
            loading="lazy"
          />
        </div>
        <div className={styles.containerTitle}>
          <div className={styles.title}>
            <h1>{title}</h1>
          </div>
          <div className={styles.button}>
            <div className={styles.addCoffee}>
              <button onClick={handleRemoveCoffee}>-</button>
              <span>{coffees}</span>
              <button onClick={handleAddCoffee}>+</button>
            </div>
            <div className={styles.removeCoffee}>
              <div className={styles.image}>
                <button>
                  <Trash size={20} />
                  <p>remover</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.price}>
          <strong>R$</strong>
          <strong>{price}</strong>
        </div>
      </div>
    </div>
  )
}
