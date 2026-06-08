import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import ProtectedRoute from './components/ProtectedRoute'
import Home from "./Pages/Home"
import ProductDetail from "./Pages/ProductDetail"
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
import Wishlist from './pages/Wishlist'






function App() {
  return (
    <div>
      {/* <h1 className="text-2xl font-bold text-center mt-10">
        Shop
         App Working!
      </h1> */}

      <BrowserRouter>
      <Navbar/>
      <Routes>
   <Route path="/" element ={<Home/>}  />
   <Route path="/products/:id" element ={<ProductDetail/>}  />
   <Route path="/login" element ={<Login/>}  />\
    <Route path="/wishlist" element={<Wishlist />} />



   {/* Cart — sirf logged in user dekh sakta hai */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />


        {/* Matlab:
Cart ke darwaze pe guard khada hai
Login nahi? → /login pe jao
Login hai?  → Cart andar aao */}
   

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App