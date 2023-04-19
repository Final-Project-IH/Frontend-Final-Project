import React from "react";
import CountdownTimer from "../CountDownTimer/CountDownTimer";
import "./BidListOwner.css"

const BidslistOwner = ({ bids, product, id, currentUser }) => {
  const sortedBids = bids.sort((a, b) => b.offer - a.offer);
  const lastBids = sortedBids.slice(0, 4);
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
            <h4 className="ml-3 last-bid last-bid-price">{product.initialPrice}€</h4>
            </div>
            <p className="mt-3 ml-3">Last Bids: </p>

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
      ) : (
        <div>
          <h1>This Auction is closed</h1>
          <p>hola?</p>
          {lastBids[0]?.bidder?.id === currentUser?.id ? <div className="Winner"><h4>You have won this auction</h4></div> : null}
        </div>
      )}
    </div>
  );
};

export default BidslistOwner;
