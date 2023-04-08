import React, { useEffect, useState } from 'react';
import { categoryDetailPrints } from '../../../services/CategoriesService';
import ProductList from '../../Products/ProductList';
import { useParams } from 'react-router';


const PrintsList = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  
    useEffect(() => {
        categoryDetailPrints(id)
        .then((products) => {
          setLoading(false);
          setProduct(products);
        })
        .catch((err) => console.log(err));
    }, []);
  
    return (
      <div>
        <h1>Prints</h1>
        {!product ? (
          <p> ... fetching product</p>
        ) : (
          <ProductList products={product} />
        )}
      </div>
    );
};

export default PrintsList;