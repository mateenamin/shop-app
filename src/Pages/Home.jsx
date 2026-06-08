import { useState , useEffect } from 'react'
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





// Din 7

// 1. Search bar — name se products filter karo
// 2. Category buttons — Electronics, Clothing etc.


// 3 kaam aaj honge:
// Step 1 → Search bar banao
// Step 2 → Category buttons banao
// Step 3 → useEffect se filter lagao


const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [filtered, setFiltered] = useState([])

  const categories = ['all', 'electronics', "men's clothing", "women's clothing", 'jewelery']

  // useEffect — search ya category change hone pe filter lagao
  useEffect(() => {
    if (!data) return

    let result = [...data]

    // Category filter
    if (category !== 'all') {
      result = result.filter(p => p.category === category)
    }

    // Search filter
    if (search.trim() !== '') {
      result = result.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    setFiltered(result)
  }, [data, search, category])



  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>

      {/* Hero */}
      <div
        className="text-center py-16 px-6"
        style={{ backgroundColor: '#16213e' }}
      >
        <h1 className="text-4xl font-bold text-white mb-3">
          Best Deals, Every Day
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          Discover top products at amazing prices
        </p>
        <button
          className="px-8 py-3 text-white rounded-lg font-medium"
          style={{ backgroundColor: '#e94560' }}
          onClick={() => navigate('/products/1')}
        >
          Shop Now
        </button>
      </div>

      {/* Search + Filter */}
      <div className="max-w-6xl mx-auto px-6 pt-8">

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Products search karo..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-800 text-sm mb-4 outline-none"
        />

        {/* Category Buttons */}
        <div className="flex gap-3 flex-wrap mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className="px-4 py-2 rounded-full text-sm capitalize"
              style={{
                backgroundColor: category === cat ? '#e94560' : '#ffffff',
                color: category === cat ? '#ffffff' : '#666666',
                border: category === cat ? 'none' : '1px solid #e0e0e0'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Products */}
      <div className="max-w-6xl mx-auto px-6 pb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Featured Products
        </h2>

        {/* Loading */}
        {isLoading && (
          <div className="text-center py-20 text-gray-500">
            Products load ho rahe hain...
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="text-center py-20 text-red-500">
            Kuch error aa gaya!
          </div>
        )}

        {/* No Results */}
        {!isLoading && filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            Koi product nahi mila!
          </div>
        )}

        {/* Products Grid */}
        {!isLoading && filtered.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map(product => (
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