import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useAddress } from '../../../hooks/useAddress'
import styles from './styles.module.scss'

export default function Adress() {
  const { address } = useAddress()

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
              {address.city} - {address.state}, {address.district}
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
          <div className={styles.image}>
            <CurrencyDollar size={22} />
          </div>
          <div className={styles.text}>
            <p>Pagamento na entrega</p>
            <strong>Cartão de Crédito</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
