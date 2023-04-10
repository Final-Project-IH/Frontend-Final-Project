import React, { useEffect, useState } from "react";
// import { categoryDetailAccesories } from "../../../services/CategoriesService";
// import ProductList from "../../Products/ProductList";
// import { useParams } from "react-router";
import ProductCard from "../../Products/ProductCard";
import CountdownTimer from "../../CountDownTimer/CountDownTimer";

const AccesoriesList = ({ accesories }) => {
  // const [product, setProduct] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const { id } = useParams();

  // useEffect(() => {
  //   categoryDetailAccesories(id)
  //     .then((products) => {
  //       setLoading(false);
  //       setProduct(products);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    // <div>
    //   <div className="d-flex justify-content-between">
    //     <h1>Accesories</h1>
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
        <h1>Accesories</h1>
        <p>See All</p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {accesories.map((accesories) => (
          <div key={accesories._id} className="col mb-3">
            <ProductCard {...accesories} />
            <CountdownTimer endDate={accesories.end} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccesoriesList;
