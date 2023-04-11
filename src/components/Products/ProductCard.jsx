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

// const [productAPI, setProduct] = useState(product);
//   const [loading, setLoading] = useState(true);

//   //poner un estado loading primero para que no se monte antes
//   const now = new Date();
//   const endDate = new Date(product.endDate);
// useEffect(() => {
//   if (endDate.getTime() < now.getTime()) {
//     changeStatus(auctionID)
//     .then((auction) => {
//       setProduct(auction.product);
//       setLoading(false)
//       .catch((err) => console.log(err));
//     });
//   } else {
//     setLoading(false);
//   }
// }, []);

// return (
//   <Link
//     to={`/products/${productAPI.auctionID}`}
//     style={{ textDecoration: "none" }}
//   >
//     <div>
//       <div className="d-flex flex-column justify-content-center">
//         <p>{productAPI.name}</p>
//         <p>{productAPI.initialPrice}</p>
//         <p>{productAPI.status}</p>
//         <p>{dayjs(productAPI.startDate).format("DD/MM/YYYY HH:mm:ss")}</p>
//         <p>{dayjs(productAPI.endDate).format("DD/MM/YYYY HH:mm:ss")}</p>
//       </div>
//       <CountdownTimer endDate={productAPI.endDate} />
//     </div>
//   </Link>
// );
// };

// export default ProductCard;
