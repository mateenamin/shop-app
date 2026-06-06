import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import ProductDetail from "./Pages/ProductDetail"
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
import Navbar from "./Components/Navbar"
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
   <Route path="/cart" element ={<Cart/>}  />
   <Route path="/login" element ={<Login/>}  />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App