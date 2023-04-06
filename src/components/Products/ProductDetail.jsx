import React from "react";

const ProductDetailed = ({ product }) => {
  return (
    <div>
      <h1>{product.product.name}</h1>
      <h5>{product.product.shortDescription}</h5>
      <p>{product.product.description}</p>
      <p>{product.product.state}</p>
      <h1>{product.initialPrice}</h1>
    </div>
  );
};

export default ProductDetailed;
