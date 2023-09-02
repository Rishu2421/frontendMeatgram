import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './CategoryWrap.css'
import backendUrl from "../../../config";

function CategoryWrap({ onCategoryChoice }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from backend API
    fetch(`${backendUrl}/api/categories`)
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const navigate = useNavigate();
  const handleCategoryClick = (categoryName) => {
    onCategoryChoice(categoryName);
    navigate(`/category/${categoryName}`);
  };

  return (
    <div className="category-container">
      {categories.map(category => (
        <Link
          to={`/category/${category.name.toLowerCase()}`}
          key={category._id} // You should use a unique key for each item in the list
          onClick={() => handleCategoryClick(category.name.toLowerCase())}
        >
          <div className="circ">
            <div className="crcl">
              <img src={`${backendUrl}${category.imageUrl}`} alt="" className="crcl" />
            </div>
            <div className="text">
              <p>{category.name.toUpperCase()}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategoryWrap;


// <section className="category-wrap">
// <div className="container">
//   <div className="title">
//     <h2>Categories</h2>
//   </div>
//   <div className="category-info">
//   {categories.map(category => (
//   <div className="category" key={category._id}>
//     <div className="image">
//       {/* Remember to look when deployed */}
//       <img
//         src={`${backendUrl}${category.imageUrl}#`}
//         style={{ width: "8rem", height: "8rem" }}
//         alt={category.name}
//       />
//     </div>
//     <div
//       className="index-category-text cursor-pointer"
//       onClick={() => handleCategoryClick(category.name)}
//     >
//       {category.name}
//     </div>
  
//   </div>
// ))}
//   </div>
// </div>
// </section>

// import React from "react";

// function Category() {
//   return (
//     <section className="category-wrap">
//       <div className="container">
//         <div className="title">
//           <h2>Categories</h2>
//         </div>
//         <div className="category-info">
//           <div className="category">
//             <div className="image">
//               <img src="images/Group 8.png" alt="Category 1" />
//             </div>
//             <div className="text">
//               <h3>chicken</h3>
//               <h5>
//                 <button>
//                   <i className="fa fa-inr" aria-hidden="true"></i>280
//                   </button>
//               </h5>
//             </div>
//           </div>
//           <div className="category">
//             <div className="image">
//               <img src="images/Group 8.png" alt="Category 2" />
//             </div>
//             <div className="text">
//               <h3>chicken</h3>
//               <h5>
//               <button>
//                   <i className="fa fa-inr" aria-hidden="true"></i>280
//                   </button>
//               </h5>
//             </div>
//           </div>
//           {/* Add more category items here */}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Category;
