import { motion } from 'framer-motion'
import Image from 'next/image'
import Adress from '../components/Adress'
import Header from '../components/Header'
import styles from './styles.module.scss'
export default function Confirm() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é so aguardar que logo o café chegará até você</p>
          </div>
          <div className={styles.adressContainer}>
            <div className={styles.adress}>
              <Adress />
            </div>
            <div className={styles.image}>
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: 60 }}
                transition={{
                  ease: 'easeInOut',
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <Image src="/bike.png" alt="bike" width={492} height={293} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
