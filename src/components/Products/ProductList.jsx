import React from "react";
import ProductCard from "./ProductCard";


const ProductList = ({ auctions, statusFilter }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {auctions.map((auction) => {
        if (statusFilter && auction.status === 'Closed') return null
        return (
        <div key={auction._id} className="col mb-3">
          <ProductCard product={auction.product} auction={auction} />
        </div>
      );
      })}
    </div>
  );
};


export default ProductList;
