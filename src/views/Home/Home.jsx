import React from "react";
import "./Home.css";
import CategoryListBar from "../../components/Categories/CategoryListBar";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Home = () => {
  const images = [
    {
      original:
        "https://res.cloudinary.com/dfiy6m0si/image/upload/v1682076792/Final%20project/home-80s2_2_ea9arw.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/dfiy6m0si/image/upload/v1682076544/Final%20project/home-80s2_1_skwbn3.jpg",
    },
    {
      original:
        "https://res.cloudinary.com/dfiy6m0si/image/upload/v1682077105/Final%20project/home-80s2_3_ea23oz.jpg",
    },
  ];
  return (
    <div>
      <CategoryListBar />
      <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 p-5">
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={true}
            autoPlay={true}
            slideInterval={3500}
            className="image-home"
          />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-5">
          <h1 className="title">GoldFish</h1>
          <p className="home-desc">
            Welcome to our thrilling peer-to-peer auction app! If you're a fan
            of pop culture, you're in the right place. Our platform allows you
            to bid on or auction off collectible pop culture items from around
            the world, ranging from action figures from your favorite movies and
            TV shows, to rare comics, original movie posters, vintage toys, and
            much more.
            <br></br>
            <br></br>
            Browse through a wide variety of collectible items, set your own prices, and participate in exciting real-time auctions.
          </p>
          <p className="home-desc-2">
          Join our community today and start discovering unique treasures in our thrilling auctions!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
