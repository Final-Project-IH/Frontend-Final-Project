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


const ProductsHome = () => {
    const [decoration, setDecoration] = useState([]);
    const [furniture, setFurniture] = useState([]);
    const [kitchenware, setKitchenware] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  
    useEffect(() => {
        categoryDetailDecoration(id)
        .then((decoration) => {
          let decorationSlice = decoration.slice(0, 2);
          setLoading(false);
          setDecoration(decorationSlice);
        })
        .catch((err) => console.log(err));
    }, []);
  
    useEffect(() => {
        categoryDetailFurniture(id)
        .then((furniture) => {
          let furnitureSlice = furniture.slice(0, 2);
          setLoading(false);
          setFurniture(furnitureSlice);
        })
        .catch((err) => console.log(err));
    }, []);
  
    useEffect(() => {
        categoryDetailKitchenware(id)
        .then((kitchenware) => {
          let kitchenwareSlice = kitchenware.slice(0, 2);
          setLoading(false);
          setKitchenware(kitchenwareSlice);
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
        <Link to={"/products/category/642b0e43261604ba1d7c2b98/home"}>
          <span>Category</span>
        </Link>
        <div>
          <div className="d-flex justify-content-between">
            <h1>Decoration</h1>
            <Link to={"decoration"} style={{ textDecoration: "none" }}>
              <p>See All</p>
            </Link>
          </div>
          <ProductList auctions={decoration} />
          <div className="d-flex justify-content-between">
            <h1>Furniture</h1>
            <Link to={"furniture"} style={{ textDecoration: "none" }}>
              <p>See All</p>
            </Link>
          </div>
          <ProductList auctions={furniture} />
          <div className="d-flex justify-content-between">
            <h1>Kitchenware</h1>
            <Link to={"kitchenware"} style={{ textDecoration: "none" }}>
              <p>See All</p>
            </Link>
          </div>
          <ProductList auctions={kitchenware} />
        </div>
      </div>
    );
  };
  

export default ProductsHome;