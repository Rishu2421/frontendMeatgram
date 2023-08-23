import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

import backendUrl from "../../config";

function Items({ showAll, category, hideTitle }) {
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    try {
      let response;
      if (category) {
        response = await axios.get(`${backendUrl}/api/categories/${category}`);
        setCategoryName(category);
      } else {
        response = await axios.get(`${backendUrl}/api/products/allproducts`);
      }
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderProducts = () => {
    if (showAll) {
      return products || [];
    } else {
      return products.slice(0, 6) || []; // Limit to 6 products to display two cards in one line
    }
  };

  const getTitle = () => {
    if (showAll || category) {
      return category ? `${category}` : "All Products";
    } else {
      return "You may also like";
    }
  };

  return (
    <div>
      <section className="category-info-text">
        <div className="container">
          {!hideTitle && (
            <div className="title">
              <h2>{getTitle()}</h2>
            </div>
          )}
          <div className="row">
            {Array.isArray(renderProducts()) && renderProducts().length > 0 ? (
              renderProducts().map((product) => (
                <div className="col-md-6 col-lg-4 mb-4" key={product._id}>
                  <Card product={product} />
                </div>
              ))
            ) : (
              <p>No products to display.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Items;
