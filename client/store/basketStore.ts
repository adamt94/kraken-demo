import { ProductType } from '@/features/api/products'
import { create } from 'zustand'

type Item = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

interface BasketStore {
  basketItems: Item[]
  basketQuantity: number
  addToBasket: (item: Item) => void
}

export const useBasketStore = create<BasketStore>((set) => ({
  basketItems: [],
  basketQuantity: 0,
  addToBasket: (item) =>
    set((state) => ({
      basketItems: [...state.basketItems, item],
      basketQuantity: state.basketQuantity + item.quantity,
    })),
}))
