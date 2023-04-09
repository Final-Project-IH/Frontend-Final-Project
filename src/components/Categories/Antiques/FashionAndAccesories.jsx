import React, { useEffect, useState } from 'react';
import { categoryDetailAntiquesFashion } from '../../../services/CategoriesService';
import ProductList from '../../Products/ProductList';
import { useParams } from 'react-router';

const FashionAndAccesories = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  
    useEffect(() => {
        categoryDetailAntiquesFashion(id)
        .then((products) => {
          setLoading(false);
          setProduct(products);
        })
        .catch((err) => console.log(err));
    }, []);
  
    return (
      <div>
         <div className="d-flex justify-content-between">
        <h1>Fashion & Accesories</h1>
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

export default FashionAndAccesories;