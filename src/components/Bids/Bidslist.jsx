import React from "react";

const Bidslist = ({ bids, product }) => {
  const sortedBids = bids.sort((a, b) => b.offer - a.offer);
  const lastBids = sortedBids.slice(0,4)
  return (
    <div>
    <h2>Actual Price: {product.initialPrice}</h2>
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
  );
};

export default Bidslist;
