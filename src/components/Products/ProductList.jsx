import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css"

const ProductList = ({ auctions, statusFilter }) => {
  return (
    <div className="row">
      {auctions?.map((auction) => {
        if (statusFilter && auction.status === 'Closed') return null
        return (
          <div className="d-flex">
        <div key={auction._id} className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 listcards">
          <ProductCard product={auction?.product} auction={auction} />
        </div>
        </div>
      );
      })}
    </div>
    
  );
};


export default ProductList;
