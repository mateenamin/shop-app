import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import { store } from './Store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    
  </StrictMode>,
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