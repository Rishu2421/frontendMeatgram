import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CategoryWrap from "../inner_components_index/CategoryWrap/CategoryWrap";
import axios from "axios";
import backendUrl from "../../config";
import Card from "../product/Card";

function CategoryApp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [category, setCategory] = useState("");
  const [productsBySubcategory, setProductsBySubcategory] = useState({});

  useEffect(() => {
    // Extract the category from the URL path
    const pathnameParts = location.pathname.split("/");
    const categoryName = pathnameParts[pathnameParts.length - 1];

    // Set the category state if categoryName is defined
    if (categoryName) {
      setCategory(categoryName);

      // Fetch products based on the category
      fetchProducts(categoryName);
    }
  }, [location.pathname]);

  const fetchProducts = async (categoryName) => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/categories/${categoryName}`
      );

      // Assuming the response contains an array of products
      const categoryProducts = response.data;

      // Group products by subcategory
      const productsBySubcategory = {};

      categoryProducts.forEach((product) => {
        const subcategory = product.subcategory;

        if (!productsBySubcategory[subcategory]) {
          productsBySubcategory[subcategory] = [];
        }

        productsBySubcategory[subcategory].push(product);
      });

      setProductsBySubcategory(productsBySubcategory);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleCategoryChoice = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };

  return (
    <div>
      <CategoryWrap onCategoryChoice={handleCategoryChoice} />
      {Object.keys(productsBySubcategory).map((subcategory, index) => (
        <div className="menu bestsellers-container" id={`scroll${index}`} key={index}>
          <div className="heading">
            {category && <h1>{category.toUpperCase()}</h1>}
            <h3>&mdash; {subcategory.toUpperCase()} &mdash;</h3>
          </div>
          {productsBySubcategory[subcategory].map((product, productIndex) => (
            <Card key={productIndex} product={product} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default CategoryApp;


// import React from "react";
// import {  useNavigate } from "react-router-dom";
// import ScrollButton from "./ScrollButton";
// import CategoryWrap from "../inner_components_index/CategoryWrap/CategoryWrap";
// import Items from "../product/Items";


// function CategoryApp({category ,categoryChoice}){
    
//     const navigate = useNavigate();
//     const handleCategoryChoice = (categoryName) => {
//         categoryChoice(categoryName);
//         navigate(`/category/${categoryName}`);
//       };
//     return(
//         <div>
//         <CategoryWrap onCategoryChoice={handleCategoryChoice} />
//         {/* <ScrollButton /> */}
//         <Items key="1" showAll={true} category={category} subtitleProps={`Marinated ${category}`} />
//         </div>
//     )
// }

// export default CategoryApp;