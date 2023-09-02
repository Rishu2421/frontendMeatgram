import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Search/SearchBar";
import LoginModal from "./LoginModal";
import Cookies from 'js-cookie';

function Navigation({isToggleOn,setIsToggleOpen}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    // Check for authentication token on component mount
    const token = Cookies.get('token');
   
console.log(token)
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // useEffect(() => {
  //   // Check for authentication token on component mount
  //   // const token = localStorage.getItem("token");
  //   const token = Cookies.get('token');

  //   console.log(token)
  //   if (token) {
  //     setIsAuthenticated(true);
  //   }
  // }, []);
  
  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    setIsAuthenticated(true);
  };

  const handleLoginModalClose = () => {
    setShowLoginModal(false);
  };



  
  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('userId');
    navigate("/");
    window.location.reload();
  };
  const toggleMenu = () => {
    setIsToggleOpen(false);
  };



  return (
    <>
    
    <div class="search">
    <a href="/">
    <img src="/assets/MEAT GRAM (1).jpg" alt="" />
    </a>
    
    <SearchBar />

    <div className="boxthree">
    <i className="bi bi-tags" style={{color: "white"}}><p>Category</p></i>
    <a href="/cart">
    <i className="bi bi-cart2" style={{color: "white"}}><p>Cart</p></i>
</a>
    {isAuthenticated?
    <div className={`cart mb-2`}>
            <div className="dropdown">
              <a
                className="btn btn-secondary dropdown-toggle"
                href="/profile"
                role="button"
                id="profileDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-user" aria-hidden="true"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
              <li>
                  <a className="dropdown-item text-dark" href="/profile">
                    My Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-dark" href="/user/myorder">
                    My Orders
                  </a>
                </li>
                <li>
                  <button className="dropdown-item text-dark" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>:
        
                        <button
                          className="btn "
                          onClick={handleLoginClick}
                        >
                              <i className="bi bi-person-circle bi-10x" style={{color: "white", fontSize: "24px"}}><p>Login</p></i>

                        </button>
          }
          
          <LoginModal
            showLoginModal={showLoginModal}
            handleLoginModalClose={handleLoginModalClose}
            handleLoginSuccess={handleLoginSuccess}
          />
  </div>
</div>
    </>
  );
}

export default Navigation;


// <div className={`first ${isToggleOn ? 'active' : ''}`} >
             
//              <div className="search">
//                 <SearchBar toggleMenu={toggleMenu} />
//             </div>
          
//           <div className="category">
//             <a href="/category" className="">
//               <img src="/images/immediate.png" className="me-2" alt="immediate" />
//               <span>Category</span>
//             </a>
//           </div>
//           <div className="product">
//             <a href="/product/allproducts" className="">
//               <i className="fa fa-product-hunt" aria-hidden="true"></i>
//               <span>Product</span>
//             </a>
//           </div>
    
//           <div className={`cart  ${isToggleOn ? 'add-margin-cart' : ''}`} >
//             <a href="/cart" className="" >
//               <i className="fa fa-shopping-cart " aria-hidden="true"></i>
//               <span>Cart</span>
//             </a>
//           </div>
          
          // {isAuthenticated?<div className={`cart mt-2 ${isToggleOn ? 'add-margin-cart' : ''}`}>
          //   <div className="dropdown">
          //     <a
          //       className="btn btn-secondary dropdown-toggle"
          //       href="/profile"
          //       role="button"
          //       id="profileDropdown"
          //       data-bs-toggle="dropdown"
          //       aria-expanded="false"
          //     >
          //       <i className="fa fa-user" aria-hidden="true"></i>
          //     </a>
          //     <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
          //     <li>
          //         <a className="dropdown-item text-dark" href="/profile">
          //           My Profile
          //         </a>
          //       </li>
          //       <li>
          //         <a className="dropdown-item text-dark" href="/user/myorder">
          //           My Orders
          //         </a>
          //       </li>
          //       <li>
          //         <button className="dropdown-item text-dark" onClick={handleLogout}>
          //           Logout
          //         </button>
          //       </li>
          //     </ul>
          //   </div>
          // </div>:
          // <div className="cart">
          //               <button
          //                 className="btn btn-light mr-8"
          //                 onClick={handleLoginClick}
          //                 style={{ paddingRight: "1rem"}}
          //               >
          //                 <i className="fa fa-sign-in me-2" aria-hidden="true"></i>{" "}
          //                 LogIn
          //               </button>
          //       </div>
          // }
          
          // <LoginModal
          //   showLoginModal={showLoginModal}
          //   handleLoginModalClose={handleLoginModalClose}
          //   handleLoginSuccess={handleLoginSuccess}
          // />
          
//         </div>