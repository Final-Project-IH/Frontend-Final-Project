import React from "react";
import Favorite from "../misc/Favorite/Favorite";

const ProductDetailed = ({ product }) => {
  return (
    <div>
      <h1>{product.product.name}</h1>
      <h5>{product.product.shortDescription}</h5>
      <p>{product.product.description}</p>
      <p>{product.product.state}</p>
      <h1>Actual Price: {product.initialPrice}</h1>
      <Favorite />
    </div>
  );
};

export default ProductDetailed;
