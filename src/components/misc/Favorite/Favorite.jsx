import React from "react";

const Favorite = ({updateFavorites, currentUser, auctionId}) => {
  // console.log({auctionId})
  // console.log({currentUser})
  const isFavorited = !!currentUser?.favorites.find(e =>e.favorites.auction === auctionId)
  // console.log({isFavorited})
  return (
    <div>

      {isFavorited ? 
        <div className="Favorite">
        <i onClick={updateFavorites} className="bi bi-heart"></i>
      </div>
  
      :
  
      <div>
        <h1>No</h1>
      </div>
      
      }
    </div>
    // <div className="Favorite">
    //   <i onClick={updateFavorites} className="bi bi-heart"></i>
    // </div>
  );
};

export default Favorite;
