import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  categoryDetailAntiquesArt,
  categoryDetailAntiquesFashion,
  categoryDetailAntiquesHome,
} from "../../../services/CategoriesService";
import { Link } from "react-router-dom";
import CategoryList from "../../../components/Categories/CategoryListBar";
import ProductList from "../../../components/Products/ProductList";



const ProductsAntiques = () => {
    const [home, setHome] = useState([]);
    const [art, setArt] = useState([]);
    const [fashion, setfashion] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  
    useEffect(() => {
        categoryDetailAntiquesHome(id)
        .then((home) => {
          let homeproductSlice = home.slice(0, 2);
          setLoading(false);
          setHome(homeproductSlice);
        })
        .catch((err) => console.log(err));
    }, []);
  
    useEffect(() => {
        categoryDetailAntiquesArt(id)
        .then((artproduct) => {
          let artproductSlice = artproduct.slice(0, 2);
          setLoading(false);
          setArt(artproductSlice);
        })
        .catch((err) => console.log(err));
    }, []);
  
    useEffect(() => {
        categoryDetailAntiquesFashion(id)
        .then((fashionproduct) => {
          let fashionproductSlice = fashionproduct.slice(0, 2);
          setLoading(false);
          setfashion(fashionproductSlice);
        })
        .catch((err) => console.log(err));
    }, []);
  
    return (
      <div>
        <CategoryList />
        <Link to={"/"}>
          <span>Home</span>
        </Link>
        <span> ➱</span>
        <Link to={"/products/category/642b0e43261604ba1d7c2b9a/antiques"}>
          <span>Category</span>
        </Link>
        <div>
          <div className="d-flex justify-content-between">
            <h1>Home & Decoration</h1>
            <Link to={"home-and-decoration"} style={{ textDecoration: "none" }}>
              <p>See All</p>
            </Link>
          </div>
          <ProductList auctions={home} />
          <div className="d-flex justify-content-between">
            <h1>Art & Frames</h1>
            <Link to={"art-and-frames"} style={{ textDecoration: "none" }}>
              <p>See All</p>
            </Link>
          </div>
          <ProductList auctions={art} />
          <div className="d-flex justify-content-between">
            <h1>Fashion & Accesories</h1>
            <Link to={"fashion-and-accesories"} style={{ textDecoration: "none" }}>
              <p>See All</p>
            </Link>
          </div>
          <ProductList auctions={fashion} />
        </div>
      </div>
    );
  };

export default ProductsAntiques;