import React, { useEffect, useState } from "react";
import { listCategories } from "../../services/CategoriesService";
import { Link } from "react-router-dom";
import "./categories.css"

const CategoryList = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listCategories()
      .then((categories) => {
        setLoading(false);
        setCategory(categories);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("categorias", category);

  return (
    <div>
      <div className="row m-3 d-flex justify-content-center">
        {category.map((category) => (
          <div
            key={category._id}
            className="d-flex justify-content-between m-1"
          >
            <Link
              to={`/products/category/${category._id}/${category.title}`}
              style={{ textDecoration: "none" }}
            >
             <button type="button" className="btn btn-outline-primary">{category.title}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
