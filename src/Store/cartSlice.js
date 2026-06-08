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

// localStorage se cart load karo
const loadCartFromStorage = () => {
  try {
    const saved = localStorage.getItem('cart')
    if (saved) {
      return JSON.parse(saved)
    }
    return { items: [] }
  } catch {
    return { items: [] }
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromStorage(), // ← reload pe localStorage se lo

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
      localStorage.setItem('cart', JSON.stringify(state))
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      )
      localStorage.setItem('cart', JSON.stringify(state))
    },

    updateQuantity: (state, action) => {
      const item = state.items.find(
        item => item.id === action.payload.id
      )
      if (item) {
        item.quantity = action.payload.quantity
      }
      localStorage.setItem('cart', JSON.stringify(state))
    },

    loadCart: (state, action) => {
      state.items = action.payload
    },

    clearCart: (state) => {
      state.items = []
      localStorage.removeItem('cart')
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  loadCart,
  clearCart,
} = cartSlice.actions

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










// Day 9 


// Yeh samjho — kya badla:

// Pehle:

// initialState: { items: [] }
// // Har baar khali shuru hota tha
// Ab:
// initialState: loadCart()
// // localStorage se pehla data lo
// // Agar kuch tha → woh lo
// // Nahi tha → khali shuru karo
// Har action ke baad:
// saveCart(state)
// // Add kiya → save
// // Remove kiya → save
// // Quantity badli → save

// Test karo:

// 1. Cart mein kuch add karo
// 2. Page reload karo — F5
// 3. Cart mein items abhi bhi hain! ✅