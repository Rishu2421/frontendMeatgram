import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        console.log(products);
      })
      .catch((error) => {
        console.error("Error fetching top-selling products:", error);
      });
  }, []);

  return (
    <section className="category-wrap selling-product">
      <div className="container">
        <div className="title">
          <h2>Top selling marinates</h2>
        </div>
        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-3" key={index}>
              <Link
                to={`/products?ids=${product._id}`}
                className="product-link text-decoration-none no-focus-outline"
              >
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(${backendUrl}${product.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    height: "5rem",
                    // width: '5rem', // Set width to fill the column
                    paddingTop: "100%",
                  }}
                ></div>
                <div className="text mt-auto">
                  <h3>{product.name}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopSellingProducts;
