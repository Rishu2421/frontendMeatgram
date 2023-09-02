import React, { useEffect, useState } from "react";
import backendUrl from "../../config";
function BonelessCuts() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch the boneless items from the backend
    fetch(`${backendUrl}/api/products/boneless`)
      .then((response) => response.json())
      .then((data) => {
        // Update the items state with the fetched data
        setItems(data);
      })
      .catch((error) => {
        console.error('Error fetching boneless items:', error);
      });
  }, []);

  return (
    
    <div class="menu second-container">
    <div class="heading">
      <h1>Boneless Cut</h1>
      <h3>&mdash; MENU &mdash;</h3>
    </div>

    <div class="food-items">
      <img src="./assets/Home (6).png" />
      <div class="details">
        <div class="details-sub">
          <h5>Chicken Thigh Boneless</h5>
          
        </div>
        <p>
          Tender cuts of antibiotic free chicken thighs. These boneless cuts of chicken are skinless and most suitable for preparing recipes such as tikkas, curries and continental dishes.
        </p>
        <form class="quantity-form">
          <input type="radio" name="quantity" value="0.5" id="quantity-0.5" checked />
          <label for="quantity-0.5">0.5kg Qty. <span>Rs.210</span></label>
          <br />
          <input type="radio" name="quantity" value="1" id="quantity-1" />
          <label for="quantity-1">1kg Qty. <span>Rs.410</span></label>
      </form>
      <button class="add-to-cart-btn">Add To Cart</button>
      </div>
    </div>



    <div class="food-items">
      <img src="./assets//Home (7).png" />
      <div class="details">
          <div class="details-sub">
              <h5>Chicken Premium Curry Cut</h5>
              <h5 class="price"></h5>
          </div>
          <p>
              A whole skinless chicken cut into 16-18 bone-in pieces. Premium quality chicken that is free from all kinds of antibiotic and pesticide residue. All our meats are hygienically handled, cleaned, vacuum pack.
          </p>
          <form class="quantity-form">
              <input type="radio" name="quantity" value="0.5" id="quantity-0.5" checked />
              <label for="quantity-0.5">0.5kg Qty. <span>Rs.150</span></label>
              <br />
              <input type="radio" name="quantity" value="1" id="quantity-1" />
              <label for="quantity-1">1kg Qty. <span>Rs.300</span></label>
          </form>
          <button class="add-to-cart-btn">Add To Cart</button>
      </div>
  </div>


    <div class="food-items">
      <img src="./assets/Home (4).png" />
      <div class="details">
        <div class="details-sub">
          <h5>Chicken Drum Sticks</h5>
          
        </div>
        <p>
          Raw, tender and Juicy lower portions of Chicken legs. Perfect for tandoori dishes.
        </p>
        <form class="quantity-form">
          <input type="radio" name="quantity" value="0.5" id="quantity-0.5" checked />
          <label for="quantity-0.5">0.5kg Qty. <span>Rs.175</span></label>
          <br />
          <input type="radio" name="quantity" value="1" id="quantity-1" />
          <label for="quantity-1">1kg Qty. <span>Rs.350</span></label>
      </form>
      <button class="add-to-cart-btn">Add To Cart</button>
      </div>
    </div>


  </div>

  );
}

export default BonelessCuts;



// <section className="category-wrap Boneless-wrap">
//       <div className="container">
//         <div className="title">
//           <h2>Boneless cut</h2>
//         </div>
//         <div className="row">
//           {items.map((item, index) => (
//             <div className="col-md-4" key={index}>
//             <div
//         className="image img img-fluid"
//         style={{
//           // width: '19rem',
//           height: '18rem',
//           borderRadius: '15px',
//           backgroundImage: `url(${backendUrl}${item.image})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}
//       ></div>
//               <div className="text">
//                 <h3>{item.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

// only this much changed for img part 
{/* <div className="image">
<img 
src={`${backendUrl}${item.image}`} 
alt={`Boneless ${index + 1}`} 
style={{ width: "22rem",height:"18rem", borderRadius: "15px" }}
/>
</div> */}