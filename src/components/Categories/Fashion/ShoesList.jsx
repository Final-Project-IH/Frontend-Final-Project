import React, { useEffect, useState } from "react";
import ProductCard from "../../Products/ProductCard";
import CountdownTimer from "../../CountDownTimer/CountDownTimer";
// import { useParams } from "react-router";
// import { categoryDetailShoes } from "../../../services/CategoriesService";
// import ProductList from "../../Products/ProductList";

const ShoesList = ({ shoes }) => {
  // const [product, setProduct] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const { id } = useParams();

  // useEffect(() => {
  //   categoryDetailShoes(id)
  //     .then((products) => {
  //       setLoading(false);
  //       setProduct(products);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    //   <div>
    //   <div className="d-flex justify-content-between">
    //     <h1>Shoes</h1>
    //     <p>See All</p>
    //   </div>
    //   {!product ? (
    //     <p> ... fetching product</p>
    //   ) : (
    //     <ProductList products={product} />
    //   )}
    // </div>
    <div>
      <div className="d-flex justify-content-between">
        <h1>Shoes</h1>
        <p>See All</p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {shoes.map((shoes) => (
          <div key={shoes._id} className="col mb-3">
            <ProductCard {...shoes} />
            <CountdownTimer endDate={shoes.end} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoesList;
