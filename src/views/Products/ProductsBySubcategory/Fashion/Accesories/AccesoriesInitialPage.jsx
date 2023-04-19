import React, { useEffect, useState } from "react";
import { categoryDetailAccesories } from "../../../../../services/CategoriesService";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ProductList from "../../../../../components/Products/ProductList";

const AccesoriesInitialPage = () => {
  const [productbyPrice, setProductPrice] = useState([]);
  const [productLast, setProductLast] = useState([]);
  const [productNearToEnd, setProductNearToEnd] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    categoryDetailAccesories(id)
      .then((product) => {
        const sortedByPrice = product.sort(
          (a, b) => a.initialPrice - b.initialPrice
        );
        let productSlice = sortedByPrice.slice(0, 3);
        setLoading(false);
        setProductPrice(productSlice);

        const sortedByNewCreation = product.sort(function (a, b) {
          return new Date(b.start) - new Date(a.start);
        });

        let productSlice2 = sortedByNewCreation.slice(0, 3);
        setLoading(false);
        setProductLast(productSlice2);

        const currentDate = new Date();
        const activeAuction = product.filter(
          (obj) => new Date(obj.end) > currentDate
        );
        const sortedByNearToEnd = activeAuction.sort(function (a, b) {
          return new Date(b.start) - new Date(a.start);
        });
        let productSlice3 = sortedByNearToEnd.slice(0, 3);
        setLoading(false);
        setProductNearToEnd(productSlice3);
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
        <ProductList auctions={productbyPrice} />
      </div>
      <div>
        <div className="d-flex justify-content-between">
          <h1>Latest Creations</h1>
          <Link to={"browse-products"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        <ProductList auctions={productLast} />
      </div>
      <div>
        <div className="d-flex justify-content-between">
          <h1>Near to End</h1>
          <Link to={"browse-products"} style={{ textDecoration: "none" }}>
            <p>See All</p>
          </Link>
        </div>
        <ProductList auctions={productNearToEnd} />
      </div>
    </div>
  );
};

export default AccesoriesInitialPage;
