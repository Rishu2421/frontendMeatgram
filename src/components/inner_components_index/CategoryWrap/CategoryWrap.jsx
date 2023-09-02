import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './CategoryWrap.css'
import backendUrl from "../../../config";
function CategoryWrap({onCategoryChoice}) {
  const [categories, setCategories] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect((onCategoryChoice) => {
    // Fetch categories from backend API
    // Replace 'your-backend-api-endpoint' with your actual backend API endpoint
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
   
<div class="category-container">

<a href="/category/fish">
  <div class="circ">
      <div class="crcl">
          <img src="./assets/fish1.jpg" alt="" class="crcl" />
      </div>
      <div class="text">
          <p>FISH</p>
      </div>
  </div>
  </a>



  <a href="./Meatgram Prawns/Prawns.html">
  <div class="circ">
    <div class="crcl">
        <img src="./assets/Prawn.jpg" alt="" class="crcl" />
    </div>
    <div class="text">
        <p>PRAWNS</p>
    </div>
</div>
</a>


  <a href="./Meatgram Chicken/Chicken.html">
  <div class="circ">
      <div class="crcl">
          <img src="./assets/chicken.jpg" alt="" class="crcl" />
      </div>
      <div class="text">
          <p>CHICKEN</p>
      </div>
  </div>
  </a>


  <a href="./Meatgram mutton/mutton.html">
  <div class="circ">
      <div class="crcl">
          <img src="./assets/mutton.png" alt=""  class="crcl"/>
      </div>
      <div class="text">
          <p>MUTTON</p>
      </div>
  </div>
  </a>


  <a href="./Meatgram Ready to cook/Readytocook.html">
  <div class="circ">
      <div class="crcl">
          <img src="./assets/boneless.png" alt="" class="crcl"/>
      </div>
      <div class="text ready">
          <p>READY TO COOK</p>
      </div>
  </div>
  </a>

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
