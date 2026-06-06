import { useNavigate } from 'react-router-dom'

function ProductCard({ product }) {
  const navigate = useNavigate()

  return (
    <div className="bg-[#f5f5f5] border border-gray-300 rounded-lg overflow-hidden">
      
      {/* Product Image */}
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

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-base font-bold mb-3 flex justify-end text-[#e94560]">
          ${product.price}
        </p>
        <button
          className="w-full py-2 text-sm text-white rounded bg-[#1a1a2e] cursor-pointer"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          Add to Cart
        </button>
      </div>

    </div>
  )
}

export default ProductCard