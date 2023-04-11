import React, { useEffect, useState } from "react";
import { categoryDetailClothes } from "../../../../../services/CategoriesService";
import { useParams } from "react-router";

import { Link } from "react-router-dom";
import ProductList from "../../../../../components/Products/ProductList";

const ClothesInitialPage = () => {
  const [clothesbyPrice, SetClothesPrice] = useState([]);
  const [clothesLast, SetClothesLast] = useState([]);
  const [clothesNearToEnd, SetClothesNearToEnd] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    categoryDetailClothes(id)
      .then((clothes) => {
        const sortedByPrice = clothes.sort(
          (a, b) => a.initialPrice - b.initialPrice
        );
        let clothesSlice = sortedByPrice.slice(0, 3);
        setLoading(false);
        SetClothesPrice(clothesSlice);
      })
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    categoryDetailClothes(id)
      .then((clothes) => {
        const sortedByNewCreation = clothes.sort(function (a, b) {
          return new Date(b.start) - new Date(a.start);
        });
        let clothesSlice = sortedByNewCreation.slice(0, 3);
        setLoading(false);
        SetClothesLast(clothesSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    categoryDetailClothes(id)
      .then((clothes) => {
        const currentDate = new Date();
        const activeAuction = clothes.filter(
          (obj) => new Date(obj.end) > currentDate
        );
        const sortedByNearToEnd = activeAuction.sort(function (a, b) {
          return new Date(b.start) - new Date(a.start);
        });
        let clothesSlice = sortedByNearToEnd.slice(0, 3);
        setLoading(false);
        SetClothesNearToEnd(clothesSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <div className="d-flex justify-content-between">
          <h1>Cheapest</h1>
          <Link to={"browse-products"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        <ProductList auctions={clothesbyPrice} />
      </div>
      <div>
        <div className="d-flex justify-content-between">
          <h1>Latest Creations</h1>
          <Link to={"browse-products"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        <ProductList auctions={clothesLast} />
      </div>
      <div>
        <div className="d-flex justify-content-between">
          <h1>Near to End</h1>
          <Link to={"browse-products"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        <ProductList auctions={clothesNearToEnd} />
      </div>
    </div>
  );
};

export default ClothesInitialPage;
