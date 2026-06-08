import { useSelector, useDispatch } from 'react-redux'
import { removeFromWishlist } from '../store/wishlistSlice'
import { addToCart } from '../store/cartSlice'
import { useNavigate } from 'react-router-dom'

function Wishlist() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const wishlistItems = useSelector(state => state.wishlist.items)

  if (wishlistItems.length === 0) {
    return (
      <div
        style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}
        className="flex items-center justify-center"
      >
        <div className="text-center">
          <p className="text-4xl mb-4">🤍</p>
          <p className="text-gray-500 text-lg mb-2">Wishlist khali hai!</p>
          <p className="text-gray-400 text-sm mb-6">
            Kuch products save karo
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 text-white rounded-lg text-sm"
            style={{ backgroundColor: '#1a1a2e' }}
          >
            Products dekho
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6 py-10">

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Meri Wishlist ({wishlistItems.length} items)
        </h1>

        <div className="flex flex-col gap-4">
          {wishlistItems.map(item => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4"
            >
              {/* Image */}
              <div
                className="w-20 h-20 flex items-center justify-center bg-gray-50 rounded p-2 flex-shrink-0 cursor-pointer"
                onClick={() => navigate(`/products/${item.id}`)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
                  {item.title}
                </p>
                <p className="text-base font-bold" style={{ color: '#e94560' }}>
                  ${item.price}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    dispatch(addToCart({
                      id: item.id,
                      title: item.title,
                      price: item.price,
                      image: item.image,
                    }))
                  }}
                  className="px-4 py-2 text-white text-sm rounded"
                  style={{ backgroundColor: '#1a1a2e' }}
                >
                  Cart mein add
                </button>
                <button
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                  className="px-4 py-2 text-sm rounded border border-gray-200 text-gray-500 hover:text-red-500"
                >
                  Remove
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Wishlist