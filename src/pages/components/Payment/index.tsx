import { Bank, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'
import { useState } from 'react'
import { useAddress } from '../../../hooks/useAddress'
import styles from './styles.module.scss'

export default function Payment() {
  const { saveAddress, address, saveCard } = useAddress()
  const [selected, setSelected] = useState('')

  function handleComplement(e: any) {
    saveAddress({ ...address, complement: e.target.value })
  }
  function handleState(e: any) {
    saveAddress({ ...address, state: e.target.value })
  }

  function handleCityName(e: any) {
    saveAddress({ ...address, city: e.target.value })
  }

  function handleDistrictName(e: any) {
    saveAddress({ ...address, district: e.target.value })
  }

  function handleNumberAdress(e: any) {
    saveAddress({ ...address, number: e.target.value })
  }

  function handleStreetName(e: any) {
    saveAddress({ ...address, street: e.target.value })
  }
  function handleChooseCart(e: any) {
    setSelected(e.currentTarget.dataset.pagamento)
    saveCard(e.currentTarget.dataset.pagamento)
  }
  return (
    <div>
      <div className={styles.container}>
        <h2>Complete seu pedido</h2>
        <div className={styles.content}>
          <div className={styles.containerTitle}>
            <div className={styles.title}>
              <div className={styles.image}>
                <MapPinLine size={22} />
              </div>
              <div className={styles.text}>
                <h3>Endereco de entrega</h3>
                <p>informe o endereco onde deseja receber seu pedido</p>
              </div>
            </div>
          </div>
          <div className={styles.containerForm}>
            <form>
              <input type="text" required placeholder="CEP" />
              <input
                type="text"
                required
                placeholder="Rua"
                value={address.street}
                onChange={handleStreetName}
              />
              <div className={styles.casa}>
                <input
                  type="text"
                  required
                  placeholder="Numero"
                  value={address.number}
                  onChange={handleNumberAdress}
                />
                <input
                  type="text"
                  placeholder="Complemento "
                  value={address.complement}
                  onChange={handleComplement}
                />
              </div>
              <div className={styles.bairro}>
                <input
                  type="text"
                  required
                  placeholder="Bairro"
                  value={address.district}
                  onChange={handleDistrictName}
                />
                <input
                  type="text"
                  required
                  placeholder="Cidade"
                  value={address.city}
                  onChange={handleCityName}
                />
                <input
                  type="text"
                  required
                  placeholder="UF"
                  value={address.state}
                  onChange={handleState}
                />
              </div>
            </form>
          </div>
        </div>
        <div className={styles.pagamento}>
          <div className={styles.containerTitle}>
            <div className={styles.title}>
              <div className={styles.image}>
                <CurrencyDollar size={22} />
              </div>
              <div className={styles.text}>
                <h3>Pagamento</h3>
                <p>
                  O pagamento e feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
          </div>
          <div className={styles.containerEscolherCartao}>
            <button
              onClick={handleChooseCart}
              data-pagamento="credito"
              className={`${
                selected === 'credito' ? styles.containerCartoesActive : ''
              } ${styles.containerCartoes} `}
            >
              <div className={styles.image}>
                <CurrencyDollar size={22} />
              </div>
              <div className={styles.cartao}>
                <p>Cartao de credito</p>
              </div>
            </button>
            <button
              onClick={handleChooseCart}
              data-pagamento="debito"
              className={`${
                selected === 'debito' ? styles.containerCartoesActive : ''
              } ${styles.containerCartoes} `}
            >
              <div className={styles.image}>
                <Bank size={22} />
              </div>
              <div className={styles.cartao}>
                <p>Cartao de debito</p>
              </div>
            </button>
            <button
              onClick={handleChooseCart}
              data-pagamento="dinheiro"
              className={`${
                selected === 'dinheiro' ? styles.containerCartoesActive : ''
              } ${styles.containerCartoes} `}
            >
              <div className={styles.image}>
                <Money size={22} />
              </div>
              <div className={styles.cartao}>
                <p>dinheiro </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
