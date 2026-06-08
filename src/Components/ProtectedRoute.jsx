import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) {
    return <Navigate to="/login" />
  }

  return children
}

export default ProtectedRoute



// Yeh samjho — kaise kaam karta hai:
// User Cart pe gaya
//       ↓
// ProtectedRoute check karta hai
//       ↓
// isLoggedIn = false?  → /login pe bhejo
// isLoggedIn = true?   → Cart dikhao


// Simple rule:

// jsx// Agar logged in nahi → login pe redirect

// if (!isLoggedIn) return <Navigate to="/login" />

// // Agar logged in hai → jo bhi andar hai dikhao

// return children





