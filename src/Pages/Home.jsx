import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'

const dummyProducts = [
  { id: 1, title: "Laptop Pro X", price: 999, image: "https://fakestoreapi.com/img/81fAn9K1wHL._AC_UY879_.jpg" },
  { id: 2, title: "Wireless Headphones", price: 49, image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" },
  { id: 3, title: "Classic T-Shirt", price: 29, image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" },
  { id: 4, title: "Smart Watch", price: 199, image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_FMwebp_QL65_.jpg" },
  { id: 5, title: "Gold Bracelet", price: 89, image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_FMwebp_QL65_.jpg" },
  { id: 6, title: "HDD Hard Drive", price: 64, image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" },
]

function Home() {
  const navigate = useNavigate()

  return (
    <div className="bg-[#f5f5f5] min-h-screen">

      {/* Hero Section */}
      <div
        className="text-center py-16 px-6 bg-[#16213e]"
        
      >
        <h1 className="text-4xl font-bold text-white mb-3">
          Best Deals, Every Day
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          Discover top products at amazing prices
        </p>
        <button
          className="px-8 py-3 text-white rounded-lg font-medium bg-[#e94560]"
          onClick={() => navigate('/products/1')}
        >
          Shop Now
        </button>
      </div>

      {/* Products Section */}
      <div className="max-w-8xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Featured Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dummyProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home