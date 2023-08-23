import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CategoryWrap.css";
import backendUrl from "../../../config";

function CategoryWrap({ onCategoryChoice }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from backend API
    fetch(`${backendUrl}/api/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    onCategoryChoice(categoryName);
    navigate(`/category/${categoryName}`);
  };

  return (
    <section className="category-wrap">
      <div className="container">
        <div className="title">
          <h2>Categories</h2>
        </div>
        <div className="category-info">
          {categories.map((category) => (
            <div className="category text-center" key={category._id}>
              <div className="image-container d-flex justify-content-center align-items-center">
                <div
                  className="image img img-fluid"
                  style={{
                    backgroundImage: `url(${backendUrl}${category.imageUrl}#)`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "5rem",
                    height: "5rem",
                  }}
                />
              </div>
              <div
                className="index-category-text cursor-pointer text-center"
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryWrap;
