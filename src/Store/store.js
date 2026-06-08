import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '../api/productsApi'
import cartReducer from './cartSlice'


export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,

    cart: cartReducer,
//     Store (Godown)
//   ├── productsApi → products ka data
//   └── cart        → cart ka data ✅ naya
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})