import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./views/Auth/Login/Login";
import Register from "./views/Auth/Register/Register";
import Home from "./views/Home/Home";
import AllProducts from "./views/Products/AllProducts/AllProducts";
import ProductDetail from "./views/Products/ProductDetail/ProductDetail";
import CategoryList from "./components/Categories/CategoryListBar";
import ProductsFashion from "./views/Products/ProductsByCategory/ProductsFashion";
// import ProductsHome from "./views/Products/ProductsByCategory/productsHome"
// import ProductsArt from "./views/Products/ProductsByCategory/ProductsArt"
// import ProductsAntiques from "./views/Products/ProductsByCategory/ProductsAntiques"
import ClothesAll from "./views/Products/ProductsBySubcategory/Fashion/Clothes/ClothesAll";
import ClothesInitialPage from "./views/Products/ProductsBySubcategory/Fashion/Clothes/ClothesInitialPage";
import CreateProduct from "./views/Products/CreateProduct/CreateProduct";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AuthContext from "./contexts/Auth.context";
import AccesoriesInitialPage from "./views/Products/ProductsBySubcategory/Fashion/Accesories/AccesoriesInitialPage";
import AccesoriesAll from "./views/Products/ProductsBySubcategory/Fashion/Accesories/AccesoriesAll";
import ProductsAntiques from "./views/Products/ProductsByCategory/ProductsAntiques";
import ShoesInitialPage from "./views/Products/ProductsBySubcategory/Fashion/Shoes/ShoesInitialPage";
import ShoesAll from "./views/Products/ProductsBySubcategory/Fashion/Shoes/ShoesAll";
import ProductsHome from "./views/Products/ProductsByCategory/ProductsHome";

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

          <Route
            path="products/category/:id/fashion"
            element={<ProductsFashion />}
          />
          <Route
            path="products/category/:id/fashion/clothes"
            element={<ClothesInitialPage />}
          />
          <Route
            path="products/category/:id/fashion/clothes/browse-products"
            element={<ClothesAll />}
          />
          <Route
            path="products/category/:id/fashion/accesories"
            element={<AccesoriesInitialPage />}
          />
          <Route
            path="products/category/:id/fashion/accesories/browse-products"
            element={<AccesoriesAll />}
          />
          <Route
            path="products/category/:id/fashion/shoes"
            element={<ShoesInitialPage />}
          />
          <Route
            path="products/category/:id/fashion/shoes/browse-products"
            element={<ShoesAll />}
          />
          <Route path="products/category/:id/home" element={<ProductsHome />} />
          {/* <Route path="products/category/:id/home" element={<ProductsHome />} />
          <Route path="products/category/:id/art" element={<ProductsArt />} />
           */}
          <Route
            path="products/category/:id/antiques"
            element={<ProductsAntiques />}
          />
          {/* <Route path="products/category/:id/antiques" element={<ProductsAntiques />} /> */}

          <Route path="products/category" element={<CategoryList />} />

          <Route
            path="new-product"
            element={
              <ProtectedRoute>
                <CreateProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="users/me"
            element={
              <ProtectedRoute>
                <CreateProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="users/me/favorites"
            element={
              <ProtectedRoute>
                <CreateProduct />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
