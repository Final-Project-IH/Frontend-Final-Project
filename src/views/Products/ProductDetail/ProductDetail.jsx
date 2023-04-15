import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  productDetail,
  updateFavorite,
} from "../../../services/ProductService";
import Bidslist from "../../../components/Bids/Bidslist";
import ProductDetailed from "../../../components/Products/ProductDetail";
import useInterval from "../../../hooks/useInterval";
import AuthContext from "../../../contexts/Auth.context";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
 

  const { manageFavorites, currentUser } = useContext(AuthContext);

  const fetchProductDetail = useCallback(() => {
    productDetail(id)
      .then((product) => setProduct(product))
      .catch((err) => console.log(err));
  }, []);

  const updateFavorites = useCallback(() => {
    updateFavorite(id)
      .then((favorite) => {
        manageFavorites(favorite, currentUser);
        fetchProductDetail()
      })
      .catch((err) => console.log(err));
  }, [currentUser]);

  useInterval(fetchProductDetail, 50000); //CAMBIAR A 5000(5SEC)llama a la Api cada 5 segundos para ver si hay cambios en la puja
 
console.log("product", product)

  useEffect(() => {
    fetchProductDetail();
  }, []);

  if (!product) {
    return <p> ... fetching product</p>;
  }

  return (
    <div className="d-flex justify-content-between">
      <div className="card">
        <ProductDetailed product={product} updateFavorites={updateFavorites} currentUser={currentUser}/>
      </div>
      <div className="card">
        <Bidslist id={id} bids={product.bids} product={product} />
      </div>
    </div>
  );
};

export default ProductDetail;
