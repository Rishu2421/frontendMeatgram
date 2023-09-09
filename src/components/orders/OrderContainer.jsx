import React, { useState } from 'react';
import axios from 'axios';
import OrderItem from './OrderItem';
import backendUrl from '../../config';

const OrderContainer = ({ orders, isAdmin }) => {
  const [isLoading, setLoading] = useState(false);

  console.log(orders)
  const updateOrderStatus = async (orderId, status) => {
    setLoading(true);
    try {
      const response = await axios.put(`${backendUrl}/api/orders/admin/${orderId}`, { status });
      console.log(response.data); // Log the updated order details
      alert('Status updated successfully');
    } catch (error) {
      console.error('Error updating order status:', error);
      alert('Failed to update status');
    }
    setLoading(false);
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        {orders && orders.map((order, index) => (
          <div key={index} className="mb-4">
            <OrderItem
              key={order._id}
              orderDate={order.createdAt}
              orderNumber={order._id}
              totalAmount={order.amount}
              mobileNumber={order.mobileNumber}
              address={order.address}
              products={order.items && order.items.map((item) => ({
                imageUrl: `${backendUrl}${item.item.image}`,
                productName: item.item.name,
                price: `Rs.${item.item.quantityAndMrp[0].mrp}`,
                status: order.status,
                productId: `${item.item._id}`
              }))}
            />
            {isAdmin && (
              <div>
              <div>Pincode {order.pincode}</div>
              <div className="mt-2">
                <p>Status: {order.status}</p>
                <select
                  value={order.status}
                  onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                  disabled={isLoading}
                  className="form-select"
                >
                  <option value="Not processed">Not processed</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
                {isLoading && <span className="ms-2">Changing status...</span>}
              </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderContainer;













// import React, { useState } from 'react';
// import axios from 'axios';
// import OrderItem from './OrderItem';
// import backendUrl from '../../config';

// const OrderContainer = ({ orders, isAdmin }) => {
//   const [isLoading, setLoading] = useState(false);

//   console.log(orders)
//   const updateOrderStatus = async (orderId, status) => {
//     setLoading(true);
//     try {
//       const response = await axios.put(`${backendUrl}/api/orders/admin/${orderId}`, { status });
//       console.log(response.data); // Log the updated order details
//       alert('Status updated successfully');
//     } catch (error) {
//       console.error('Error updating order status:', error);
//       alert('Failed to update status');
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="card mt-4">
//       <div className="card-body">
//         {orders.map((order, index) => (
//           <div key={index} className="mb-4">
//             <OrderItem
//               key={order._id}
//               orderDate={order.createdAt}
//               orderNumber={order._id}
//               totalAmount={order.amount}
//               mobileNumber={order.mobileNumber}
//               address={order.address}
//               products={order.items.map((item) => ({
//                 imageUrl: `${backendUrl}${item.item.image}`,
//                 productName: item.item.name,
//                 price: `Rs.${item.item.price}`,
//                 status: order.status,
//                 productId: `${item.item._id}`
//               }))}
//             />
//             {isAdmin && (
//               <div>
//               <div>Store selected : {order.storeLocation}</div>
//               <div className="mt-2">
//                 <p>Status: {order.status}</p>
//                 <select
//                   value={order.status}
//                   onChange={(e) => updateOrderStatus(order._id, e.target.value)}
//                   disabled={isLoading}
//                   className="form-select"
//                 >
//                   <option value="Not processed">Not processed</option>
//                   <option value="Processing">Processing</option>
//                   <option value="Shipped">Shipped</option>
//                   <option value="Delivered">Delivered</option>
//                   <option value="Cancelled">Cancelled</option>
//                 </select>
//                 {isLoading && <span className="ms-2">Changing status...</span>}
//               </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OrderContainer;












// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import OrderItem from './OrderItem';
// // import backendUrl from '../../config';
// // const OrderContainer = ({ orders, isAdmin }) => {
// //   const [isLoading, setLoading] = useState(false);
// //   console.log(orders);
// //   const updateOrderStatus = async (orderId, status) => {
// //     setLoading(true);
// //     try {
// //       const response = await axios.put(`${backendUrl}/api/orders/admin/${orderId}`, { status });
// //       console.log(response.data); // Log the updated order details
// //       alert('Status updated successfully');
// //     } catch (error) {
// //       console.error('Error updating order status:', error);
// //       alert('Failed to update status');
// //     }
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="card mt-4" style={{ width: "90rem" }}>
// //       <div className="card-body">
// //         {orders.map((order, index) => (
// //           <div key={index}>
// //             <OrderItem
// //               key={order._id}
// //               orderDate={order.createdAt}
// //               orderNumber={order._id}
// //               totalAmount={order.amount}
// //               mobileNumber={order.mobileNumber}
// //               address={order.address}
// //               products={order.items.map((item) => ({
// //                 imageUrl: `${backendUrl}${item.item.image}`,
// //                 productName: item.item.name,
// //                 price: `$${item.item.price}`,
// //                 status: order.status,
// //               }))}
// //             />
// //             {isAdmin && (
// //               <div>
// //                 <p>Status: {order.status}</p>
// //                 <select
// //                   value={order.status}
// //                   onChange={(e) => updateOrderStatus(order._id, e.target.value)}
// //                   disabled={isLoading}
// //                 >
// //                   <option value="Not processed">Not processed</option>
// //                   <option value="Processing">Processing</option>
// //                   <option value="Shipped">Shipped</option>
// //                   <option value="Delivered">Delivered</option>
// //                   <option value="Cancelled">Cancelled</option>
// //                 </select>
// //                 {isLoading && <span>Changing status...</span>}
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default OrderContainer;
