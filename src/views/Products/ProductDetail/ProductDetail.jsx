import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productDetail } from "../../../services/ProductService";
import Bidslist from "../../../components/Bids/Bidslist";
import ProductDetailed from "../../../components/Products/ProductDetail";
import useInterval from "../../../hooks/useInterval";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const fetchProductDetail = useCallback(() => {
    productDetail(id)
      .then((product) => setProduct(product))
      .catch((err) => console.log(err));
  }, []);

  useInterval(fetchProductDetail, 100000); //CAMBIAR A 5000(5SEC)llama a la Api cada 5 segundos para ver si hay cambios en la puja

  useEffect(() => {
    fetchProductDetail();
  }, []);

  if (!product) {
    return <p> ... fetching product</p>;
  }

  return (
    <div className="d-flex justify-content-between">
      <div className="card">
        <ProductDetailed product={product} />
      </div>
      <div className="card">
        <Bidslist bids={product.bids} product={product} />
      </div>
    </div>
  );
};

export default ProductDetail;
