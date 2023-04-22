import React, { useEffect, useState } from "react";
import { categoryDetailAntiquesFashion } from "../../../../../services/CategoriesService";
import { useParams } from "react-router";
import ProductList from "../../../../../components/Products/ProductList";
import "./../../productsBySubcat.css"


const FashionAndAccesoriesAll = () => {
  const [product, setProduct] = useState([]);
  const [filterByActive, setFilterByActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    categoryDetailAntiquesFashion(id)
    .then((product) => {
      setLoading(false);
      setProduct(product);
    })
    .catch((err) => console.log(err));
}, []);

const Availablefilter = product.filter(product => product.status === "Available")
const currentDate = new Date();
const activeAuction = Availablefilter.filter(
        (obj) => new Date(obj.end) > currentDate
      );

const handleSortByLowerPrice = () => {
    setProduct([...activeAuction].sort((a, b) => a.initialPrice - b.initialPrice));
};

const handleSortByHighestPrice = () => {
  setProduct([...activeAuction].sort((a, b) => b.initialPrice - a.initialPrice));
};

  const handleSortByNewest = () => {
    setProduct(
      [...activeAuction].sort(function (a, b) {
      return new Date(b.start) - new Date(a.start);
      })
    );
};

const handleSortByNearToEnd = () => {
  setProduct(
    [...activeAuction].sort(function (a, b) {
     return new Date(a.end) - new Date(b.end);
    })
  );
};

const handleFilterByActive = () => {
  setFilterByActive(!filterByActive);
};



return (

  <div>
  <div className="dropdown">
<button className="btn btn-secondary dropdown-toggle m-3 mb-4 ml-4 btn-filter" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Let´s Filter
</button>
<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <a className="dropdown-item" onClick={handleSortByLowerPrice}>Order by Lower Price</a>
  <a className="dropdown-item" onClick={handleSortByHighestPrice}> Order by Highest Price</a>
  <a className="dropdown-item" onClick={handleSortByNewest}> Order by Newest</a>
  <a className="dropdown-item" onClick={handleSortByNearToEnd}> Near to End</a>
</div>
</div>
    <div>
      <ProductList statusFilter={filterByActive} auctions={product} />
    </div>
  </div>
  );
};

export default FashionAndAccesoriesAll;
