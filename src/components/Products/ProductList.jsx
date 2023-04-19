import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css"

const ProductList = ({ auctions, statusFilter }) => {
  return (
    <div className="row justify-content-start ml-5">
      {auctions?.map((auction) => {
        if (statusFilter && auction.status === 'Closed') return null
        return (
        
        <div key={auction._id} className="col-xl-3 col-lg-5 col-md-5 col-sm-12 col-xs-12 m-0 p-0">
          <ProductCard product={auction.product} auction={auction} />
        </div>
      );
      })}
    </div>
  );
};


export default ProductList;
