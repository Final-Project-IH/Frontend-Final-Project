import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { listCategories } from "../../services/CategoriesService";
// import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  // const [category, setCategory] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   listCategories()
  //     .then((categories) => {
  //       setLoading(false);
  //       setCategory(categories);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      <div className="row d-flex justify-content-between">
        {/* {category.map((category) => (
          <div key={category._id} className="col mb-3">
            <CategoryCard {...category} />
          </div>
        ))} */}
        <Link to={`/products/category/642b0e43261604ba1d7c2b97/fashion`} style={{ textDecoration: "none" }}>
        <h4>Fashion</h4>
        </Link>
        <Link to={`/products/category/642b0e43261604ba1d7c2b98/home`} style={{ textDecoration: "none" }}>
        <h4>Home</h4>
        </Link>
        <Link to={`/products/category/642b0e43261604ba1d7c2b99/art`} style={{ textDecoration: "none" }}>
        <h4>Art</h4>
        </Link>
        <Link to={`/products/category/642b0e43261604ba1d7c2b9a/antiques`} style={{ textDecoration: "none" }}>
        <h4>Antiques</h4>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
