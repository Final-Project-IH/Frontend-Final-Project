import React from "react";
import CountdownTimer from "../CountDownTimer/CountDownTimer";
import BidForm from "./BidForm";

const Bidslist = ({ bids, product, id }) => {
  const sortedBids = bids.sort((a, b) => b.offer - a.offer);
  const lastBids = sortedBids.slice(0,4)
  return (
    <div>
    {product.status === "Available" ? 
    <div>
    <h2>Actual Price: {product.initialPrice}</h2>
    <CountdownTimer endDate={product.end} />
    <BidForm id={id} lastOffer={product.initialPrice} />
      {lastBids.map((lastBids) => {
        return (
          <div key={lastBids._id}>
            <p>
              {lastBids.bidder.username}: {lastBids.offer}€
            </p>
          </div>
        );
      })}
    </div>
      :
      <div> 
      <h1>This Auction is closed</h1>
      </div>
    
    }
  
    </div>
  );
};

export default Bidslist;
