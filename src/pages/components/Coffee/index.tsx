import Image from 'next/image'
import styles from './styles.module.scss'
import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import TypeCoffee from '../Type'
import { useLoja } from '../../../hooks/useLoja'

interface CoffeeProps {
  id: number
  image: string
  title: string
  description: string
  price: number
  type: string[]
}

export default function Coffee({
  id,
  image,
  title,
  description,
  price,
  type,
}: CoffeeProps) {
  const { adicionarCarrinho } = useLoja()
  const [addCoffee, setAddCoffee] = useState(0)

  function handleAddCoffee() {
    setAddCoffee(addCoffee + 1)
  }
  function handleRemoveCoffee() {
    setAddCoffee(addCoffee - 1)
    if (addCoffee === 0) {
      setAddCoffee(0)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={image} alt={title} width={120} height={120} />
      </div>
      <div className={styles.content}>
        <div className={styles.type}>
          <TypeCoffee type={type} />
        </div>
        <h1>{title}</h1>
        <span>{description}</span>
      </div>
      <div className={styles.footer}>
        <div className={styles.price}>
          <p>R$</p>
          <strong>{price}</strong>
        </div>
        <div className={styles.shopping}>
          <div className={styles.buying}>
            <button onClick={handleRemoveCoffee}>-</button>
            <span>{addCoffee}</span>
            <button onClick={handleAddCoffee}>+</button>
          </div>
          <div className={styles.shop}>
            <button
              onClick={() => {
                if (addCoffee > 0) {
                  adicionarCarrinho(id, addCoffee, price)
                }
              }}
            >
              <ShoppingCart size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
