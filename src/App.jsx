
import { Route, Routes } from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Login from './views/Auth/Login/Login'
import Register from './views/Auth/Register/Register'
import Home from './views/Home/Home'
import AllProducts from './views/Products/AllProducts/AllProducts'
import ProductDetail from './views/Products/ProductDetail/ProductDetail'
import CategoryList from './components/Categories/CategoryList'
import CreateProduct from "./views/Products/CreateProduct/CreateProduct"
//import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
//import AuthContext from "./contexts/AuthContext";


function App() {

  return (
    <div className="App">
       <Navbar />

      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="products/:id" element={<ProductDetail />} />
          {/* <Route path="products/category/:id" element={<CategoryDetail />} /> */}
          <Route path="products/category" element={<CategoryList />} />
          <Route path="/new-product" element={<CreateProduct />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
