import React from "react";
import "./Home.css";
import CategoryListBar from "../../components/Categories/CategoryListBar";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


const Home = () => {
    
  const images = [
    {
      original: "https://res.cloudinary.com/dvojfvhqm/image/upload/v1681638227/carousel3_koxhhz.png",
    },
    {
      original: "https://res.cloudinary.com/dvojfvhqm/image/upload/v1681638227/carousel2_jfl9sg.png",
    },
    {
      original: "https://res.cloudinary.com/dvojfvhqm/image/upload/v1681638227/carousel1_bwhnzl.png",
    },
  ];
  return (
    <div>
      <CategoryListBar />
      <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false}  />

    </div>
  );
};

export default Home;
