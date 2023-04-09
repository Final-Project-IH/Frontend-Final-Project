import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { categoryArt } from "../../../services/CategoriesService";
import HomeAndDecoration from "../../../components/Categories/Antiques/HomeAndDecoration";
import ArtAndFrames from "../../../components/Categories/Antiques/ArtAndFrames";
import FashionAndAccesories from "../../../components/Categories/Antiques/FashionAndAccesories";

const ProductsAntiques = () => {
  // const [product, setProduct] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const { id } = useParams();

  // useEffect(() => {
  //   categoryArt(id)
  //     .then((products) => {
  //       setLoading(false);
  //       setProduct(products);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      {/* {loading ? (
        <p>Loading..</p>
      ) : ( */}
        <div>
          <HomeAndDecoration />
          <ArtAndFrames />
          <FashionAndAccesories />
        </div>
      {/* )} */}
    </div>
  );
};

export default ProductsAntiques;
