import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const ProductCard = ({ initialPrice, product, status, start, end, _id }) => {
  return (
    <Link
      to={`/products/${_id}`}
      style={{ textDecoration: "none" }}
    >
      <div>
        <div className="d-flex flex-column justify-content-center">
          <p>{product.name}</p>
          <p>{initialPrice}</p>
          <p>{status}</p>
          <p>{dayjs(start).format("DD/MM/YYYY HH:mm:ss")}</p>
          <p>{dayjs(end).format("DD/MM/YYYY HH:mm:ss")}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
