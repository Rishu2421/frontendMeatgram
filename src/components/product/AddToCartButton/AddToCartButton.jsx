import React, { useState } from 'react';
import '../Card.css';
import Cookies from 'js-cookie';
import backendUrl from '../../../config';
const AddToCartButton = ({ product }) => {
  const { _id } = product;
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(false);

  const addToCart = async () => {
    try {
      setIsAddingToCart(true);
      const token = Cookies.get('token');
      const userId = Cookies.get('userId');
      // const token = localStorage.getItem('token');
      // const userId = localStorage.getItem('userId');
      const response = await fetch(`${backendUrl}/api/cart/addItem`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
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
        console.log('Failed to add item to the cart');
      }
    } catch (error) {
      console.log('Error adding item to the cart:', error);
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div>
      <button className="add-to-cart-button btn btn-danger btn-lg custom-button" onClick={addToCart} disabled={isAddingToCart}>
        {isAddingToCart ? 'Adding...' : 'Add to Cart'}
      </button>
      {isItemAdded && (
        <div className="added-message">
          Item added to cart!
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
