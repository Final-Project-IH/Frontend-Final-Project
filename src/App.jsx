import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar/Navbar'
// import Login from './views/Auth/Login/Login'
import Home from './views/Home/Home'
import AllProducts from './views/Products/AllProducts/AllProducts'

function App() {

  return (
    <div className="App">
       <Navbar />

      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="products" element={<AllProducts />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
