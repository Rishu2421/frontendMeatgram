import React, { useState,useEffect } from "react";
import { Route, Routes,useNavigate,useLocation } from "react-router-dom";
import './NavBar.css'
import Body from "../Body";
import Category from "../Category";
import Cart from "../Cart";
import Product from "../Product";
import Navigation from "../Navigation/Navigation";

import AdminApp from "../admin/AdminApp/AdminApp";
import Items from '../product/Items'
import PaymentSuccess from '../orders/PaymentSuccess'
import MyOrderPage from "../orders/MyOrderPage";
import OrderStatusUpdate from "../orders/OrderStatusUpdate";
import LoginModal from "../Navigation/LoginModal";
import Cookies from 'js-cookie';
import SearchBar from "../Search/SearchBar";
import MobileDownload from "../MobileDownload/MobileDownload";
function NavBar() {
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();
  const [isToggleOn, setIsToggleOn] = useState(false); // Toggle state

  useEffect(() => {
    console.log("useEffect triggered");
    const toggle = document.getElementById('toggle');
    const menu = document.getElementById('menu');
    const backdrop = document.getElementById('backdrop');
    
    if (toggle && menu) {
      console.log("Adding event listener");
      toggle.addEventListener('click', () => {
        
        toggle.classList.toggle('on');
        backdrop.classList.toggle('active');
      });
    }
  
    return () => {
      if (toggle && menu) {
        console.log("Removing event listener");
        toggle.removeEventListener('click', () => {
          toggle.classList.toggle('on');
        });
      }
    };
  }, []);
  

  // const userId = localStorage.getItem('userId');
  const userId = Cookies.get('userId');
  const handleCategoryChoice = (category) => {
    setCategoryName(category);
    navigate(`/category/${categoryName}`);
  };
  

const handleToggleClick = () => {
    setIsToggleOn(!isToggleOn);
  };

  const location = useLocation();

  // Check if the current pathname is the home page ("/")
  const isHomePage = location.pathname === "/";
  return (

                
          
  
      <div>
       {isHomePage && <MobileDownload />}
       <Navigation />

        <Routes >
          <Route exact path="/" element={<Body categoryChoice={handleCategoryChoice} />} />
          <Route path="/category" element={<Category categoryChoice={handleCategoryChoice} />} />
          <Route path="/category/:categoryName" element={<Items category={categoryName} showAll={true} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product/:productType" element={<Items showAll={true} />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/admin/*" element={<AdminApp />} />
          <Route path="/user/myorder" element={<MyOrderPage isAdmin={false} userId={userId} />} />
          <Route path="/order/:orderId" element={<OrderStatusUpdate />}/>
          <Route path="/login" element={<LoginModal />} /> 

        </Routes>
      </div>
  );
}

export default NavBar;


// <section className="header">
// <div className="container">
//   <div className="header-wrap">
//     <div className="left">
//       <div className="logo" >
//         <a href="/">
//           <img src="/images/logo.png" alt="logo" />
//         </a>
//       </div>
//     </div>


//     <div className={`toggle ${isToggleOn ? 'on' : ''}`} id="toggle" onClick={handleToggleClick}>
//         <span></span>
//      </div>
//     <div className={`right menu ${isToggleOn ? 'on' : ''}`}  id="menu">
//         <Navigation isToggleOn={isToggleOn} setIsToggleOpen={setIsToggleOn}/>
//      </div>
//      <div className={`backdrop ${isToggleOn ? 'active' : ''}`} id="backdrop"></div>
     
    
//   </div>
// </div>
// </section>