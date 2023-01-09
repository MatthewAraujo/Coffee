import Header from '../components/Header'
import Payment from '../components/Payment'
import Request from '../components/Request'
import styles from './styles.module.scss'
export default function Order() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.payment}>
          <Payment />
        </div>
        <div className={styles.order}>
          <Request />
        </div>
      </div>
    </div>
  )
}
