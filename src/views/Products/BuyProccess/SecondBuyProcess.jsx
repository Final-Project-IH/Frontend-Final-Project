import React, { useEffect, useState } from "react";
import secondStep from "../../../assets/images/second-buy.png";
import "./BuyProcces.css";
import "../../../components/Bids/BidList.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { productDetail } from "../../../services/ProductService";

const SecondBuyProcess = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const goToFinalStep = () => {
    navigate(`/products/${product.id}/winned/payment/ok`);
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
        
    <div class="container">
    <div className="d-flex justify-content-center">
    <img className="secondstep mb-5" src={secondStep} alt="*" />
    </div>
      <div class="row">
        <div class="col-lg-4 mb-lg-0 mb-3">
          <div class="card p-3">
            <div class="img-box">
              <img
                src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png"
                alt=""
              />
            </div>
            <div class="number">
              <label class="fw-bold" for="">
                **** **** **** 1060
              </label>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <small>
                <span class="fw-bold">Expiry date:</span>
                <span>10/23</span>
              </small>
              <small>
                <span class="fw-bold">Name:</span>
                <span> Daniel Olea</span>
              </small>
            </div>
          </div>
        </div>
        <div class="col-lg-4 mb-lg-0 mb-3">
          <div class="card p-3">
            <div class="img-box">
              <img
                src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
                alt=""
              />
            </div>
            <div class="number">
              <label class="fw-bold">**** **** **** 1060</label>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <small>
                <span class="fw-bold">Expiry date:</span>
                <span>10/23</span>
              </small>
              <small>
                <span class="fw-bold">Name:</span>
                <span>Daniel Olea</span>
              </small>
            </div>
          </div>
        </div>
        <div class="col-12 mt-4">
          <div class="card p-3">
            <p class="mb-0 fw-bold h4">Payment Methods</p>
          </div>
        </div>
        <div class="col-12">
          <div class="card p-3">
            <div class="card-body border p-0">
              <p>
                <a
                  class="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseExample"
                >
                  <span class="fw-bold">PayPal</span>
                  <span class="fab fa-cc-paypal"></span>
                </a>
              </p>
              <div class="collapse p-3 pt-0" id="collapseExample">
                <div class="row">
                  <div class="col-8">
                    <p class="h4 mb-0">Summary</p>
                    <p class="mb-0">
                      <span class="fw-bold">Product:</span>
                      <span class="c-green">{product.product.name}</span>
                    </p>
                    <p class="mb-0">
                      <span class="fw-bold">Price:</span>
                      <span class="c-green">{product.initialPrice} €</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body border p-0">
              <p>
                <a
                  class="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseExample"
                >
                  <span class="fw-bold">Credit Card</span>
                  <span class="">
                    <span class="fab fa-cc-amex"></span>
                    <span class="fab fa-cc-mastercard"></span>
                    <span class="fab fa-cc-discover"></span>
                  </span>
                </a>
              </p>
              <div class="collapse show p-3 pt-0" id="collapseExample">
                <div class="row">
                  <div class="col-lg-5 mb-lg-0 mb-3">
                    <p class="h4 mb-0">Summary</p>
                    <p class="mb-0">
                      <span class="fw-bold">Product: </span>
                      <span class="c-green">{product.product.name}</span>
                    </p>
                    <p class="mb-0">
                      <span class="fw-bold">Price: </span>
                      <span class="c-green">{product.initialPrice} €</span>
                    </p>
                  </div>
                  <div class="col-lg-7">
                    <form action="" class="form">
                      <div class="row">
                        <div class="col-12">
                          <div class="form__div">
                            <input
                              type="text"
                              class="form-control"
                              placeholder=" "
                            />
                            <label for="" class="form__label">
                              Card Number
                            </label>
                          </div>
                        </div>

                        <div class="col-6">
                          <div class="form__div">
                            <input
                              type="text"
                              class="form-control"
                              placeholder=" "
                            />
                            <label for="" class="form__label">
                              MM / yy
                            </label>
                          </div>
                        </div>

                        <div class="col-6">
                          <div class="form__div">
                            <input
                              type="password"
                              class="form-control"
                              placeholder=" "
                            />
                            <label for="" class="form__label">
                              cvv code
                            </label>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form__div">
                            <input
                              type="text"
                              class="form-control"
                              placeholder=" "
                            />
                            <label for="" class="form__label">
                              name on the card
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <Link to={`/products/${product.id}/winned/payment/ok`}><div class="btn btn-primary payment pay-btn">Make Payment</div></Link>
        </div>
      </div>
    </div>
    )}
    </div>
  );
};

export default SecondBuyProcess;
