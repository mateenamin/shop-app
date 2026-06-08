import { useParams, useNavigate } from 'react-router-dom'
import { useGetProductByIdQuery } from '../api/productsApi'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  



  const { data: product, isLoading, isError } = useGetProductByIdQuery(id)


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
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>

      {/* Back Button */}
      <div
        style={{ backgroundColor: '#1a1a2e' }}
        className="px-6 py-4"
      >
        <button
          onClick={() => navigate(-1)}
          className="text-gray-400 hover:text-white text-sm"
        >
          ← Back
        </button>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="text-center py-20 text-gray-500 text-lg">
          Product load ho raha hai...
        </div>
      )}

      {/* Error */}
      {isError && (
        <div className="text-center py-20 text-red-500 text-lg">
          Product nahi mila!
        </div>
      )}

      {/* Product Detail */}
      {product && (
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="bg-white rounded-lg border border-gray-200 p-8">

            <div className="flex flex-col md:flex-row gap-8">

              {/* Image */}
              <div className="flex items-center justify-center md:w-64 h-64 bg-gray-50 rounded-lg p-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <p className="text-xs text-gray-400 uppercase mb-2">
                  {product.category}
                </p>
                <h1 className="text-xl font-bold text-gray-800 mb-3">
                  {product.title}
                </h1>
                <p
                  className="text-2xl font-bold mb-4"
                  style={{ color: '#e94560' }}
                >
                  ${product.price}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  ⭐ {product.rating.rate} ({product.rating.count} reviews)
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>
                <button

                onClick={handleAddToCart}
                className="w-full py-3 text-white rounded-lg font-medium"
                  style={{ backgroundColor: '#e94560' }}
                >
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default ProductDetail




// Day 4

// ✅ useParams — URL se ID nikali
// ✅ useGetProductByIdQuery — single product fetch
// ✅ navigate(-1) — back button
// ✅ Product detail page complete


