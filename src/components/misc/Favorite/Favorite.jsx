import React from "react";

const Favorite = ({ updateFavorites, currentUser, auctionId }) => {
  // console.log({auctionId})
  // console.log({currentUser})
  const isFavorited = !!currentUser?.favorites.find(
    (favorites) => favorites.auction === auctionId
  );
  return (
    <div>
      {isFavorited ? (
        <div className="Favorite">
          <i onClick={updateFavorites} className="bi-heart-fill"></i>
        </div>
      ) : (
        <div className="Favorite">
          <i onClick={updateFavorites} className="bi bi-heart"></i>
        </div>
      )}
    </div>
  );
};

export default Favorite;
