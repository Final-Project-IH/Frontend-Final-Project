import React, { useEffect, useState } from "react";
import { categoryDetailClothes } from "../../../../../services/CategoriesService";
import { useParams } from "react-router";
import ClothesList from "../../../../../components/Categories/Fashion/ClothesList";
import PaginatedItems from "../../../../../components/Paginate/Paginate";
import ProductList from "../../../../../components/Products/ProductList";


const ClothesAll = () => {
  const [clothes, SetClothes] = useState([]);
  const [sortedByPrice, setSortedByPrice] = useState(false);
  const [sortedByNewest, setSortedByNewest] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  console.log("clothes", clothes)

  useEffect(() => {
    categoryDetailClothes(id)
      .then((clothes) => {
        setLoading(false);
        SetClothes(clothes);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSortByPrice = () => {
    if (sortedByPrice) {
        SetClothes([...clothes].sort((a, b) => a.initialPrice - b.initialPrice));
    } else {
        SetClothes([...clothes].sort((a, b) => b.initialPrice - a.initialPrice));
    }
    setSortedByPrice(!sortedByPrice);
  };

  const handleSortByNewest = () => {
    if (sortedByNewest) {
        SetClothes([...clothes].sort(function (a, b) {
            return new Date(b.start) - new Date(a.start);
          }));
    } else {
        SetClothes([...clothes].sort(function (a, b) {
            return new Date(a.start) - new Date(b.start);
          }));
    }
    setSortedByNewest(!sortedByNewest);
  };




  return (
    <div>
    <button onClick={handleSortByPrice}>{sortedByPrice ?  "Order by lower Price" : "Order by higher price"}</button>
    <button onClick={handleSortByNewest}>{sortedByNewest ?  "Order by Older" : "Order by Newest"}</button>
      <div>
    <ProductList products={clothes}/> 
        {/* <ClothesList clothes={clothes} /> */}
      </div>
    </div>
  );
};

export default ClothesAll;