import React, { useEffect, useState } from "react";
import step from "../../../assets/images/firststep.png";
import "./BuyProcces.css";
import { useParams } from "react-router-dom";
import { productDetail } from "../../../services/ProductService";
import "../../../components/Bids/BidList.css";
import { useNavigate } from "react-router-dom";

const FirstBuyProcess = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const goToSecondStep = () => {
    navigate(`/products/${product.id}/winned/payment`);
  };

  useEffect(() => {
    productDetail(id)
      .then((product) => {
        setLoading(false);
        setProduct(product);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <div className="d-flex flex-column align-items-center">
            <img className="firstep" src={step} alt="*" />
            <h1 className="mt-4">
              Congratulations! Your bid was the winner for:
            </h1>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <img className="image-winned-product"src={product?.product?.image} style={{ width: "400px" }} />
            <div className="d-flex flex-column align-items-center mt-4 item-desc">
              <h4 className="ml-5 name-winned-product">{product?.product?.name}</h4>
              <h4 className="ml-5 short-desc-winned-product">{product?.product?.shortDescription}</h4>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <h1 className="mt-5 continue">Continue with the payment process</h1>
            <button className="btn-check mt-5" onClick={goToSecondStep}>
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstBuyProcess;
