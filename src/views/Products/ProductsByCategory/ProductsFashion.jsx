import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  categoryDetailAccesories,
  categoryDetailClothes,
  categoryDetailShoes,
} from "../../../services/CategoriesService";
import { Link } from "react-router-dom";
import CategoryList from "../../../components/Categories/CategoryListBar";
import ProductList from "../../../components/Products/ProductList";
import "./ProductsByCategory.css";

const ProductsFashion = () => {
  const [clothes, SetClothes] = useState([]);
  const [accesories, SetAccesories] = useState([]);
  const [shoes, SetShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    categoryDetailClothes(id)
      .then((clothes) => {
        const Availablefilter = clothes.filter(
          (clothes) => clothes.status === "Available"
        );
        let clothesSlice = Availablefilter.slice(0, 4);
        setLoading(false);
        SetClothes(clothesSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    categoryDetailAccesories(id)
      .then((accesories) => {
        const Availablefilter = accesories.filter(
          (accesories) => accesories.status === "Available"
        );
        let accesoriesSlice = Availablefilter.slice(0, 4);
        setLoading(false);
        SetAccesories(accesoriesSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    categoryDetailShoes(id)
      .then((shoes) => {
        const Availablefilter = shoes.filter(
          (shoes) => shoes.status === "Available"
        );
        let shoesSlice = Availablefilter.slice(0, 4);
        setLoading(false);
        SetShoes(shoesSlice);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
      <CategoryList />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Fashion
          </li>
        </ol>
      </nav>
      <div className="d-flex justify-content-center">
      <h1 className="m-3 title-cat">Fashion</h1>
      </div>
      <div>
      <hr></hr>
        <div className="d-flex justify-content-between">
          <h4 className="ml-3 title-sub">Clothes</h4>
          <Link to={"clothes"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        <ProductList auctions={clothes} />
        <hr></hr>
        <div className="d-flex justify-content-between">
          <h4 className="ml-3 title-sub">Accesories</h4>
          <Link to={"accesories"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        {accesories.length > 0 ? (
          <ProductList auctions={accesories} />
        ) : (
          <p>Not products yet</p>
        )}
        <hr></hr>
        <div className="d-flex justify-content-between">
          <h4 className="ml-3 title-sub">Shoes</h4>
          <Link to={"shoes"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        {shoes.length > 0 ? (
          <ProductList auctions={shoes} />
        ) : (
          <p className="not-products">Not products yet...</p>
        )}
      </div>
    </div>
  );
};

export default ProductsFashion;
