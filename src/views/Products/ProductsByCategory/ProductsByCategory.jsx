import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { categoryDetail } from "../../../services/CategoriesService";
import ProductList from "../../../components/Products/ProductList";
// import ClothesList from "../../../components/Categories/Fashion/ClothesList";
// import AccesoriesList from "../../../components/Categories/Fashion/AccesoriesList";

const ProductsByCategory = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    categoryDetail(id)
      .then((products) => {
        setLoading(false);
        setProduct(products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {!product ? <p> ... fetching product</p> :<ProductList products={product} />}
    </div>
  );
};

export default ProductsByCategory;
