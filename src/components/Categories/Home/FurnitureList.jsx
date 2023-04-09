import React, { useEffect, useState } from "react";
import { categoryDetailFurniture } from "../../../services/CategoriesService";
import ProductList from "../../Products/ProductList";
import { useParams } from "react-router";

const FurnitureList = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    categoryDetailFurniture(id)
      .then((products) => {
        setLoading(false);
        setProduct(products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
       <div className="d-flex justify-content-between">
        <h1>Furniture</h1>
        <p>See All</p>
      </div>
      {!product ? (
        <p> ... fetching product</p>
      ) : (
        <ProductList products={product} />
      )}
    </div>
  );
};

export default FurnitureList;
