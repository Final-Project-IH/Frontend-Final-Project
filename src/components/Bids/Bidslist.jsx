import React from "react";
import CountdownTimer from "../CountDownTimer/CountDownTimer";
import BidForm from "./BidForm";
import "./BidList.css";
import { useNavigate } from "react-router-dom";
import MyGifs from "../gifs/gif";

const Bidslist = ({ bids, product, id, currentUser }) => {
  const sortedBids = bids.sort((a, b) => b.offer - a.offer);
  const lastBids = sortedBids.slice(0, 4);

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      {product.status === "Available" ? (
        <div>
          <div className="d-flex justify-content-center countdowntimer mb-0">
            <p className="mr-2">Ends in:</p>
            <CountdownTimer endDate={product.end} />
          </div>
          <div className="card">
            <h3 className="last-bid-available">Last Bid: </h3>

            <h4 className="ml-3 actual-price">{product.initialPrice}€</h4>
            {lastBids[0]?.bidder?.id === currentUser?.id ? (
              <div className="d-flex justify-content-center">
                <div className="winning">
                  <span>You are winning!</span>
                </div>
              </div>
            ) : null}

            <div className="bidform d-flex justify-content-center mt-3 mb-3">
              <BidForm id={id} lastOffer={product.initialPrice} />
            </div>
            <p className="mt-3 ml-2">Last Bids: </p>

            {lastBids.map((lastBids) => {
              return (
                <div className="mb-1 d-flex ml-2" key={lastBids._id}>
                  <img
                    className="imagebidder m-1"
                    src={lastBids.bidder.image}
                  />
                  <div className="ml-1 mt-1">
                    {lastBids.bidder.username}: {lastBids.offer}€
                  </div>
                </div>
              );
            })}

            <div>
              <p className="mt-3 ml-2">Published by: </p>
              <div className="mb-1 d-flex ml-2">
                <img
                  className="imagebidder m-1 m-1 ml-2"
                  src={product.product.owner.image}
                />
                <div className="ml-1 mt-1">
                  {product.product.owner.username}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            {/* <div className="card {lastBids[0]?.bidder?.id === currentUser?.id ? card-winner : card-loser"> */}
            <div className="card">
              <h1 className="m-3 auction-status">This Auction is closed</h1>
              <p className="final-price">Final Price: </p>
              <div>
                <h4 className="last-bid-price">{product.initialPrice}€</h4>
              </div>
              {lastBids[0]?.bidder?.id === currentUser?.id ? (
                <div className="d-flex align-items-center flex-column">
                  <div className="mb-2">
                    <MyGifs />
                  </div>
                  <div className="winning mb-3">
                    <span>You´ve won this auction!</span>
                  </div>
                  <div>
                    <button className="btn-check" onClick={goToHome}> 
                    {/* CAMBIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR */}
                      Proceed to pay it...
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="d-flex justify-content-center">
                    <button className="btn-check" onClick={goToHome}>
                      Check other products...
                    </button>
                  </div>
                  <div>
                    <p className="mt-3 ml-2">Last Bids: </p>

                    {lastBids.map((lastBids) => {
                      return (
                        <div className="mb-1 d-flex ml-2" key={lastBids._id}>
                          <img
                            className="imagebidder m-1"
                            src={lastBids.bidder.image}
                          />
                          <div className="ml-1 mt-1">
                            {lastBids.bidder.username}: {lastBids.offer}€
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {/* <p className="mt-3 ml-2">Last Bids: </p>

              {lastBids.map((lastBids) => {
                return (
                  <div className="mb-1 d-flex ml-2" key={lastBids._id}>
                    <img
                      className="imagebidder m-1"
                      src={lastBids.bidder.image}
                    />
                    <div className="ml-1 mt-1">
                      {lastBids.bidder.username}: {lastBids.offer}€
                    </div>
                  </div>
                );
              })} */}

              <div>
                <p className="mt-3 ml-2">Published by: </p>
                <div className="mb-1 d-flex">
                  <img
                    className="imagebidder m-1 ml-2"
                    src={product.product.owner.image}
                  />
                  <div className="ml-1 mt-1">
                    {product.product.owner.username}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* {lastBids[0]?.bidder?.id === currentUser?.id ? <div className="Winner"><h4>You have won this auction</h4></div> : null} */}
        </div>
      )}
    </div>
  );
};

export default Bidslist;
