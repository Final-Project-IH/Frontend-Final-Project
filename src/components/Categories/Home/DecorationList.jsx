import React, { useEffect, useState } from "react";
import { categoryDetailDecoration } from "../../../services/CategoriesService";
import ProductList from "../../Products/ProductList";
import { useParams } from "react-router";

const DecorationList = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    categoryDetailDecoration(id)
      .then((products) => {
        setLoading(false);
        setProduct(products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Decoration</h1>
      {!product ? (
        <p> ... fetching product</p>
      ) : (
        <ProductList products={product} />
      )}
    </div>
  );
};

export default DecorationList;
