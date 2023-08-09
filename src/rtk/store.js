import { configureStore } from '@reduxjs/toolkit'
import getproductsSlice from './slices/getproducts-slice'
import cartSlice from './slices/cartSlice'
export const store = configureStore({
  reducer: {
    products : getproductsSlice,
    cart: cartSlice,
  },
})