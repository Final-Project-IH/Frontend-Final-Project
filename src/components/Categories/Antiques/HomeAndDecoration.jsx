import React, { useEffect, useState } from 'react';
import { categoryDetailAntiquesHome} from '../../../services/CategoriesService';
import ProductList from '../../Products/ProductList';
import { useParams } from 'react-router';

const HomeAndDecoration = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  
    useEffect(() => {
        categoryDetailAntiquesHome(id)
        .then((products) => {
          setLoading(false);
          setProduct(products);
        })
        .catch((err) => console.log(err));
    }, []);
  
    return (
      <div>
        <h1>Home & Decoration</h1>
        {!product ? (
          <p> ... fetching product</p>
        ) : (
          <ProductList products={product} />
        )}
      </div>
    );
};

export default HomeAndDecoration;