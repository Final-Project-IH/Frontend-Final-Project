import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { categoryDetailClothes } from "../../../services/CategoriesService";
import ProductCard from "../../Products/ProductCard";
import CountdownTimer from "../../CountDownTimer/CountDownTimer";


const ClothesList = ({clothes}) => {
  // const [product, setProduct] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const { id } = useParams();

  // useEffect(() => {
  //   categoryDetailClothes(id)
  //     .then((products) => {
  //       setLoading(false);
  //       setProduct(products);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
 

  return (
    // <div>
    //   <div className="d-flex justify-content-between">
    //     <h1>Clothes</h1>
    //     <p>See All</p>
    //   </div>
    //   {!product ? (
    //     <p> ... fetching product</p>
    //   ) : (
    //     <ProductList products={product} />
    //   )}
    // </div>
<div>
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {clothes.map((clothes) => (
        <div key={clothes._id} className="col mb-3">
          <ProductCard {...clothes} />
          <CountdownTimer endDate={clothes.end}/>
        </div>
      ))}
    </div>   
    </div>
  );
};

export default ClothesList;
