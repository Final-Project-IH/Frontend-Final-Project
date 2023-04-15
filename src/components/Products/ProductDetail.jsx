import React from "react";
import Favorite from "../misc/Favorite/Favorite";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductDetailed = ({ product, updateFavorites, currentUser }) => {
  const images = [];

  product.product.image.forEach((image) => {
    images.push({
      original: image,
      thumbnail: image,
    });
  });

  return (
    <div>
      <h1>{product.product.name}</h1>
      <h5>{product.product.shortDescription}</h5>
      <p>{product.product.description}</p>
      <p>{product.product.state}</p>
      <h1>Actual Price: {product.initialPrice}</h1>
      <ImageGallery items={images} />
      <Favorite
        updateFavorites={updateFavorites}
        auctionId={product.id}
        currentUser={currentUser}
      />
      <p>Likes count: {product.favorites.length}</p>
    </div>
  );
};

export default ProductDetailed;
