import React, { useState } from "react";
import "./ProductWrap.css";
import AddToCartButton from "../../product/AddToCartButton/AddToCartButton";
import BoxWrap from "../BoxWrap/BoxWrap";
import backendUrl from "../../../config";

function ProductWrap({ product, userId }) {
  const [count, setCount] = useState(1);
  const {
    name,
    image,
    quantity,
    numOfPieces,
    description,
    mrp,
    discount,
    isBoneless,
  } = product;
  const discountedPrice = mrp - mrp * (discount / 100);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addToCart = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${backendUrl}/api/cart/addItem`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId, // Pass the userId prop
          itemId: product._id,
          quantity: count,
        }),
      });

      if (response.ok) {
        // Item successfully added to the cart
        // Perform any additional actions or show a success message
        console.log("Item added to the cart");
      } else {
        // Handle error response
        console.log("Failed to add item to the cart");
      }
    } catch (error) {
      console.log("Error adding item to the cart:", error);
    }
  };

  return (
    <section className="productWrap mt-40">
      <div className="container" style={{ marginTop: "5rem" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="images">
              <img
                className="img-fluid"
                src={`${backendUrl}${image}`}
                style={{
                  width: "40rem",
                  height: "28rem",
                  borderRadius: "15px",
                }}
                alt={name}
              />
            </div>
          </div>
          <div className="col-md-6 mt-10">
            <div className="text-wrap">
              <h3>{name}</h3>
              <div className="list-info">
                <ul>
                  <li>{isBoneless && "Boneless"}</li>
                  <li>|</li>
                  <li>Bite size pieces</li>
                </ul>
              </div>

              <p>{description}</p>

              {/* <div className="box-wrap">
                <div className="first-div">
                  <div className="list1">
                    <a href="#">
                      <img src="/images/Rectangle 89.png" alt="Pieces" />
                      No. of Pieces {numOfPieces}
                    </a>
                  </div>
                  <div className="list1">
                    <a href="#">
                      <img src="/images/Rectangle 89.png" alt="Serves" />
                      Serves 4
                    </a>
                  </div>
                </div>
                <div className="second-div">
                  <div className="list">
                    <a href="#">
                      <img src="/images/Rectangle 91.png" alt="Weight" />
                      {quantity}
                    </a>
                  </div>
                </div>
              </div> */}
              <BoxWrap numOfPieces={numOfPieces} quantity={quantity} />

              <div className="cart-menu">
                <div className="list">
                  <ul>
                    <li className="text-danger fw-bold">
                      <i className="fa fa-inr" aria-hidden="true"></i>
                      {discountedPrice}
                    </li>
                    <li>
                      <del>MRP {mrp}</del>
                    </li>
                    <li>{discount} % OFF</li>
                    <li>
                      <button>
                        <span onClick={handleDecrement}>-</span>
                        {count}
                        <span
                          onClick={handleIncrement}
                          className="font-weight-bold"
                        >
                          +
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu-button">
                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductWrap;
