import React, { useEffect, useContext, useState } from "react";
import AuthContext from "../../../contexts/Auth.context";

const Favorite = ({ auctionId, updateFavorites }) => {
  const { currentUser, manageFavorites } = useContext(AuthContext);

  const isFavorited = currentUser?.favorites.find(
    (favorite) => favorite.auction._id === auctionId
  );

  const handleFavoriteClick = () => {
    updateFavorites()

  };
  

  return (
    <div>
      {isFavorited ? (
        <div className="Favorite">
          <i
            onClick={handleFavoriteClick}
            className="bi-heart-fill"
          ></i>
        </div>
      ) : (
        <div className="Favorite">
          <i
            onClick={handleFavoriteClick}
            className="bi bi-heart"
          ></i>
        </div>
      )}
    </div>
  );
};

export default Favorite;
