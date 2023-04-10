import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  categoryDetailAccesories,
  categoryDetailClothes,
  categoryDetailShoes,
} from "../../../services/CategoriesService";
import ClothesList from "../../../components/Categories/Fashion/ClothesList";
import AccesoriesList from "../../../components/Categories/Fashion/AccesoriesList";
import ShoesList from "../../../components/Categories/Fashion/ShoesList";
import { Link } from "react-router-dom";
import CategoryList from "../../../components/Categories/CategoryListBar";

const ProductsFashion = () => {
  const [clothes, SetClothes] = useState([]);
  const [accesories, SetAccesories] = useState([]);
  const [shoes, SetShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    categoryDetailClothes(id)
      .then((clothes) => {
        let clothesSlice = clothes.slice(0, 2);
        setLoading(false);
        SetClothes(clothesSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    categoryDetailAccesories(id)
      .then((accesories) => {
        let accesoriesSlice = accesories.slice(0, 2);
        setLoading(false);
        SetAccesories(accesoriesSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    categoryDetailShoes(id)
      .then((shoes) => {
        let shoesSlice = shoes.slice(0, 2);
        setLoading(false);
        SetShoes(shoesSlice);
      })
      .catch((err) => console.log(err));
  }, []);

  // const getProduct = useCallback(() => {
  //   categoryFashion(id)
  //     .then((products) => {
  //       setLoading(false);
  //       setProduct(products);
  //     })
  //     .catch((err) => console.error(err));
  // }, [id]);

  // useEffect(() => {
  //   getProduct();
  // }, [getProduct]);

  return (
    <div>
      {/* {loading ? <p>Loading..</p> :} */}
      <CategoryList />
      <Link to={"/"}><span>Home</span></Link><span> ➱</span><Link to={"/products/category/642b0e43261604ba1d7c2b97/fashion"}><span>Category</span></Link>
      <div>
        <div className="d-flex justify-content-between">
          <h1>Clothes</h1>
          <Link
            to={"clothes"}
            style={{ textDecoration: "none" }}
          >
            <p>See All</p>
          </Link>
        </div>
        <ClothesList clothes={clothes} />
        <AccesoriesList accesories={accesories} />
        <ShoesList shoes={shoes} />
      </div>
    </div>
  );
};

export default ProductsFashion;
