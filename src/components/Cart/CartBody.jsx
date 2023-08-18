import React,{useState,useEffect} from "react";
import Cookies from 'js-cookie';
import backendUrl from "../../config";
import CheckoutPage from "../orders/CheckoutPage/CheckoutPage";
import {  Form } from 'react-bootstrap';

function CartBody(){
    const [showCheckout, setShowCheckout] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');




    useEffect(() => {
        fetchCartItems();
      }, []);
    const fetchCartItems = async () => {
        try {
          
          const token = Cookies.get('token');
          const response = await fetch(`${backendUrl}/api/cart/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          
          if (response.ok) {
            const data = await response.json();
            
            setCartItems(data.cartItems);
    
          } else {
            console.log('Failed to fetch cart items');
          }
        } catch (error) {
          console.log('Error fetching cart items:', error);
        }
      };

      const removeItemFromCart = async (itemId) => {
        try {
          // const token = localStorage.getItem('token');
          // const userId = localStorage.getItem('userId');
          const token = Cookies.get('token');
          const userId = Cookies.get('userId');
          // Remove the item from the cartItems array on the client-side
          const updatedCartItems = cartItems.filter(item => item.item._id !== itemId);
          setCartItems(updatedCartItems);
      
          const response = await fetch(`${backendUrl}/api/cart/${itemId}`, {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json', // Add the Content-Type header
            },
            body: JSON.stringify({ userId }), // Send the userId in the request body
          });
      
          if (response.ok) {
            // Item removed successfully, no need to fetch updated cart items
            console.log('Item removed from cart successfully');
            // <Alert variant="Success"> </Alert>
          } else {
            // Revert back the cart items if there is an error
            setCartItems(cartItems);
            console.log('Failed to remove item from cart');
          }
        } catch (error) {
          console.log('Error removing item from cart:', error);
        }
      };

      const calculateTotalValue = () => {
        
        return cartItems.reduce((total, item) => total + item.quantity * item.item.price, 0);
     };

   const calculateTotalItem=()=>{
    return cartItems.reduce((total, item) => total + item.quantity, 0);
    }
return (
    <>
{showCheckout ? (
      <CheckoutPage name={name} mobileNumber={mobileNumber} address={address} amount={calculateTotalValue()} numberOfItem={calculateTotalItem()} products={cartItems}/>
    ) : (
    <div>
     
    


    {cartItems.length === 0 ? (
        <div className="text-center">
                                <p>Your cart is feeling a bit empty...</p>
                                <img className="img img-fluid" src="./images/empty_cart_.png" alt="Illustration" />
                            </div>
      ) : (
    <div className="container mt-5">
<div className="row">
    <div className="col-md-8">
        <div className="card p-4">
            <h2 className="mb-4">Your Cart</h2>
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item,index) => (
                <tr key={`${item.item._id}-${index}`}>
                  <td>{item.item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.item.price}</td>
                  <td>{item.quantity * item.item.price}</td>
                  <td>
                    <button className="btn btn-danger btn-responsive" onClick={() => removeItemFromCart(item.item._id)}>Remove</button>
                  </td>
                </tr>
                
              ))}
              <tr>
              <td colSpan="3"></td>
              <th>Total:</th>
              <td>Rs.{calculateTotalValue()}</td>
              </tr>
            </tbody>
                </table>
          </div>

        
        </div>
    </div>


    <div className="col-md-4">
        <div className="card p-4">
            <h2 className="mb-4">Enter Your Details</h2>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your contact number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>

            {/* <div className="mb-3">
                <input type="text" className="form-control" placeholder="Full Name"  required/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Mobile Number" required/>
            </div>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Address" required></textarea>
            </div> */}
            <button className="btn btn-primary" onClick={() => setShowCheckout(true)}>Proceed to Checkout</button>
        </div>
    </div>
</div>
</div>
)}


</div>
    
     )}
</>
);
}

export default CartBody;



// thhis line is printed in cartapp place 
    // {/* <div>
      // <h1>Cart</h1>
      // {cartItems.length === 0 ? (
        // <p>Your cart is empty.</p>
    //   ) : (
    //     <div>
        //   <table className="table">
        //     <thead>
        //       <tr>
        //         <th>Product</th>
        //         <th>Quantity</th>
        //         <th>Price</th>
        //         <th>Subtotal</th>
        //         <th>Action</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       {cartItems.map((item,index) => (
        //         <tr key={`${item.item._id}-${index}`}>
        //           <td>{item.item.name}</td>
        //           <td>{item.item.quantity}</td>
        //           <td>{item.item.price}</td>
        //           <td>{item.quantity * item.item.price}</td>
        //           <td>
        //             <button onClick={() => removeItemFromCart(item.item._id)}>Remove</button>
        //           </td>
        //         </tr>
        //       ))}
        //     </tbody>
        //   </table>
    //       <p>Total: {calculateTotalValue()}</p>
        //   <button className="btn btn-primary" onClick={() => setShowCheckout(true)}>
        //   Buy Now
        // </button>
         
    //     </div>
    //   )}
    // </div> 



//     <section class="addline">
//     <div class="container" id="checkout_content">
//         <div class="address">
//            <h5 id="total_items">Total item - 1</h5>
//            <p>address:</p>
//            <h3 id="delivery_address">Home: 98, Prestige Avenue, Near School Vidisha - 464001</h3>
//            <button onclick="navigateToDashboard();">Change</button><br/>
//            {/* <!-- <h3>The product will be delivered by </h3> -->
//            <!-- <p>11-Nov-2022</p> --> */}

//         </div>
//         <div class="bill">
//             <h6 class="el">BILL DETAILS</h6>
//             <div class="left-right">
//                 <div class="left">
//                     <p>subtotal</p>
//                     <p>Delivery Charge</p>
//                     <p class="all">Discount</p>
                   
//                     <h6>total</h6>
//                 </div>

//                 <div class="right">
//                     <p id="subtotal">---</p>
//                     <p id="delivery_charge">40.00</p>
//                     <p class="all" id="discount">0.00</p>
//                     <h6 id="total">228.00</h6>
//                 </div>
//             </div>
//         </div>

//         <div class="button-bill-wrap">
//             <div class="first">
//                 Total : 220Rs
//             </div>
//             <div class="first">
//                 {/* <a href="<?php echo $siteUrl; ?>ordersummary">Proceed To Checkout</a> */}
//                 <button className="button" onClick={() => setShowCheckout(true)}>
//           Buy Now
//         </button>
//             </div>
//         </div>
       

//     </div>
// </section>