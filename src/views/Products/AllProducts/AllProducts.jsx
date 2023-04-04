import React, { useEffect, useState } from "react";
import { listProduct } from "../../../services/ProductService";
import ProductList from "../../../components/Products/ProductList";

const AllProducts = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listProduct().then((products) => {
      setLoading(false);
      setProducts(products);
    })
    .catch((err) => console.log(err));
  }, []);

  const renderProducts = () => {
    if (loading) {
      return <p>Loading...</p>;
    }
    return <ProductList products={products}/>;
  };
  return <div>{renderProducts()}</div>;
};

export default AllProducts;
