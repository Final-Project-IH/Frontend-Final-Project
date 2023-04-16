import React, { useEffect, useState } from "react";
import { listCategories } from "../../services/CategoriesService";
import { Link } from "react-router-dom";

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
      <div className="row">
        {category.map((category) => (
          <div
            key={category._id}
            className="d-flex justify-content-between m-1"
          >
            <Link
              to={`/products/category/${category._id}/${category.title}`}
              style={{ textDecoration: "none" }}
            >
              <h4>{category.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
