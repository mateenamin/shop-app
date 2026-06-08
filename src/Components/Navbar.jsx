import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { useSelector } from 'react-redux'


const Navbar = () => {

const cartItems = useSelector(state => state.cart.items)
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)


  return (
    <nav className='bg-[#1a1a2e] px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg '>

         {/* Logo */}

      <Link to="/" className="text-white text-xl font-bold">
  Shop<span className="text-[#e94560]">ly</span>
           </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-6">
        <NavLink
  to="/"
  className={({ isActive }) =>
    isActive
      ? "text-[#e94560] font-semibold text-sm"
      : "text-gray-400 hover:text-white text-sm transition"
  }>
  Home
  </NavLink>
<div className="relative">
  <NavLink
    to="/cart"
    className={({ isActive }) =>
      isActive
        ? "text-[#e94560] font-semibold text-sm"
        : "text-gray-400 hover:text-white text-sm transition"
    }
  >
    Cart
  </NavLink>

  {/* Badge */}
  {totalItems > 0 && (
    <span
      className="absolute -top-2 -right-4 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
      style={{ backgroundColor: '#e94560' }}
    >
      {totalItems}
    </span>
  )}
</div>

        <NavLink
          to="/login"
          className="text-sm px-4 py-2 rounded text-white bg-[#e94560]"
          
        >
          Login
        </NavLink>
      </div>
         
        
    </nav>
  )
}

export default Navbar