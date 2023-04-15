import React, { useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import CountdownTimer from "../CountDownTimer/CountDownTimer";
import { changeStatus } from "../../services/ProductService";

const ProductCard = ({ product, auction }) => {
  const [productData, setProductData] = useState(product);
  const [auctionData, setAuctionData] = useState(auction);

  const [loading, setLoading] = useState(true);

  const now = new Date();
  const endDate = new Date(productData.endDate);

  const handleAuctionState = useCallback(() => {
    if (auction.status === "Available") {
      console.log('entro')
      changeStatus(auctionData._id)
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
    <Link
      to={`/products/${auctionData._id}`}
      style={{ textDecoration: "none" }}
    >
      <div>
        <div className="d-flex flex-column justify-content-center">
          <p>{productData.name}</p>
          <p>{auctionData.initialPrice}</p>
          <p>{auctionData.status}</p>
          <p>{dayjs(auctionData.start).format("DD/MM/YYYY HH:mm:ss")}</p>
          <p>{dayjs(auctionData.end).format("DD/MM/YYYY HH:mm:ss")}</p>
        </div>
        <CountdownTimer
          onEndFn={handleAuctionState}
          product={productData}
          endDate={auctionData.end}
          status={auctionData.status}
        />
      </div>
    </Link>
  );
};

export default ProductCard;

