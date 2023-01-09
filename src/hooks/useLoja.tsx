import { createContext, ReactNode, useContext, useState } from 'react'

const coffee = [
  {
    id: 1,
    image: '/expresso.png',
    title: 'Expresso Tradicional',
    description: 'Um expresso tradicional, com sabor marcante e cremoso',
    price: 9.5,
    type: ['tradicional'],
  },
  {
    id: 2,
    image: '/arabe.png',

    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    type: ['Especial'],
  },
  {
    id: 3,
    image: '/cafecomleite.png',

    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.5,
    type: ['tradicional', 'com leite'],
  },
  {
    id: 4,
    image: '/capuccino.png',

    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.5,
    type: ['tradicional', 'com leite'],
  },
  {
    id: 5,
    image: '/chocohot.png',

    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.5,
    type: ['tradicional', 'com leite'],
  },
  {
    id: 6,
    image: '/expressoamericano.png',

    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.5,
    type: ['tradicional'],
  },
  {
    id: 7,
    image: '/expressocremoso.png',

    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.5,
    type: ['tradicional'],
  },
  {
    id: 8,
    image: '/expressogelado.png',

    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.5,
    type: ['tradicional', 'gelado'],
  },
  {
    id: 9,
    image: '/havaiano.png',

    title: 'Havaino',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.5,
    type: ['Especial'],
  },
  {
    id: 10,
    image: '/irlandes.png',

    title: 'Irlandes',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.5,
    type: ['Especial', 'Alcoolico'],
  },
  {
    id: 11,
    image: '/latte.png',

    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.5,
    type: ['tradicional', 'com leite'],
  },
  {
    id: 12,
    image: '/macchiato.png',

    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.5,
    type: ['tradicional', 'com leite'],
  },
  {
    id: 13,
    image: '/mocaccino.png',

    title: 'Mocaccino',
    description: 'Um',
    price: 9.5,
    type: ['tradicional', 'com leite'],
  },
  {
    id: 14,
    image: '/cubano.png',

    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.5,
    type: ['especial', 'alcoólico', 'gelado'],
  },
]

interface LojaProviderProps {
  children: ReactNode
}

interface CarrinhoProduto {
  id: number
  quantidade: number
  price: number
}

interface Coffee {
  id: number
  image: string
  title: string
  description: string
  price: number
  type: string[]
}

interface LojaDataProps {
  coffee: Coffee[]
  carrinho: CarrinhoProduto[]
  adicionarCarrinho: (id: number, quantidade: number, price: number) => void
}

const lojaContext = createContext({} as LojaDataProps)

export const LojaProvider = ({ children }: LojaProviderProps) => {
  const [carrinho, setCarrinho] = useState<CarrinhoProduto[]>([])

  function adicionarCarrinho(id: number, quantidade: number, price: number) {
    const produto = carrinho.find((i) => i.id === id)

    if (!produto) {
      setCarrinho([
        ...carrinho,
        {
          id,
          quantidade,
          price,
        },
      ])
    } else {
      setCarrinho(
        carrinho.map((i) =>
          produto.id === i.id ? { ...produto, quantidade, price } : i,
        ),
      )
    }
  }
  return (
    <lojaContext.Provider
      value={{
        coffee,
        carrinho,
        adicionarCarrinho,
      }}
    >
      {children}
    </lojaContext.Provider>
  )
}

export const useLoja = () => {
  return useContext(lojaContext)
}
