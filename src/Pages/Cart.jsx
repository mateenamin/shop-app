import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../store/cartSlice'

function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  )

  if (cartItems.length === 0) {
    return (
      <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}
        className="flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl mb-2">🛒</p>
          <p className="text-gray-500 text-lg">Cart khali hai!</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6 py-10">

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Mera Cart
        </h1>

        {/* Cart Items */}
        <div className="flex flex-col gap-4 mb-6">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4"
            >
              {/* Image */}
              <div className="w-20 h-20 flex items-center justify-center bg-gray-50 rounded p-2">
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

              {/* Quantity */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    item.quantity === 1
                      ? dispatch(removeFromCart(item.id))
                      : dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                  }
                  className="w-8 h-8 border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="text-sm font-medium w-6 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                  }
                  className="w-8 h-8 border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-400 hover:text-red-600 text-sm ml-2"
              >
                ✕
              </button>

            </div>
          ))}
        </div>

        {/* Total */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600 font-medium">Total:</span>
            <span className="text-2xl font-bold" style={{ color: '#e94560' }}>
              ${total.toFixed(2)}
            </span>
          </div>
          <button
            className="w-full py-3 text-white rounded-lg font-medium"
            style={{ backgroundColor: '#1a1a2e' }}
          >
            Checkout
          </button>
        </div>

      </div>
    </div>
  )
}

export default Cart