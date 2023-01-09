import { createContext, ReactNode, useContext, useState } from 'react'

const card = [
  {
    id: 1,
    name: 'Cartão de crédito',
  },
  {
    id: 2,
    name: 'Cartão de débito',
  },
  {
    id: 3,
    name: 'Dinheiro',
  },
]

interface AdressProviderProps {
  children: ReactNode
}

interface Address {
  id: number
  city: string
  state: string
  district: string
  complement?: string
  number: string
  street: string
}

interface PaymentCard {
  id: number
  name: string
}

interface AddressDataProps {
  card: PaymentCard[]
  /* address: Address[] */
  saveAdress: (data: Address) => void
}

const addressContext = createContext({} as AddressDataProps)

export const AdressProvider = ({ children }: AdressProviderProps) => {
  const [address, setAddress] = useState<Address>({} as Address)
  const [card, setCard] = useState<PaymentCard[]>([])
  function saveAdress(data: Address) {
    setAddress(data)
  }
  return (
    <addressContext.Provider value={{ card, saveAdress }}>
      {children}
    </addressContext.Provider>
  )
}

export const useAddress = () => {
  return useContext(addressContext)
}
