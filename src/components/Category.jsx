import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonWrap } from "./inner_components_category/ButtonWrap";
import RedBackgroundWrap from "./inner_components_category/RedBackgroundWrap";
import { ListImageWrap } from "./inner_components_category/ListImageWrap";
import { ImageListWrap } from "./inner_components_category/ImageListWrap";
import ChickenProductComponent from "./inner_components_category/ChickenProductComponent";
import Items from './product/Items';
import backendUrl from "../config";

function Category({ categoryChoice }) {

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  
 

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/categories`);
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleCategoryChoice = (categoryName) => {
    categoryChoice(categoryName);
    navigate(`/category/${categoryName}`);
  };


  return (
    <div>
      {/* <Banner /> */}
      <RedBackgroundWrap />
      {/* <CategoryWrap /> */}
      <ListImageWrap />
      <ImageListWrap categories={categories} onCategoryChoice={handleCategoryChoice} />
      
      {/* <ButtonWrap /> */}

      <ChickenProductComponent />

      {categories.map((category) => (
        <Items category={category.name} showAll={false} key={category.id} />
          ))}     
    </div>
  );
}

export default Category;
