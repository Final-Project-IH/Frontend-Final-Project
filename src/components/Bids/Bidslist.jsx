import React from 'react';

const Bidslist = ({bids}) => {
    return (
        <div>
            {bids.map((bid)=>{
                return(<div key={bid._id}>
          <p>{bid.bidder.username}: {bid.offer}€</p>
        </div>)
            })}
        </div>
    );
};

export default Bidslist;