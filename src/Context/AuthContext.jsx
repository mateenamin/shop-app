


// Din 8

// Abhi koi bhi Cart page dekh sakta hai — login ki zaroorat nahi.


// Aaj yeh banayenge:

// 1. AuthContext — login state poori app mein
// 2. Login page — form banayenge
// 3. Protected Route — Cart sirf logged in user dekhe

// Pehle samjho — useContext kya hai?

// Soch lo ek school notice board hai:

// Principal (AuthContext)
//     ↓ notice lagaya — "Ali logged in hai"
// Har class (Component)
//     ↓ notice board dekh sakti hai
// Navbar  ✅ — "Ali" dikhao
// Cart    ✅ — access do
// Home    ✅ — dekh sakta hai

// Bina Context:

// Parent → Child → Child → Child → data bhejte bhejte thak jao

// Context ke saath:

// AuthContext → koi bhi component directly le sakta hai
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem('isLoggedIn') === 'true'
  )

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })

  const login = (email, dispatch) => {
    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('user', JSON.stringify({ email }))
    setIsLoggedIn(true)
    setUser({ email })

    // Purana cart clear karo
    dispatch({ type: 'cart/clearCart' })
    localStorage.removeItem('cart')

    // Is email ka cart tha? Load karo
    const userCart = localStorage.getItem(`cart_${email}`)
    if (userCart) {
      dispatch({ type: 'cart/loadCart', payload: JSON.parse(userCart).items })
    }
  }

  const logout = (email, dispatch) => {
    // Cart save karo is user ke liye
    const cartData = localStorage.getItem('cart')
    if (cartData && email) {
      localStorage.setItem(`cart_${email}`, cartData)
    }

    // Sab clear karo
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('user')
    localStorage.removeItem('cart')
    dispatch({ type: 'cart/clearCart' })
    setIsLoggedIn(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}





// createContext()  → notice board banao
// AuthProvider     → notice board pe data rakho
// useAuth()        → koi bhi component notice board dekhe