import Head from 'next/head'
import Banner from './components/Banner'
import Header from './components/Header'
import HoverCoffee from './components/HoverCoffee'
import styles from './index.module.scss'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffe Matthew</title>
      </Head>
      <Header />
      <Banner />
      <HoverCoffee />
    </div>
  )
}
