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
import "./ProductsByCategory.css";

const ProductsAntiques = () => {
  const [home, setHome] = useState([]);
  const [art, setArt] = useState([]);
  const [fashion, setfashion] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    categoryDetailAntiquesHome(id)
      .then((home) => {
        const Availablefilter = home.filter(
          (home) => home.status === "Available"
        );
        let homeproductSlice = Availablefilter.slice(0, 4);
        setLoading(false);
        setHome(homeproductSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    categoryDetailAntiquesArt(id)
      .then((artproduct) => {
        const Availablefilter = artproduct.filter(
          (artproduct) => artproduct.status === "Available"
        );
        let artproductSlice = Availablefilter.slice(0, 4);
        setLoading(false);
        setArt(artproductSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    categoryDetailAntiquesFashion(id)
      .then((fashionproduct) => {
        const Availablefilter = fashionproduct.filter(
          (fashionproduct) => fashionproduct.status === "Available"
        );
        let fashionproductSlice = Availablefilter.slice(0, 4);
        setLoading(false);
        setfashion(fashionproductSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <CategoryList />
      <div className="breadcrumb-div">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Antiques
          </li>
        </ol>
      </nav>
      </div>
      <div className="d-flex justify-content-center">
      <h1 className="m-3 title-cat">Antiques</h1>
      </div>
      <div>
      <hr></hr>
        <div className="d-flex justify-content-between">
          <h4 className="ml-3 title-sub">Home & Decoration</h4>
          <Link to={"home-decoration"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        {home.length > 0 ? (
          <ProductList auctions={home} />
        ) : (
          <p>Not products yet</p>
        )}
        <hr></hr>
        <div className="d-flex justify-content-between">
          <h4 className="ml-3 title-sub">Art & Frames</h4>
          <Link to={"art-frames"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        {art.length > 0 ? (
          <ProductList auctions={art} />
        ) : (
          <p className="ml-3">Not products yet</p>
        )}
        <hr></hr>
        <div className="d-flex justify-content-between">
          <h4 className="ml-3 title-sub">Fashion & Accesories</h4>
          <Link to={"fashion-accesories"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        {fashion.length > 0 ? (
          <ProductList auctions={fashion} />
        ) : (
          <p className="not-products">Not products yet...</p>
        )}
      </div>
    </div>
  );
};

export default ProductsAntiques;
