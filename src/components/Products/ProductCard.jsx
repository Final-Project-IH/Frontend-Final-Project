import React, { useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
  // const [productAPI, setProduct] = useState(product);
  // const now = new Date();
  // if(product.end )
  return (
    <Link
      to={`/products/${product._id}`}
      style={{ textDecoration: "none" }}
    >
      <div>
        <div className="d-flex flex-column justify-content-center">
          <p>{product.name}</p>
          <p>{product.initialPrice}</p>
          <p>{product.status}</p>
          <p>{dayjs(product.start).format("DD/MM/YYYY HH:mm:ss")}</p>
          <p>{dayjs(product.end).format("DD/MM/YYYY HH:mm:ss")}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;


// if ( si ya noesta disponible) {
//   hago una peticion para desactivar el Product
//   cuando devuelva el prducto actualizado setProduct(de ese nuevo producto)
//   setLoading(false)

// } else {
//   setLoading(false)
// }
// })

// if (loading) return <p>loading....</p>
