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

  return (
    <section className="productWrap mt-40">
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <div
              className="images-product img img-fluid"
              style={{
                borderRadius: "20px",
                backgroundImage: `url(${backendUrl}${image})`,
              }}
            ></div>
          </div>
          <div className="col-md-6 mt-10">
            <div className="text-wrap mt-2">
              <h3>{name}</h3>
              <div className="list-info">
                <ul>
                  <li>{isBoneless && "Boneless"}</li>
                  <li>|</li>
                  <li>Bite size pieces</li>
                </ul>
              </div>

              <p>{description}</p>
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
                <AddToCartButton product={product} count={count} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductWrap;
