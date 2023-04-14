import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  categoryDetailBooks,
  categoryDetailFrames,
  categoryDetailMusic,
  categoryDetailPhotography,
  categoryDetailPrints,
} from "../../../services/CategoriesService";
import { Link } from "react-router-dom";
import CategoryList from "../../../components/Categories/CategoryListBar";
import ProductList from "../../../components/Products/ProductList";

const ProductsArt = () => {
  const [prints, setPrints] = useState([]);
  const [photography, setPhotography] = useState([]);
  const [frames, setFrames] = useState([]);
  const [books, setBooks] = useState([]);
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    categoryDetailPrints(id)
      .then((prints) => {
        let printsSlice = prints.slice(0, 2);
        setLoading(false);
        setPrints(printsSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    categoryDetailPhotography(id)
      .then((photography) => {
        let photographySlice = photography.slice(0, 2);
        setLoading(false);
        setPhotography(photographySlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    categoryDetailFrames(id)
      .then((frames) => {
        let framesSlice = frames.slice(0, 2);
        setLoading(false);
        setFrames(framesSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    categoryDetailBooks(id)
      .then((books) => {
        let booksSlice = books.slice(0, 2);
        setLoading(false);
        setBooks(booksSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    categoryDetailMusic(id)
      .then((music) => {
        let musicSlice = music.slice(0, 2);
        setLoading(false);
        setMusic(musicSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <CategoryList />
      <Link to={"/"}>
        <span>Home</span>
      </Link>
      <span> ➱</span>
      <Link to={"/products/category/642b0e43261604ba1d7c2b99/art"}>
        <span>Category</span>
      </Link>
      <div>
        <div className="d-flex justify-content-between">
          <h1>Prints</h1>
          <Link to={"prints"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        <ProductList auctions={prints} />
        <div className="d-flex justify-content-between">
          <h1>Photography</h1>
          <Link to={"photography"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        <ProductList auctions={photography} />
        <div className="d-flex justify-content-between">
          <h1>Frames</h1>
          <Link to={"frames"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        <ProductList auctions={frames} />
        <div className="d-flex justify-content-between">
          <h1>Books</h1>
          <Link to={"books"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        <ProductList auctions={books} />
        <div className="d-flex justify-content-between">
          <h1>Music</h1>
          <Link to={"music"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        <ProductList auctions={music} />
      </div>
    </div>
  );
};

export default ProductsArt;
