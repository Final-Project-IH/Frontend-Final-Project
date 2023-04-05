
import { Route, Routes } from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Login from './views/Auth/Login/Login'
import Register from './views/Auth/Register/Register'
import Home from './views/Home/Home'


function App() {

  return (
    <div className="App">
       <Navbar />

      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
