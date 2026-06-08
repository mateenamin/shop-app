import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div
      style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}
      className="flex items-center justify-center"
    >
      <div className="text-center">
        <h1
          className="text-8xl font-bold mb-4"
          style={{ color: '#e94560' }}
        >
          404
        </h1>
        <p className="text-gray-600 text-xl mb-2">
          Page nahi mila!
        </p>
        <p className="text-gray-400 text-sm mb-8">
          Yeh page exist nahi karta
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-8 py-3 text-white rounded-lg font-medium"
          style={{ backgroundColor: '#1a1a2e' }}
        >
          Home pe wapas jao
        </button>
      </div>
    </div>
  )
}

export default NotFound