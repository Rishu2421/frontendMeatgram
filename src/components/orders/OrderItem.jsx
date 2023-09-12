import React from 'react';

const OrderItem = ({ orderDate, orderNumber, totalAmount, products, address, mobileNumber }) => {
  // console.log(products)
  return (
    
    <div className="order-container align-items-center justify-content-center">
      <div className="order" style={{ backgroundColor: "#c6bec114", borderRadius: "15px", padding: "20px" }}>
        <div className="order-details">
          <div className="row justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6">
              <p><b>Date placed:</b> <time dateTime="2021-01-22">{orderDate}</time></p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p><b>Order number:</b> {orderNumber}</p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p><b>Total amount paid:</b> {totalAmount}</p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p><b>Address:</b> {address}</p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p><b>Mobile:</b> {mobileNumber}</p>
            </div>
          </div>

          <table className="table">
            <caption>Products</caption>
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                {/* <th scope="col">Info</th> */}
              </tr>
            </thead>
            <tbody>
            

            {products.map((product, index) => (
                <tr key={index}>
                  <td>
                    <div className="product-image">
                      {product.deleted ? (
                        <span className="text-danger">Admin deleted this product</span>
                      ) : (
                        <a href={`/products?ids=${product.productId}`}>
                          <img src={product.imageUrl} alt={product.productName} className="img-fluid" style={{ width:"10rem"}} />
                        </a>
                      )}
                    </div>
                  </td>
                  <td>{product.productName}</td>
                  <td>{product.price}</td>
                  <td>{product.status}</td>
                </tr>
              ))}



            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;


// {products.map((product, index) => (
//   <tr key={index}>
//     <td>
//       <div className="product-image">
//       <a href={`/products?ids=${product.productId}`}>
//         <img src={product.imageUrl} alt={product.productName} className="img-fluid" style={{ width:"10rem"}} />
//         </a>
//       </div>
//     </td>
//     <td>{product.productName}</td>
//     <td>{product.price}</td>
//     <td>{product.status}</td>
//   </tr>
// ))}