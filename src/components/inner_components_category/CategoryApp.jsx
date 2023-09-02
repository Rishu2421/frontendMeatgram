import React from "react";
import {  useNavigate } from "react-router-dom";
import ScrollButton from "./ScrollButton";
import CategoryWrap from "../inner_components_index/CategoryWrap/CategoryWrap";
import Items from "../product/Items";


function CategoryApp({category ,categoryChoice}){
    
    const navigate = useNavigate();
    const handleCategoryChoice = (categoryName) => {
        categoryChoice(categoryName);
        navigate(`/category/${categoryName}`);
      };
    return(
        <div>
        <CategoryWrap onCategoryChoice={handleCategoryChoice} />
        {/* <ScrollButton /> */}
        <Items key="1" showAll={true} category={category} subtitleProps={`Marinated ${category}`} />
        </div>
    )
}

export default CategoryApp;