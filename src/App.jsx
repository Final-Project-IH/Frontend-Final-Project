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
import ClothesAll from "./views/Products/ProductsBySubcategory/Fashion/Clothes/ClothesAll";
import ClothesInitialPage from "./views/Products/ProductsBySubcategory/Fashion/Clothes/ClothesInitialPage";
import CreateProduct from "./views/Products/CreateProduct/CreateProduct";
//import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AuthContext from "./contexts/Auth.context";
import AccesoriesInitialPage from "./views/Products/ProductsBySubcategory/Fashion/Accesories/AccesoriesInitialPage";
import AccesoriesAll from "./views/Products/ProductsBySubcategory/Fashion/Accesories/AccesoriesAll";
import ProductsAntiques from "./views/Products/ProductsByCategory/ProductsAntiques";
import ShoesInitialPage from "./views/Products/ProductsBySubcategory/Fashion/Shoes/ShoesInitialPage";
import ShoesAll from "./views/Products/ProductsBySubcategory/Fashion/Shoes/ShoesAll";
import ProductsHome from "./views/Products/ProductsByCategory/ProductsHome";
import CategoryListBar from "./components/Categories/CategoryListBar";
import ProfileDetail from "./views/Profile/ProfileDetail/ProfileDetail";
import EditProfile from "./views/Profile/EditProfile/EditProfile";
import DecorationInitialPage from "./views/Products/ProductsBySubcategory/Home/Decoration/DecorationInitialPage";
import DecorationAll from "./views/Products/ProductsBySubcategory/Home/Decoration/DecorationAll";
import FurnitureAll from "./views/Products/ProductsBySubcategory/Home/Furniture/FurnitureAll";
import FurnitureInitialPage from "./views/Products/ProductsBySubcategory/Home/Furniture/FurnitureInitialPage";
import KitchenwareAll from "./views/Products/ProductsBySubcategory/Home/Kitchenware/KitchenwareAll";
import KitchenwareInitialPage from "./views/Products/ProductsBySubcategory/Home/Kitchenware/KitchenwareInitialPage";
import HomeAndDecorationAll from "./views/Products/ProductsBySubcategory/Antiques/Home & Decoration/HomeAndDecorationAll";
import HomeAndDecorationInitialPage from "./views/Products/ProductsBySubcategory/Antiques/Home & Decoration/HomeAndDecorationInitialPage";
import ArtAndFramesAll from "./views/Products/ProductsBySubcategory/Antiques/Art & Frames/ArtAndFramesAll";
import ArtAndFramesInitialPage from "./views/Products/ProductsBySubcategory/Antiques/Art & Frames/ArtAndFramesInitialPage";
import FashionAndAccesoriesAll from "./views/Products/ProductsBySubcategory/Antiques/Fashion & Accesories/FashionAndAccesoriesAll";
import FashionAndAccesoriesInitialPage from "./views/Products/ProductsBySubcategory/Antiques/Fashion & Accesories/FashionAndAccesoriesInitialPage";
import ProductsArt from "./views/Products/ProductsByCategory/ProductsArt";
import PrintsAll from "./views/Products/ProductsBySubcategory/Art/Prints/PrintsAll";
import PrintsInitialPage from "./views/Products/ProductsBySubcategory/Art/Prints/PrintsInitialPage";
import PhotographyInitialPage from "./views/Products/ProductsBySubcategory/Art/Photography/PhotographyInitialPage";
import PhotographyAll from "./views/Products/ProductsBySubcategory/Art/Photography/PhotographyAll";
import FramesAll from "./views/Products/ProductsBySubcategory/Art/Frames/FramesAll";
import FramesInitialPage from "./views/Products/ProductsBySubcategory/Art/Frames/FramesInitialPage";
import BooksInitialPage from "./views/Products/ProductsBySubcategory/Art/Books/BooksInitialPage";
import BooksAll from "./views/Products/ProductsBySubcategory/Art/Books/BooksAll";
import MusicAll from "./views/Products/ProductsBySubcategory/Art/Music/MusicAll";
import MusicInitialPage from "./views/Products/ProductsBySubcategory/Art/Music/MusicInitialPage";
import FirstBuyProcess from "./views/Products/BuyProccess/FirstBuyProcess";
import SecondBuyProcess from "./views/Products/BuyProccess/SecondBuyProcess";
import FinalBuyProcess from "./views/Products/BuyProccess/FinalBuyProcess";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="routes my-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="products/:id" element={<ProductDetail />} />

          {/*FASHION*/}
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

          {/* HOME */}

          <Route path="products/category/:id/home" element={<ProductsHome />} />
          <Route
            path="products/category/:id/home/decoration"
            element={<DecorationInitialPage />}
          />
          <Route
            path="products/category/:id/home/decoration/browse-products"
            element={<DecorationAll />}
          />
          <Route
            path="products/category/:id/home/furniture"
            element={<FurnitureInitialPage />}
          />
          <Route
            path="products/category/:id/home/furniture/browse-products"
            element={<FurnitureAll />}
          />
          <Route
            path="products/category/:id/home/kitchenware"
            element={<KitchenwareInitialPage />}
          />
          <Route
            path="products/category/:id/home/kitchenware/browse-products"
            element={<KitchenwareAll />}
          />
          {/* ANTIQUES */}
          <Route
            path="products/category/:id/antiques"
            element={<ProductsAntiques />}
          />
          <Route
            path="products/category/:id/antiques/home-decoration"
            element={<HomeAndDecorationInitialPage />}
          />
          <Route
            path="products/category/:id/antiques/home-decoration/browse-products"
            element={<HomeAndDecorationAll />}
          />
          <Route
            path="products/category/:id/antiques/art-frames"
            element={<ArtAndFramesInitialPage />}
          />
          <Route
            path="products/category/:id/antiques/art-frames/browse-products"
            element={<ArtAndFramesAll />}
          />
          <Route
            path="products/category/:id/antiques/fashion-accesories"
            element={<FashionAndAccesoriesInitialPage />}
          />
          <Route
            path="products/category/:id/antiques/fashion-accesories/browse-products"
            element={<FashionAndAccesoriesAll />}
          />
          {/* ART */}
          <Route path="products/category/:id/art" element={<ProductsArt />} />
          <Route
            path="products/category/:id/art/prints"
            element={<PrintsInitialPage />}
          />
          <Route
            path="products/category/:id/art/prints/browse-products"
            element={<PrintsAll />}
          />
          <Route
            path="products/category/:id/art/photography"
            element={<PhotographyInitialPage />}
          />
          <Route
            path="products/category/:id/art/photography/browse-products"
            element={<PhotographyAll />}
          />
          <Route
            path="products/category/:id/art/frames"
            element={<FramesInitialPage />}
          />
          <Route
            path="products/category/:id/art/frames/browse-products"
            element={<FramesAll />}
          />
          <Route
            path="products/category/:id/art/books"
            element={<BooksInitialPage />}
          />
          <Route
            path="products/category/:id/art/books/browse-products"
            element={<BooksAll />}
          />
          <Route
            path="products/category/:id/art/music"
            element={<MusicInitialPage />}
          />
          <Route
            path="products/category/:id/art/music/browse-products"
            element={<MusicAll />}
          />

          <Route path="products/category" element={<CategoryListBar />} />
          <Route path="/new-product" element={<CreateProduct />} />
          <Route path="/users/me" element={<ProfileDetail />} />
          <Route path="/users/me/edit-profile" element={<EditProfile />} />
          <Route path="products/:id/winned" element={<FirstBuyProcess />} />
          <Route path="products/:id/winned/payment" element={<SecondBuyProcess />} />
          <Route path="products/:id/winned/payment/ok" element={<FinalBuyProcess />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
