import React from "react";
import CountdownTimer from "../CountDownTimer/CountDownTimer";
import "./BidListOwner.css";
import { useNavigate } from "react-router-dom";

const BidslistOwner = ({ bids, product, id, currentUser }) => {
  const sortedBids = bids.sort((a, b) => b.offer - a.offer);
  const lastBids = sortedBids.slice(0, 4);
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("/users/me");
  };

  return (
    <div className="m-5">
      {product.status === "Available" ? (
        <div>
          <div>
            <p className="countdowntimer">
              Ends in: <CountdownTimer endDate={product.end} />
            </p>
          </div>
          <div className="card">
            <h4 className="m-3 auction-status">Check your Auction Status</h4>
            <p className="m-3 last-bid">Last Bid: </p>
            <div>
              <h4 className="ml-3 last-bid last-bid-price">
                {product.initialPrice}€
              </h4>
            </div>
            <p className="mt-3 ml-3">Last Bids: </p>

            {lastBids.map((lastBids) => {
              return (
                <div className="mb-1 d-flex ml-2" key={lastBids._id}>
                  <img
                    className="imagebidder m-1"
                    src={lastBids?.bidder?.image}
                  />
                  <div className="ml-1 mt-1">
                    {lastBids?.bidder?.username}: {lastBids?.offer}€
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className="card closed-own">
            <h4 className="m-3 auction-status">
              Your Auction is oficially closed
            </h4>
            <p className="m-3 last-bid">Last Bid: </p>
            <div>
              <h4 className="ml-3 last-bid last-bid-price">
                {product?.initialPrice}€
              </h4>
            </div>
            <div className="d-flex justify-content-center">
              <p className="mt-3 ml-3">Winner: </p>
              <img
                className="imagebidder mt-2 ml-1"
                src={lastBids[0]?.bidder?.image}
              />
              <p className="mt-3 ml-1">{lastBids[0]?.bidder?.username}</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <span>You will receive the paid in around 1 week</span>
              <button className="btn-check mt-3 mb-1" onClick={goToProfile}>
                Go to your profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BidslistOwner;
