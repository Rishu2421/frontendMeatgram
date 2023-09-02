import React from 'react';
import AddToCartButton from './AddToCartButton/AddToCartButton';
import backendUrl from '../../config';
function Card({ product }  ) {
    const { name, image, quantity, numOfPieces, description, mrp } = product;

  return (

    
    <div class="food-items">
    <img src="./assets/fish14.png" />
    <div class="details">
      <div class="details-sub">
        <h5>Pomfret Small-Whole Cleaned</h5>
      </div>
      <form class="quantity-form">
        <input type="radio" name="quantity" value="0.5" id="quantity-0.5" checked />
        <label for="quantity-0.5">500gm Qty. <span>Rs.610</span></label>
        <br />
        <input type="radio" name="quantity" value="1" id="quantity-1" />
        <label for="quantity-1">1kg Qty. <span>Rs.1200</span></label>
    </form>
    <button class="add-to-cart-btn">Add To Cart</button>
    </div>
  </div>
  );
}

export default Card;



// <div className="box">
// <div className="image-text" style={{borderRadius:"20px"}}>
//   <a href={`/products?ids=${product._id}`} >
//   <div
//   className="image img img-fluid"
//   style={{
//     // width: '19rem',
//     height: '18rem',
//     borderRadius: '15px',
//     backgroundImage: `url(${backendUrl}${image})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center'
//   }}
// ></div>
//   </a>
//   <div className="text text-center">
//     <h5>{name} - Pack Of {numOfPieces}</h5>
//     <p>
//   {description.split(' ').slice(0, 40).join(' ')}
//   {description.split(' ').length > 40 ? ' ...' : ''}
// </p>
//     <h6 className="d-inline me-4">Pieces {numOfPieces}</h6> 
//     <h6 className="d-inline">Quantity {quantity}</h6>
//     <div className="button-text">
//       <span className="mrp-text">MRP: <i className="fa fa-inr" aria-hidden="true"></i>{mrp}</span>
    
//       <AddToCartButton product={product} />
//     </div>
//   </div>
// </div>
// </div>



// Changed this much only from the main

// <div className="image">
//             <img
//               className="card-image"
//               src={`${backendUrl}${image}`}
//               style={{ width: '25rem', height: '18rem', borderRadius: '15px' }}
//               alt={name}
//             />
//           </div>