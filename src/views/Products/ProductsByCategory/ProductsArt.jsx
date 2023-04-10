import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { categoryArt } from "../../../services/CategoriesService";
import BooksList from "../../../components/Categories/Art/BooksList";
import FramesList from "../../../components/Categories/Art/FramesList";
import MusicList from "../../../components/Categories/Art/MusicList";
import PhotographyList from "../../../components/Categories/Art/PhotographyList";
import PrintsList from "../../../components/Categories/Art/PrintsList";

const ProductsArt = () => {
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
          <BooksList />
          <FramesList />
          <MusicList />
          <PhotographyList />
          <PrintsList />
        </div>
      {/* )} */}
    </div>
  );
};

export default ProductsArt;
