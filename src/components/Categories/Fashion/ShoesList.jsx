import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { categoryDetailShoes } from "../../../services/CategoriesService";
import ProductList from "../../Products/ProductList";

const ShoesList = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    categoryDetailShoes(id)
      .then((products) => {
        setLoading(false);
        setProduct(products);
      })
      .catch((err) => console.log(err));
  }, []);

  

  return (
    <div>
      {!product ? (
        <p> ... fetching product</p>
      ) : (
        <div>
        <h1>Shoes</h1>
        <ProductList products={product} />
        </div>
      )}
    </div>
  );
};

export default ShoesList;