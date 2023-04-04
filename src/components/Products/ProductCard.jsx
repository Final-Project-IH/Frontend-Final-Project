import React from 'react';
import dayjs from "dayjs";

const ProductCard = ({initialPrice, product, status, start, end}) => {
    return (
        <div>
        <div className="d-flex flex-column justify-content-center">
        <p>{product.name}</p>
          <p>{initialPrice}</p>
          <p>{status}</p>
          <p>{dayjs(start).format("DD/MM/YYYY HH:mm:ss")}</p> 
          <p>{dayjs(end).format("DD/MM/YYYY HH:mm:ss")}</p> 
        </div>
      </div>
    );
};

export default ProductCard;