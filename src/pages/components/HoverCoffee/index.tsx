import { useLoja } from '../../../hooks/useLoja'
import Coffee from '../Coffee'
import styles from './styles.module.scss'

export default function HoverCoffee() {
  const { coffee } = useLoja()
  return (
    <div className={styles.container}>
      {coffee.map((item) => (
        <Coffee
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
          type={item.type}
        />
      ))}
    </div>
  )
}
