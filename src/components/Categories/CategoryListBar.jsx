import React, { useEffect, useState } from "react";
import { listCategories } from "../../services/CategoriesService";
import CategoryCard from "./CategoryCard";

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

  return (
    <div>
      <div className="row">
        {category.map((category) => (
          <div key={category._id} className="col mb-3">
            <CategoryCard {...category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
