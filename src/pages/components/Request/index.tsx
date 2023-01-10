import Link from 'next/link'
import { useLoja } from '../../../hooks/useLoja'
import PaymentCoffe from '../HoverPaymentCoffe'
import styles from './styles.module.scss'

export default function Request() {
  const { coffee, carrinho } = useLoja()
  const totalitens = carrinho.reduce((acc, item) => {
    return acc + item.quantidade * coffee[item.id - 1].price
  }, 0)
  const total = totalitens + 3.5
  return (
    <div className={styles.container}>
      <h2>Cafes Selecionado</h2>
      <div className={styles.content}>
        {carrinho.map((item) => {
          const cafe = coffee.find((cafe) => cafe.id === item.id)
          if (cafe) {
            return (
              <PaymentCoffe
                key={item.id}
                id={item.id}
                title={cafe.title}
                image={cafe.image}
                price={cafe.price}
                quantidade={item.quantidade}
              />
            )
          }
          return ''
        })}
        <div className={styles.payment}>
          <div className={styles.totalItens}>
            <p>Total de itens</p>
            <div className={styles.itensPrice}>
              <p>R$</p>
              <span>{totalitens}</span>
            </div>
          </div>
          <div className={styles.totalItens}>
            <p>Entrega</p>
            <div className={styles.itensPrice}>
              <p>R$</p>
              <span>3.50</span>
            </div>
          </div>
          <div className={styles.totalItens}>
            <strong>Total</strong>
            <div className={styles.itensPrice}>
              <strong>R$</strong>
              <strong>{total}</strong>
            </div>
          </div>
          <Link href="/confirm">
            <button type="button">Finalizar Pedido</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
