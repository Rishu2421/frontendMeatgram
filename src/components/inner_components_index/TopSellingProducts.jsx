import React, { useEffect, useState } from "react";
import backendUrl from "../../config";
import Items from "../product/Items";
import Card from "../product/Card";

function TopSellingProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the top-selling products from the backend
    fetch(`${backendUrl}/api/products/topselling`)
      .then((response) => response.json())
      .then((data) => {
        // Update the products state with the fetched data
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching top-selling products:', error);
      });
  }, []);

  return (
    <div className="menu bestsellers-container" id={`scroll1`}>
      <div className="heading">
        <h1>Top Selling Marinates</h1>
        <h3>&mdash; Menu &mdash;</h3>
      </div>
      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
}

export default TopSellingProducts;



// <section className="category-wrap selling-product">
//       <div className="container">
//         <div className="title">
//           <h2>Top selling products</h2>
//         </div>
//         <div className="row">
//           {products.map((product, index) => (
//             <div className="col-md-3" key={index}>
//   <div
//     className="image"
//     style={{
//       backgroundImage: `url(${backendUrl}${product.image})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       borderRadius: '20px',
//       height:'5rem',
//       // width: '5rem', // Set width to fill the column
//       paddingTop: '100%',
//     }}
//   ></div>
//   <div className="text mt-auto">
//     <h3>{product.name}</h3>
//   </div>
// </div>


//           ))}
//         </div>
//       </div>
//     </section>