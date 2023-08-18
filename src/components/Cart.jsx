import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import CartApp from "./Cart/CartApp";
function Cart() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
 
    checkAuthentication();
  }, []);

  const checkAuthentication = () => {
    const token = Cookies.get('token');
    console.log(token)
    if (token) {
      setIsAuthenticated(true);
    }
  };
  
  return (


    <div>
   {!isAuthenticated ? (
        <div className="alert alert-warning">
          Please login to view your cart and do checkout.
        </div>
      ) : (
        <CartApp />
      )}
  </div>
 );
}

export default Cart;


