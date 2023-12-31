import React, { useEffect, useState } from "react";
import backendUrl from "../../config";
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
    <section className="category-wrap selling-product">
      <div className="container">
        <div className="title">
          <h2>Top selling products</h2>
        </div>
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-3" key={index}>
              <div className="image">
                <img
                  src={`${backendUrl}${product.image}`}
                  alt={`Product ${index + 1}`}
                  style={{ width: "12rem", borderRadius: "20px" ,height:"12rem" }}
                />
              </div>
              <div className="text">
                <h3>{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopSellingProducts;
