// Abhi ek problem hai:
// Products cart mein add kiye
// Page reload kiya
// Cart khali ho gaya! ❌
// Aaj yeh fix karenge aur Wishlist bhi banayenge:
// 1. useLocalStorage — custom hook
// 2. Cart data save — reload ke baad bhi rahe
// 3. Wishlist slice — products save karo
// 4. Wishlist page — saved products dikhao

// Pehle samjho — Custom Hook kya hai?
// Soch lo tumhara ek apna tool hai:
// React ke built-in hooks:
// useState, useEffect, useRef...

// Tumhara apna hook:
// useLocalStorage ← khud banaya!
// Custom Hook = apni logic ek jagah likho — kahin bhi use karo

// Pehle samjho — localStorage kya hai?
// Browser ka ek drawer hai
//     ↓
// Data save karo
//     ↓
// Page reload ho — data wahan hi rahega
//     ↓
// Browser band karo — tab bhi rahega



import { useState, useEffect } from 'react'

function useLocalStorage(key, initialValue) {

  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved ? JSON.parse(saved) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage


// Yeh samjho line by line:
// localStorage.getItem(key)
//     ↓ 
// Pehle se kuch save tha? → woh lo
// Nahi tha?               → initialValue use karo

// localStorage.setItem(key, value)
//     ↓
// Value change hui → localStorage mein save karo
