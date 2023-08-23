import React from "react";
import AddToCartButton from "./AddToCartButton/AddToCartButton";
import backendUrl from "../../config";
function Card({ product }) {
  const { name, image, quantity, numOfPieces, description, mrp } = product;

  return (
    <div className="box">
      <div className="image-text" style={{ borderRadius: "20px" }}>
        <a href={`/products?ids=${product._id}`}>
          <div
            className="image img img-fluid"
            style={{
              // width: '19rem',
              height: "13rem",
              borderRadius: "15px",
              backgroundImage: `url(${backendUrl}${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </a>
        <div className="text text-center">
          <h5>
            {name} - Pack Of {numOfPieces}
          </h5>

          <h6 className="d-inline me-4">Pieces: {numOfPieces}</h6>
          <h6 className="d-inline">Quantity: {quantity}</h6>
          <div className="button-text">
            <span className="mrp-text">
              MRP: <i className="fa fa-inr" aria-hidden="true"></i>
              {mrp}
            </span>

            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

// Changed this much only from the main

// <div className="image">
//             <img
//               className="card-image"
//               src={`${backendUrl}${image}`}
//               style={{ width: '25rem', height: '18rem', borderRadius: '15px' }}
//               alt={name}
//             />
//           </div>
