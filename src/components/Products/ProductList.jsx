import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {products.map((product) => (
        <div key={product._id} className="col mb-3">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
};


export default ProductList;
