import React from "react";
import Favorite from "../misc/Favorite/Favorite";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ProductDetail.css";

const ProductDetailed = ({ product, updateFavorites, currentUser }) => {
  const images = [];

  product.product.image.forEach((image) => {
    images.push({
      original: image,
      thumbnail: image,
    });
  });

  return (
    <div className="d-flex row">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6"> 
        <h2 className="productname">{product.product.name}</h2>
        <p className="short-desc">{product.product.shortDescription}</p>
        <div className="d-flex justify-content-end">
          <Favorite
            updateFavorites={updateFavorites}
            auctionId={product.id}
          />
          <p>{product.favorites.length}</p>
        </div>
        <ImageGallery
          items={images}
          showPlayButton={false}
          thumbnailPosition={"left"}
          showFullscreenButton={false}
        />
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <p className="product-desc-detail">{product.product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailed;
