import React, { useEffect, useState } from 'react';
import { categoryDetailAntiquesArt} from '../../../services/CategoriesService';
import ProductList from '../../Products/ProductList';
import { useParams } from 'react-router';

const ArtAndFrames = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  
    useEffect(() => {
        categoryDetailAntiquesArt(id)
        .then((products) => {
          setLoading(false);
          setProduct(products);
        })
        .catch((err) => console.log(err));
    }, []);
  
    return (
      <div>
        <h1>Art & Frames</h1>
        {!product ? (
          <p> ... fetching product</p>
        ) : (
          <ProductList products={product} />
        )}
      </div>
    );
};

export default ArtAndFrames;