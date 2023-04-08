import React, { useEffect, useState } from 'react';
import { categoryDetailPhotography } from '../../../services/CategoriesService';
import ProductList from '../../Products/ProductList';
import { useParams } from 'react-router';

const PhotographyList = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  
    useEffect(() => {
        categoryDetailPhotography(id)
        .then((products) => {
          setLoading(false);
          setProduct(products);
        })
        .catch((err) => console.log(err));
    }, []);
  
    return (
      <div>
        <h1>Photography</h1>
        {!product ? (
          <p> ... fetching product</p>
        ) : (
          <ProductList products={product} />
        )}
      </div>
    );
};

export default PhotographyList;