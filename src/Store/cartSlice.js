// Abhi "Add to Cart" button press karo — kuch nahi hota.
// Aaj yeh button actually kaam karega.

// Pehle samjho — Cart Slice kya hai?
// Soch lo ek register hai dukaan mein:
// Customer (Component)
//     ↓ "yeh product add karo"
// Register (Cart Slice)
//     ↓ likh leta hai
// Godown (Redux Store)
//     ↓ data save ho gaya
// Sab log dekh sakte hain (Navbar, Cart page)
// Slice = Redux Store ka ek hissa — sirf cart ka data rakhta hai.

// 3 kaam aaj honge:
// Step 1 → cartSlice.js banao
// Step 2 → store.js mein add karo
// Step 3 → Add to Cart button connect karo


import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [],
  },

  reducers: {

    addToCart: (state, action) => {
      const existing = state.items.find(
        item => item.id === action.payload.id
      )
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      )
    },

    updateQuantity: (state, action) => {
      const item = state.items.find(
        item => item.id === action.payload.id
      )
      if (item) {
        item.quantity = action.payload.quantity
      }
    },

  },
})

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer


// Yeh samjho — 3 actions:
// addToCart → Product already cart mein hai? Quantity +1. Nahi hai? Naya add karo.
// removeFromCart → Product ID se dhundho aur hata do.
// updateQuantity → Product ki quantity badlo.




// Din 5 recap — kya seekha:
// ✅ cartSlice.js — addToCart, removeFromCart, updateQuantity
// ✅ store.js — cartReducer add kiya
// ✅ useDispatch — store mein data bheja
// ✅ useSelector — store se data liya
// ✅ Navbar badge — cart count dikh raha hai
// ✅ Cart page — items, quantity, total
// ✅ ProductDetail mein bhi Add to Cart lagaya