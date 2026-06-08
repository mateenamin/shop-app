import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'
import { useGetProductsQuery } from '../api/productsApi'


// Yeh humne khud likha tha — fake data.
// const dummyProducts = [
//   { id: 1, title: "Laptop Pro X", price: 999, image: "https://fakestoreapi.com/img/81fAn9K1wHL._AC_UY879_.jpg" },
//   { id: 2, title: "Wireless Headphones", price: 49, image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" },
//   { id: 3, title: "Classic T-Shirt", price: 29, image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" },
//   { id: 4, title: "Smart Watch", price: 199, image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_FMwebp_QL65_.jpg" },
//   { id: 5, title: "Gold Bracelet", price: 89, image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_FMwebp_QL65_.jpg" },
//   { id: 6, title: "HDD Hard Drive", price: 64, image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" },
// ]

// Kaise aayega data? Samjho:
// useGetProductsQuery()
//        ↓
// RTK Query internet pe jata hai
//        ↓
// fakestoreapi.com/products
//        ↓
// 20 real products wapas aate hain
//        ↓
// Hum cards mein dikhate hain


      

function Home() {
  const navigate = useNavigate()


  // RTK Query se data manga
  const { data, isLoading, isError } = useGetProductsQuery()

//   Yeh 3 cheezein samjho — bohot important hain:

// isLoading → Jab data aa raha hota hai tab

// Internet slow hai → "load ho rahe hain..." dikhao

// isError → Jab kuch galat ho jaye

// Internet nahi → error message dikhao

// data → Jab data aa jaye

// 20 real products → cards mein dikhao

// Yeh pattern hamesha yaad rakho:

// const { data, isLoading, isError } = useGetProductsQuery()

// if isLoading → loading dikhao
// if isError   → error dikhao
// if data      → asli cheez dikhao
// Yeh pattern har API call mein same rahega! ✅




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

        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dummyProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> */}


        {/*  Real Data */}
          {/* Loading */}
        {isLoading && (
          <div className="text-center py-20 text-gray-500 text-lg">
            Products load ho rahe hain...
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="text-center py-20 text-red-500 text-lg">
            Kuch error aa gaya! Dobara try karo.
          </div>
        )}

        {/* Real Products */}
        {data && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>

    </div>
  )
}

export default Home













//  Day 3 

// Aaj kya seekha?
// Store → Godown — poori app ka data ek jagah
// Provider → Darwaza — poori app ko store tak access deta hai
// createApi → Waiter tayyar kiya — FakeStoreAPI se baat karta hai
// useGetProductsQuery → Ek line — data aa jata hai automatically
// isLoading / isError / data → Teen states — har API call mein yahi pattern