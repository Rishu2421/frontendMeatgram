import React, { useState } from "react";
import "../Card.css";
import Cookies from "js-cookie";
import backendUrl from "../../../config";
import LoginModal from "../../Navigation/LoginModal"; // Import your LoginModal component

const AddToCartButton = ({ product, count }) => {
  const { _id } = product;
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false); // State to control the login modal

  const addToCart = async () => {
    try {
      setIsAddingToCart(true);
      const token = Cookies.get("token");
      const userId = Cookies.get("userId");

      if (!token || !userId) {
        setShowLoginPrompt(true); // Show the login modal if not logged in
        setIsAddingToCart(false); // Reset the loading state
        return; // Exit the function
      }

      const response = await fetch(`${backendUrl}/api/cart/addItem`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          itemId: _id,
          quantity: 1,
        }),
      });

      if (response.ok) {
        setIsItemAdded(true);
        setTimeout(() => {
          setIsItemAdded(false);
        }, 2000);
      } else {
        console.log("Failed to add item to the cart");
      }
    } catch (error) {
      console.log("Error adding item to the cart:", error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div>
      <button
        className="add-to-cart-button btn btn-danger btn-lg custom-button"
        onClick={addToCart}
        disabled={isAddingToCart}
      >
        {isAddingToCart ? "Adding..." : "Add to Cart"}
      </button>
      {isItemAdded && <div className="added-message">Item added to cart!</div>}

      {/* Render the LoginModal if the user is prompted to log in */}
      {showLoginPrompt && (
        <LoginModal
          showLoginModal={showLoginPrompt}
          handleLoginModalClose={() => setShowLoginPrompt(false)}
          handleLoginSuccess={() => {
            setShowLoginPrompt(false);
            // addToCart(); // Retry adding the item to cart after logging in
            window.location.reload();
          }}
        />
      )}
    </div>
  );
};

export default AddToCartButton;
