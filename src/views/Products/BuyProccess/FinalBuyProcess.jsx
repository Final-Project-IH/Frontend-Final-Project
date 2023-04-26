import React from "react";
import thirdStep from "../../../assets/images/third-buy.png";
import "./BuyProcces.css";
import { useNavigate } from "react-router-dom";

const FinalBuyProcess = () => {
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/users/me");
  };
  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <img className="firstep" src={thirdStep} alt="*" />
        <h1 className="mt-4">¡Congratulations!</h1>
        <h1 className="mt-4 final-advice">
          You will receive the product throughout the next week
        </h1>
        <button className="btn-check mt-5" onClick={goToProfile}>
          Go to Profile
        </button>
      </div>
    </div>
  );
};

export default FinalBuyProcess;
