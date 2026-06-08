import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

function ProductCard({ product }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    }))
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">

      {/* Image */}
      <div
        className="h-48 flex items-center justify-center p-4 cursor-pointer"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-base font-bold mb-3" style={{ color: '#e94560' }}>
          ${product.price}
        </p>
        <button
          onClick={handleAddToCart}
          className="w-full py-2 text-sm text-white rounded"
          style={{ backgroundColor: '#1a1a2e' }}
        >
          Add to Cart
        </button>
      </div>

    </div>
  )
}

export default ProductCard





// Day 5

// Yeh 2 cheezein samjho — bohot important:

// useDispatch → Godown ko order bhejne ka tool
// dispatch(addToCart(product))
//     ↓
// Cart Slice ko message gaya
//     ↓
// Store mein product save ho gaya
// addToCart → Woh action jo humne cartSlice mein banaya tha