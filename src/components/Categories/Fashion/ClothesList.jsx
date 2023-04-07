import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { categoryDetailClothes } from "../../../services/CategoriesService";
import ProductList from "../../Products/ProductList";

const ClothesList = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    categoryDetailClothes(id)
      .then((products) => {
        setLoading(false);
        setProduct(products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Clothes</h1>
      {!product ? (
        <p> ... fetching product</p>
      ) : (
        <ProductList products={product} />
      )}
    </div>
  );
};

export default ClothesList;
