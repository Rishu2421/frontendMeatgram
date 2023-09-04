import React, { useState } from 'react';
import AddToCartButton from './AddToCartButton/AddToCartButton';
import backendUrl from '../../config';

function Card({ product }) {
  const { _id, name, image, quantityAndMrp, description } = product;
  const defaultQuantity = quantityAndMrp?.[0] || {}; // Default to the first detail

  const [selectedDetail, setSelectedDetail] = useState(defaultQuantity);
  const handleQuantityChange = (newDetail) => {
    setSelectedDetail(newDetail);

  };

  return (
    <div className="food-items">
      <img src={`${backendUrl}${image}`} alt={name} />
      <div className="details">
        <div className="title-description">
          <h5>{name}</h5>
          <p className='d-inline'>{description}</p>
        </div>
        <form className="quantity-form">
          {quantityAndMrp &&
            quantityAndMrp.map((detail, index) => (
              <div className='container' key={index}>
                <input
                  type="radio"
                  name={`quantity-${_id}`} // Use a unique name attribute based on the product _id
                  value={index}
                  id={`quantity-${index}-${_id}`} // Include the product _id in the ID
                  checked={selectedDetail === detail}
                  onChange={() => handleQuantityChange(detail)}
                />
                <label htmlFor={`quantity-${index}-${_id}`}>
                  {detail.quantity} Qty. <span>Rs.{detail.mrp} Pcs.{detail.numOfPieces}</span>
                </label>
              </div>
            ))}
        </form>
        <AddToCartButton product={product} quantity={1} selectedQuantityAndMrp={{quantity: selectedDetail.quantity, mrp: selectedDetail.mrp, numOfPieces: selectedDetail.numOfPieces }} />
  
      </div>
    </div>
  );
}

export default Card;



















// import React, { useState } from 'react';
// import AddToCartButton from './AddToCartButton/AddToCartButton';
// import backendUrl from '../../config';

// function Card({ product }) {
//   const { _id, name, image, quantityAndMrp, numOfPieces, description, mrp } = product;
//   const defaultQuantity = quantityAndMrp?.[0]?.quantity || '';

//   const [selectedQuantity, setSelectedQuantity] = useState(defaultQuantity);
//   const handleQuantityChange = (newQuantity) => {
//     setSelectedQuantity(newQuantity);
//   };

//   return (
//     <div className="food-items">
//       <img src={`${backendUrl}${image}`} alt={name} />
//       <div className="details">
//         <div className="details-sub">
//           <h5>{name}</h5>
//         </div>
//         <p className='d-inline'>{description}</p>
//         <form className="quantity-form">
//           {quantityAndMrp &&
//             quantityAndMrp.map((detail, index) => (
//               <div key={index}>
//                 <input
//                   type="radio"
//                   name={`quantity-${_id}`} // Use a unique name attribute based on the product _id
//                   value={detail.quantity}
//                   id={`quantity-${index}-${_id}`} // Include the product _id in the ID
//                   checked={selectedQuantity === detail.quantity}
//                   onChange={() => handleQuantityChange(detail.quantity)}
//                 />
//                 <label htmlFor={`quantity-${index}-${_id}`}>
//                   {detail.quantity} Qty. <span>Rs.{detail.mrp} Pcs.{numOfPieces}</span>
//                 </label>
//                 <br />
//               </div>
//             ))}
//         </form>
//       <AddToCartButton product={product} />
//       </div>
//     </div>
//   );
// }

// export default Card;


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
    
      // <AddToCartButton product={product} />
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