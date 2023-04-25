import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './ProductSlice'
import CatagoriSlice from './CatagoriSlice'
import CartSlice from './CartSlice'
export const store = configureStore({
  reducer: {
    categories : CatagoriSlice,
    products : ProductSlice,
    carts : CartSlice
  },
})
