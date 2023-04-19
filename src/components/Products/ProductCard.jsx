import React, { useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import CountdownTimer from "../CountDownTimer/CountDownTimer";
import { changeStatus } from "../../services/ProductService";
import "./ProductCard.css"

const ProductCard = ({ product, auction }) => {
  const [productData, setProductData] = useState(product);
  const [auctionData, setAuctionData] = useState(auction);
  
  const [loading, setLoading] = useState(true);

  const now = new Date();
  const endDate = new Date(productData?.endDate);

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
      // <div className="row">
      <div className="card d-flex flex-column justify-content-center align-items-center m-2" style={{ width: "20rem" }}>
      <Link
      to={`/products/${auctionData._id}`}
      style={{ textDecoration: "none" }}
    >
      <img
        className="card-img-top p-3"
        style={{ width: "300px", height: "350px"}}
        src={productData?.image[0]}
        alt="Card image cap"
      ></img></Link>
        <div className="card-body">
          <h5 className="card-title">{productData?.name}</h5>
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
