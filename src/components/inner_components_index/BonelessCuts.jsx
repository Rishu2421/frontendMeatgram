import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        console.error("Error fetching boneless items:", error);
      });
  }, []);

  return (
    <section className="category-wrap Boneless-wrap">
      <div className="container">
        <div className="title">
          <h2>Boneless cut</h2>
        </div>
        <div className="row">
          {items.map((item, index) => (
            <div className="col-md-4" key={index}>
              <Link
                to={`/products?ids=${item._id}`}
                className="product-link text-decoration-none no-focus-outline"
              >
                <div
                  className="image img img-fluid"
                  style={{
                    // width: '19rem',
                    borderRadius: "20px",
                    height: "10rem",
                    backgroundImage: `url(${backendUrl}${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="text">
                  <h3>{item.name}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BonelessCuts;

// only this much changed for img part
{
  /* <div className="image">
<img 
src={`${backendUrl}${item.image}`} 
alt={`Boneless ${index + 1}`} 
style={{ width: "22rem",height:"18rem", borderRadius: "15px" }}
/>
</div> */
}
