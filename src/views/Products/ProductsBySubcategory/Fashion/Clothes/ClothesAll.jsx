import React, { useEffect, useState } from "react";
import { categoryDetailClothes } from "../../../../../services/CategoriesService";
import { useParams } from "react-router";
import ProductList from "../../../../../components/Products/ProductList";

const ClothesAll = () => {
  const [clothes, setClothes] = useState([]);
  const [sortedByPrice, setSortedByPrice] = useState(false);
  const [sortedByNewest, setSortedByNewest] = useState(false);
  const [filterByActive, setFilterByActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    categoryDetailClothes(id)
      .then((clothes) => {
        setLoading(false);
        setClothes(clothes);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSortByPrice = () => {
    if (sortedByPrice) {
      setClothes([...clothes].sort((a, b) => a.initialPrice - b.initialPrice));
    } else {
      setClothes([...clothes].sort((a, b) => b.initialPrice - a.initialPrice));
    }
    setSortedByPrice(!sortedByPrice);
  };

  const handleSortByNewest = () => {
    if (sortedByNewest) {
      setClothes(
        [...clothes].sort(function (a, b) {
          return new Date(b.start) - new Date(a.start);
        })
      );
    } else {
      setClothes(
        [...clothes].sort(function (a, b) {
          return new Date(a.start) - new Date(b.start);
        })
      );
    }
    setSortedByNewest(!sortedByNewest);
  };

  const handleFilterByActive = () => {
    setFilterByActive(!filterByActive);
  };

  return (
    <div>
      <button onClick={handleSortByPrice}>
        {sortedByPrice ? "Order by lower Price" : "Order by higher price"}
      </button>
      <button onClick={handleSortByNewest}>
        {sortedByNewest ? "Order by Newest" : "Order by Older"}
      </button>
      <button onClick={handleFilterByActive}>Filter Available products</button>
      <div>
        <ProductList statusFilter={filterByActive} auctions={clothes} />
      </div>
    </div>
  );
};

export default ClothesAll;
