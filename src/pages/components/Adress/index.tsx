import { Bank, CurrencyDollar, MapPin, Money, Timer } from 'phosphor-react'
import { useAddress } from '../../../hooks/useAddress'
import styles from './styles.module.scss'

export default function Adress() {
  const { address, saveCard } = useAddress()
  console.log(saveCard)
  return (
    <div className={styles.container}>
      <div className={styles.adress}>
        <div className={styles.adressTitle}>
          <div className={styles.image}>
            <MapPin size={22} />
          </div>
          <div className={styles.text}>
            <p>
              Entrega em{' '}
              <strong>
                {address.street}, {address.number}
              </strong>
            </p>
            <p>
              {address.city} - {address.district}, {address.state}
            </p>
          </div>
        </div>
        <div className={styles.adressTitle}>
          <div className={styles.image}>
            <Timer size={22} />
          </div>
          <div className={styles.text}>
            <p>Previsão de entrega</p>
            <strong>20 min - 30 min</strong>
          </div>
        </div>
        <div className={styles.adressTitle}>
          (saveCard === 'credito' ? (
          <div className={styles.image}>
            <CurrencyDollar size={22} />
          </div>
          <div className={styles.text}>
            <p>Pagamento na entrega</p>
            <strong>Cartão de Crédito</strong>
          </div>
          ): saveCard === 'debito'(
          <div className={styles.image}>
            <Bank size={22} />
          </div>
          <div className={styles.text}>
            <p>Pagamento na entrega</p>
            <strong>Cartão de debito</strong>
          </div>
          ): saveCard === 'dinheiro'(
          <div className={styles.image}>
            <Money size={22} />
          </div>
          <div className={styles.text}>
            <p>Pagamento na entrega</p>
            <strong>Cartão de Crédito</strong>
          </div>
          ): null )
        </div>
      </div>
    </div>
  )
}
