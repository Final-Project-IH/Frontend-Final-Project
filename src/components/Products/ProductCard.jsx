import React, { useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import CountdownTimer from "../CountDownTimer/CountDownTimer";
// import { changeStatus } from "../../services/ProductService";
import { changeStatus } from "../../services/ProductService"
import "./ProductCard.css"
// import useInterval from "../../hooks/useInterval";

const ProductCard = ({ product, auction }) => {
  const [productData, setProductData] = useState(product);
  const [auctionData, setAuctionData] = useState(auction);
  
  const [loading, setLoading] = useState(true);

  const now = new Date();
  const endDate = new Date(productData?.end);


  const handleAuctionState = useCallback(() => {
    if (auction.status === "Available") {
      changeStatus(auctionData?._id)
        .then((auctionApi) => {
          setProductData(auctionApi.product);
          setAuctionData(auctionApi);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, []);


  useEffect(() => {
    if (endDate.getTime() < now.getTime()) {
      handleAuctionState();
    } else {
      setLoading(false);
    }
  }, []);
  
  

  if (loading) return <p>Cargando...</p>;

  return (
      <div className="card product-card d-flex flex-column align-items-center mt-3" style={{ width: "20rem" }}>
      <Link
      to={`/products/${auctionData._id}`}
      style={{ textDecoration: "none" }}
    >
      <img
        className="card-img-top"
        style={{ width: "320px", height: "350px"}}
        src={productData?.image[0]}
        alt="Card image cap"
      ></img></Link>
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title product-name">{productData?.name}</h5>
          <p>Actual Price: {auctionData.initialPrice} €</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            End Date: {dayjs(auctionData.end).format("DD/MM/YYYY HH:mm:ss")}
          </li>
        </ul>
        <div className="card-body">
          <CountdownTimer
            onEndFn={handleAuctionState}
            product={productData}
            endDate={auctionData.end}
            status={auctionData.status}
          />
        </div>
      </div>
      // </div>
  );
};

export default ProductCard;
