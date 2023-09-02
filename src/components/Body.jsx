import React from "react";
import Banner from "./inner_components_index/Banner/Banner";
import CategoryWrap from "./inner_components_index/CategoryWrap/CategoryWrap";
import TopSellingProducts from "./inner_components_index/TopSellingProducts";
import BonelessCuts from "./inner_components_index/BonelessCuts";
import AboutUs from "./inner_components_index/AboutUs/AboutUs";
import Meetgram from "./inner_components_index/Meetgram";
import Meetgraminfo from "./inner_components_index/Meetgraminfo";
import Testimonials from "./inner_components_index/Testimonials";
import { useNavigate } from "react-router-dom";

function Body({ categoryChoice }){
  const navigate=useNavigate();
  const handleCategoryChoice = (categoryName) => {
    categoryChoice(categoryName);
    navigate(`/category/${categoryName}`);
  };
    return (
        <div>
        
      <CategoryWrap onCategoryChoice={handleCategoryChoice}/>
      <Banner />
      <TopSellingProducts />
      {/* <Meetgraminfo /> */}

      <BonelessCuts />  
      <Meetgram />
      <AboutUs />
      <Testimonials />
        </div>
    )
}

export default Body;