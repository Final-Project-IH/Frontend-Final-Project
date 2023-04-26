import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  categoryDetailDecoration,
  categoryDetailFurniture,
  categoryDetailKitchenware,
} from "../../../services/CategoriesService";
import { Link } from "react-router-dom";
import CategoryList from "../../../components/Categories/CategoryListBar";
import ProductList from "../../../components/Products/ProductList";
import "./ProductsByCategory.css";

const ProductsHome = () => {
  const [decoration, setDecoration] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [kitchenware, setKitchenware] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    categoryDetailDecoration(id)
      .then((decoration) => {
        const Availablefilter = decoration.filter(
          (decoration) => decoration.status === "Available"
        );
        let decorationSlice = Availablefilter.slice(0, 4);
        setLoading(false);
        setDecoration(decorationSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    categoryDetailFurniture(id)
      .then((furniture) => {
        const Availablefilter = furniture.filter(
          (furniture) => furniture.status === "Available"
        );
        let furnitureSlice = Availablefilter.slice(0, 4);
        setLoading(false);
        setFurniture(furnitureSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    categoryDetailKitchenware(id)
      .then((kitchenware) => {
        const Availablefilter = kitchenware.filter(
          (kitchenware) => kitchenware.status === "Available"
        );
        let kitchenwareSlice = Availablefilter.slice(0, 4);
        setLoading(false);
        setKitchenware(kitchenwareSlice);
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
              Home
            </li>
          </ol>
        </nav>
      </div>
      <div className="d-flex justify-content-center">
        <h1 className="m-3 title-cat">Home</h1>
      </div>
      <div>
        <hr></hr>
        <div className="d-flex justify-content-between">
          <h4 className="ml-3 title-sub">Decoration</h4>
          <Link to={"decoration"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        {decoration.length > 0 ? (
          <ProductList auctions={decoration} />
        ) : (
          <p>Not products yet</p>
        )}
        <hr></hr>
        <div className="d-flex justify-content-between">
          <h4 className="ml-3 title-sub">Furniture</h4>
          <Link to={"furniture"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        {furniture.length > 0 ? (
          <ProductList auctions={furniture} />
        ) : (
          <p>Not products yet</p>
        )}
        <hr></hr>
        <div className="d-flex justify-content-between">
          <h4 className="ml-3 title-sub">Kitchenware</h4>
          <Link to={"kitchenware"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        {kitchenware.length > 0 ? (
          <ProductList auctions={kitchenware} />
        ) : (
          <p className="not-products">Not products yet...</p>
        )}
      </div>
    </div>
  );
};

export default ProductsHome;
