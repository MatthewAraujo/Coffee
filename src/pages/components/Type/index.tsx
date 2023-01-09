import styles from './styles.module.scss'

interface TypeProps {
  type?: string[]
}

export default function TypeCoffee({ type }: TypeProps) {
  return (
    <div className={styles.container}>
      {type?.map((type) => (
        <p key={type}>{type}</p>
      ))}
    </div>
  )
}
