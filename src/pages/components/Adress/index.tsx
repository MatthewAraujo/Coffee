import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import styles from './styles.module.scss'

export default function Adress() {
  return (
    <div className={styles.container}>
      <div className={styles.adress}>
        <div className={styles.adressTitle}>
          <div className={styles.image}>
            <MapPin size={22} />
          </div>
          <div className={styles.text}>
            <p>
              Entrega em <strong>Rua Joao Daniel Martinelli, 102</strong>
            </p>
            <p>Farrapos - Porto Alegre, RS</p>
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
