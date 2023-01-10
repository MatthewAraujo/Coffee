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

interface AddressProviderProps {
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
  address: Address
  saveAddress: (data: Address) => void
}

const addressContext = createContext({} as AddressDataProps)

export const AddressProvider = ({ children }: AddressProviderProps) => {
  const [address, setAddress] = useState<Address>({} as Address)
  const [card, setCard] = useState<PaymentCard[]>([])
  function saveAddress(data: Address) {
    setAddress(data)
  }

  console.table(address)
  return (
    <addressContext.Provider value={{ card, saveAddress, address }}>
      {children}
    </addressContext.Provider>
  )
}

export const useAddress = () => {
  return useContext(addressContext)
}
