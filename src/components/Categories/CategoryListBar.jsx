import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <div>
      <div className="row d-flex justify-content-between">
        <Link to={`/products/category/642b0e43261604ba1d7c2b97/fashion`} style={{ textDecoration: "none" }}>
        <h4>Fashion</h4>
        </Link>
        <Link to={`/products/category/642b0e43261604ba1d7c2b98/home`} style={{ textDecoration: "none" }}>
        <h4>Home</h4>
        </Link>
        <Link to={`/products/category/642b0e43261604ba1d7c2b99/art`} style={{ textDecoration: "none" }}>
        <h4>Art</h4>
        </Link>
        <Link to={`/products/category/642b0e43261604ba1d7c2b9a/antiques`} style={{ textDecoration: "none" }}>
        <h4>Antiques</h4>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
