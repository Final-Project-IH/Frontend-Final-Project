import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { categoryHome } from "../../../services/CategoriesService";
import ProductList from "../../../components/Products/ProductList";
import DecorationList from "../../../components/Categories/Home/DecorationList";
import FurnitureList from "../../../components/Categories/Home/FurnitureList";
import KitchenwareList from "../../../components/Categories/Home/KitchenwareList";


const ProductsHome = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    categoryHome(id)
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
        <ProductList products={product} />
      )}
      <DecorationList />
      <FurnitureList />
      <KitchenwareList />

    </div>
  );
};

export default ProductsHome;
