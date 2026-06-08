import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '../api/productsApi'
import cartReducer from './cartSlice'
import wishlistReducer from './wishlistSlice'


export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,

    cart: cartReducer,
//     Store (Godown)
//   ├── productsApi → products ka data
//   └── cart        → cart ka data ✅ naya

   wishlist: wishlistReducer,

//     Store (Godown)
//   ├── productsApi → API data
//   ├── cart        → cart items
//   └── wishlist    → wishlist items ✅ naya


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})