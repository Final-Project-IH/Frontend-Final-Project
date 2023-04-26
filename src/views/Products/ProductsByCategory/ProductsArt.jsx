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
import "./ProductsByCategory.css";

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
        const Availablefilter = prints.filter(
          (prints) => prints.status === "Available"
        );
        let printsSlice = Availablefilter.slice(0, 4);
        setLoading(false);
        setPrints(printsSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    categoryDetailPhotography(id)
      .then((photography) => {
        const Availablefilter = photography.filter(
          (photography) => photography.status === "Available"
        );
        let photographySlice = Availablefilter.slice(0, 4);
        setLoading(false);
        setPhotography(photographySlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    categoryDetailFrames(id)
      .then((frames) => {
        const Availablefilter = frames.filter(
          (frames) => frames.status === "Available"
        );
        let framesSlice = Availablefilter.slice(0, 4);
        setLoading(false);
        setFrames(framesSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    categoryDetailBooks(id)
      .then((books) => {
        const Availablefilter = books.filter(
          (books) => books.status === "Available"
        );
        let booksSlice = Availablefilter.slice(0, 4);
        setLoading(false);
        setBooks(booksSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    categoryDetailMusic(id)
      .then((music) => {
        const Availablefilter = music.filter(
          (music) => music.status === "Available"
        );
        let musicSlice = Availablefilter.slice(0, 4);
        setLoading(false);
        setMusic(musicSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <CategoryList />
      <div className="breadcrumb-div">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Art
            </li>
          </ol>
        </nav>
      </div>
      <div className="d-flex justify-content-center">
        <h1 className="m-3 title-cat">Art</h1>
      </div>
      <div>
        <hr></hr>
        <div className="d-flex justify-content-between">
          <h4 className="ml-3 title-sub">Prints</h4>
          <Link to={"prints"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        {prints.length > 0 ? (
          <ProductList auctions={prints} />
        ) : (
          <p>Not products yet</p>
        )}
        <hr></hr>
        <div className="d-flex justify-content-between">
          <h4 className="ml-3 title-sub">Photography</h4>
          <Link to={"photography"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        {photography.length > 0 ? (
          <ProductList auctions={photography} />
        ) : (
          <p>Not products yet</p>
        )}
        <hr></hr>
        <div className="d-flex justify-content-between">
          <h4 className="ml-3 title-sub">Frames</h4>
          <Link to={"frames"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        {frames.length > 0 ? (
          <ProductList auctions={frames} />
        ) : (
          <p>Not products yet</p>
        )}
        <hr></hr>
        <div className="d-flex justify-content-between">
          <h4 className="ml-3 title-sub">Books</h4>
          <Link to={"books"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        {books.length > 0 ? (
          <ProductList auctions={books} />
        ) : (
          <p>Not products yet</p>
        )}
        <hr></hr>
        <div className="d-flex justify-content-between">
          <h4 className="ml-3 title-sub">Music</h4>
          <Link to={"music"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>

        {music.length > 0 ? (
          <ProductList auctions={music} />
        ) : (
          <p className="not-products">Not products yet...</p>
        )}
      </div>
    </div>
  );
};

export default ProductsArt;
