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
import "./ProductDetailview.css";
import BidslistOwner from "../../../components/Bids/BidListOwner";
import ReactModal from 'react-modal';



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
      .then((responseData) => {
        if (responseData.removed) {
          manageFavorites(responseData.favorite, true);
        } else {
          manageFavorites(responseData.favorite);
        }
        fetchProductDetail();
      })
      .catch((err) => console.log(err));
  }, [currentUser]);

  useInterval(fetchProductDetail, 50000); //CAMBIAR A 5000(5SEC)llama a la Api cada 5 segundos para ver si hay cambios en la puja



  useEffect(() => {
    fetchProductDetail();
  }, []);

  if (!product) {
    return <p> ... fetching product</p>;
  }

  return (
    <div className="detail d-flex d-flex justify-content-between row">
      <div className="product-detail col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
        <ProductDetailed
          product={product}
          updateFavorites={updateFavorites}
        />
      </div>
      {currentUser?.id !== product.owner ? (
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12" style={{ height: "550px" }}>
          <Bidslist id={id} bids={product.bids} product={product} currentUser={currentUser}/>
        </div>
      ) : (
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12" style={{ height: "550px" }}>
          <BidslistOwner id={id} bids={product.bids} product={product} currentUser={currentUser}/>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
