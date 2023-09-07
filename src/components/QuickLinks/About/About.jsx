import React from "react";
import "./About.css"; // You can import your custom CSS for styling if needed

function About() {
  return (
    <div className="about-main-container">
      <div className="responsive-container-block Container">
      <img className="mainImg" src="/assets/chicken.jpeg" alt="Meat Image" />

        <div className="text-container mx-auto my-auto">
          <p className="text-blk headingText">About Us</p>

          <p className="text-blk description">
            Get freshly cut meat & seafood delivered to your doorstep in 120 mins. Tender and quality meat. Affordable pricing.
            Chicken, mutton, seafood, and marinades at Meatgram, all our meat is freshly cut, hygienically packed, and delivered right to you.
            Our offerings are fetched directly from local farms, kept chilled not frozen, are 100% halal and 100% natural  with all the required FSSAI safety and quality certifications
            Get our range delivered to your doorstep.
            <br />
            <span>Follow us on Instagram and Facebook: @chersmeatgram</span>
            <br />
            <span>Call :- 7055205010</span>
            <br />
            <span>WhatsApp :- 7055205010</span>
            <br />
            <span>Store Address:- R-02 Panchwati Complex, Panchwati Colony, Lalghati, Bhopal</span>
          </p>

          <button className="explore">Order Now</button>
        
        </div>

    

      </div>

      <div className="footer-container">
        <p>© Copyright 2023 All Rights Reserved</p>
      </div>
    </div>
  );
}

export default About;
