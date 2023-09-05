import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Search/SearchBar";
import LoginModal from "./LoginModal";
import Cookies from 'js-cookie';

function Navigation({ isToggleOn, setIsToggleOpen }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    // Check for authentication token on component mount
    const token = Cookies.get('token');

    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    setIsAuthenticated(true);
    window.location.reload();
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

  return (
    <>
      <div className="search">
        <a href="/" className="logo">
          <img src="/assets/MEAT GRAM (1).jpg" alt="" />
        </a>

        {/* <SearchBar /> */}

        <div className="boxthree">
          <a href="/cart" className="mw-3 text-decoration-none">
            <i className="bi bi-cart2" style={{ color: "white" }}><p>Cart</p></i>
          </a>

          {isAuthenticated ?
            <div className={`mb-2 dropdown`}>
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="profileDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-user" aria-hidden="true"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                {/* <a className="dropdown-item text-dark" href="/profile">
                  My Profile
                </a> */}
                <a className="dropdown-item text-dark" href="/user/myorder">
                  My Orders
                </a>
                <button className="dropdown-item text-dark" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div> :
            <button
              className="btn"
              onClick={handleLoginClick}
            >
              <i className="bi bi-person-circle bi-10x" style={{ color: "white", fontSize: "24px" }}><p>Login</p></i>
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
