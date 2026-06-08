import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import { addToWishlist, removeFromWishlist } from '../store/wishlistSlice'

function ProductCard({ product }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const wishlistItems = useSelector(state => state.wishlist.items)
  const isWishlisted = wishlistItems.some(item => item.id === product.id)

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    }))
  }

  const handleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id))
    } else {
      dispatch(addToWishlist({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      }))
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">

      {/* Image + Wishlist button */}
      <div
        className="h-48 flex items-center justify-center p-4 cursor-pointer relative"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />

        {/* Heart button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleWishlist()
          }}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm"
        >
          {isWishlisted ? '❤️' : '🤍'}
        </button>
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


// 2 cheezein samjho:
// isWishlisted:


// const isWishlisted = wishlistItems.some(item => item.id === product.id)

// Wishlist mein yeh product hai? → true
// Nahi hai? → false


// e.stopPropagation():

// Heart button click kiya
// Card bhi click na ho jaye
// stopPropagation → upar propagate mat karo





// Day 5

// Yeh 2 cheezein samjho — bohot important:

// useDispatch → Godown ko order bhejne ka tool
// dispatch(addToCart(product))
//     ↓
// Cart Slice ko message gaya
//     ↓
// Store mein product save ho gaya
// addToCart → Woh action jo humne cartSlice mein banaya tha