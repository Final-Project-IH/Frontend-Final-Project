import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { categoryFashion } from "../../../services/CategoriesService";
import ProductList from "../../../components/Products/ProductList";
import ClothesList from "../../../components/Categories/Fashion/ClothesList";
import AccesoriesList from "../../../components/Categories/Fashion/AccesoriesList";
import ShoesList from "../../../components/Categories/Fashion/ShoesList";


const ProductsFashion = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    categoryFashion(id)
      .then((products) => {
        setLoading(false);
        setProduct(products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {!product ? <p> ... fetching product</p> :<ProductList products={product} />}
      <ClothesList />
      <AccesoriesList />
      <ShoesList />
      
    </div>
  );
};

export default ProductsFashion;
