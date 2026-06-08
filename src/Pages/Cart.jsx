
// Din 5 mein Cart page ban gaya — items dikh rahe hain, + / - kaam kar raha hai.

// Aaj 2 cheezein improve karenge:

// 1. useMemo — total price properly calculate karna
// 2. Cart page ko aur better banana

// Pehle samjho — useMemo kya hai?

// Soch lo har baar cart page render hota hai — total calculate hoti hai:

// $999 + $49 + $199 = $1247

// Bina useMemo:

// Page render hua → total calculate hua
// Koi bhi cheez change hui → dobara calculate hua
// Unnecessarily baar baar calculate hota hai
// useMemo ke saath:
// Sirf tab calculate karo
// jab cart items actually change hon

// Simple rule:

// useMemo — expensive calculation ko cache karta hai


import { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity } from '../store/cartSlice'

function Cart() {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.items)

  // useMemo — sirf tab calculate karo jab cartItems change hon
  const total = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    )
  }, [cartItems])

  if (cartItems.length === 0) {
    return (
      <div
        style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}
        className="flex items-center justify-center"
      >
        <div className="text-center">
          <p className="text-4xl mb-4">🛒</p>
          <p className="text-gray-500 text-lg mb-2">Cart khali hai!</p>
          <p className="text-gray-400 text-sm">Kuch products add karo</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div className="max-w-3xl mx-auto px-6 py-10">

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Mera Cart ({cartItems.length} items)
        </h1>

        {/* Cart Items */}
        <div className="flex flex-col gap-4 mb-6">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4"
            >
              {/* Image */}
              <div className="w-20 h-20 flex items-center justify-center bg-gray-50 rounded p-2 flex-shrink-0">
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
                <p className="text-sm font-bold" style={{ color: '#e94560' }}>
                  ${item.price} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    item.quantity === 1
                      ? dispatch(removeFromCart(item.id))
                      : dispatch(updateQuantity({
                          id: item.id,
                          quantity: item.quantity - 1
                        }))
                  }
                  className="w-8 h-8 border border-gray-300 rounded text-gray-600 hover:bg-gray-100 font-bold"
                >
                  -
                </button>
                <span className="text-sm font-medium w-6 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    dispatch(updateQuantity({
                      id: item.id,
                      quantity: item.quantity + 1
                    }))
                  }
                  className="w-8 h-8 border border-gray-300 rounded text-gray-600 hover:bg-gray-100 font-bold"
                >
                  +
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-400 hover:text-red-600 text-sm ml-2 font-bold"
              >
                ✕
              </button>

            </div>
          ))}
        </div>

        {/* Total Box */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">

          {/* Price breakdown */}
          <div className="flex flex-col gap-2 mb-4 pb-4 border-b border-gray-100">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between text-sm text-gray-500">
                <span className="line-clamp-1 flex-1 mr-4">{item.title}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-700 font-medium text-lg">Total:</span>
            <span
              className="text-2xl font-bold"
              style={{ color: '#e94560' }}
            >
              ${total.toFixed(2)}
            </span>
          </div>

          <button
            className="w-full py-3 text-white rounded-lg font-medium text-base"
            style={{ backgroundColor: '#1a1a2e' }}
          >
            Checkout karo
          </button>

        </div>
      </div>
    </div>
  )
}

export default Cart







// useMemo ka formula yaad rakho:
// jsconst value = useMemo(() => {
//   return // koi bhi calculation
// }, [dependency])
// //     ↑
// // Jab yeh change ho tab dobara calculate karo


