
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import { store } from './Store/store.js'

import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
        <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
    
  
)



// Pehle samjho — Provider kya hai?
// Soch lo store ek godown hai.
// Provider us godown ka darwaza hai — jo poori app ko store tak access deta hai.
// Provider (darwaza)
//     └── App
//          ├── Navbar     ✅ store access
//          ├── Home       ✅ store access
//          ├── Cart       ✅ store access
//          └── Login      ✅ store access
// Provider ke bina — koi bhi component store tak nahi pahunch sakta.











// Provider ko store diya
//     ↓
// Ab poori App ke andar
//     ↓
// Har component store use kar sakta hai
// Simple rule yaad rakho:

// Provider hamesha sabse upar hota hai — taake sab andar wale use kar sakein.








// Yeh samjho — wrapping order:
// Provider (Redux)
//     └── AuthProvider (Auth)
//             └── App
//                  ├── Navbar
//                  ├── Home
//                  ├── Cart
//                  └── Login
// Rule yaad rakho:

// Jo sabse bahar hai — woh poori app ko cover karta hai.
// Redux bahar — sab ko store milega.
// AuthProvider andar — sab ko login state milegi.