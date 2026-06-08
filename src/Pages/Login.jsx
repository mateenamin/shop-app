import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const { login, isLoggedIn, logout ,user } = useAuth()

  const handleLogin = () => {
    const email = emailRef.current.value
    const password = passwordRef.current.value

    if (email === '' || password === '') {
      alert('Email aur password likho!')
      return
    }

    login(email)
    navigate('/')
  }

  // Agar pehle se logged in hai
  if (isLoggedIn) {
    return (
      <div
        style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}
        className="flex items-center justify-center"
      >
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center max-w-sm w-full">
          <p className="text-2xl mb-4">👋</p>
          <p className="text-gray-800 font-medium mb-2">
            Tum already logged in ho!
          </p>
          <p className="text-gray-400 text-sm mb-6">
            {user?.email}
          </p>
          <button
            onClick={logout}
            className="w-full py-3 text-white rounded-lg font-medium"
            style={{ backgroundColor: '#e94560' }}
          >
            Logout
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}
      className="flex items-center justify-center"
    >
      <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-sm w-full">

        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Welcome Back
        </h1>
        <p className="text-gray-400 text-sm text-center mb-6">
          Login karo apne account mein
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="text-sm text-gray-600 block mb-2">
            Email address
          </label>
          <input
            ref={emailRef}
            type="email"
            placeholder="ali@email.com"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="text-sm text-gray-600 block mb-2">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm outline-none"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 text-white rounded-lg font-medium"
          style={{ backgroundColor: '#1a1a2e' }}
        >
          Login
        </button>

      </div>
    </div>
  )
}

export default Login




// useRef samjho — kyun use kiya?
// useRef → input ki value directly lo
//          bina useState ke

// emailRef.current.value → input mein jo likha woh mila
// useState vs useRef — form mein:
// useState → har letter pe re-render hota hai
// useRef   → sirf submit pe value lo — fast!







// Day 8

// Navbar mein logic:
// isLoggedIn = true  → "Logout" button dikhao
// isLoggedIn = false → "Login" link dikhao

// Test karo:
// 1. Cart pe click karo — Login page pe jayega ✅
// 2. Login karo koi bhi email/password se
// 3. Cart pe jao — ab dikh raha hai ✅
// 4. Logout karo — Login button wapas ✅







// Kyun kaam kar raha hai bina signup ke?
// Kyunki humne fake authentication banaya hai!


// const login = (email) => {
//   setIsLoggedIn(true)
//   setUser({ email })
// }



// Yeh code kya kar raha hai:

// Koi bhi email likho → isLoggedIn = true
// Koi bhi password likho → check hi nahi hota
// Bus login ho gaya!

// Real login vs Hamara login:

//                                  Real App                                     Hamara App

// Email check                   Database se match                               Nahi hota

// Password check                  Encrypted match                               Nahi hota

// Token                        JWT milta hai                                   Nahi hai

// Signup                        Zaroor hota hai                                Nahi hai







// Yeh kyun kiya?
// Kyunki abhi hum frontend seekh rahe hain.
// Backend nahi hai abhi — isliye fake login banaya taake:
// ✅ useContext practice ho
// ✅ Protected Route kaam kare
// ✅ Login/Logout flow samjh aaye

// Real login kab banega?
// Jab backend start karoge:
// Node.js + Express + MongoDB
//       ↓
// Real users database mein
//       ↓
// JWT token milega
//       ↓
// Woh token frontend mein save hoga
//       ↓
// Tab asli login hoga!