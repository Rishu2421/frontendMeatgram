import React from "react";

function AboutUs() {
  return (
    <div class="about" id="Aboutus">
      <div class="about_main d-flex align-items-center justify-content-center">
        <div class="image">
          <img src="/assets/chicken.jpeg" />
        </div>

        <div class="about_text">
          <h1><span>About</span>Us</h1>
          <p>
            Indulge in the luxurious convenience of having our premium selection
            of freshly cut meats and seafood, Experience the exceptional quality
            of our tender cuts, with our pricing structured to be accessible to
            all. Furthermore, we take pride in our commitment to natural
            ingredients, having earned all the necessary FSSAI safety and
            quality certifications that guarantee our product's authenticity and
            purity.
          </p>
        </div>
      </div>

      <a href="/product/all-product" class="about_btn">Order Now</a>
    </div>

  );
}

export default AboutUs;
