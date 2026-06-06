import React from 'react'
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
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

        <NavLink
  to="/cart"
  className={({ isActive }) =>
    isActive
      ? "text-[#e94560] font-semibold text-sm"
      : "text-gray-400 hover:text-white text-sm transition"
  }>
  Cart
            </NavLink>

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