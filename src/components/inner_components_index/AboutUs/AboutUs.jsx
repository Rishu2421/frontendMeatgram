import React from "react";

function AboutUs() {
  return (
    <div class="about" id="Aboutus">
      <div class="about_main d-flex align-items-center justify-content-center">
        <div class="image">
         {/* <div className="video"> */}
          <video width="640" height="360" controls>
            <source src="/assets/chicken_about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        {/* </div> */}

          {/* <img style={{borderRadius:"10px"}} src="/assets/Home (2).png" /> */}
        </div>

        <div class="about_text">
          <h1><span>About</span>Us</h1>
          <p>
           Welcome to Cher's MeatGram, your one-stop destination for premium-quality fresh chicken, fish, mutton, and delectable marinades delivered right to your doorstep in Bhopal. We take pride in offering the finest selection of meats to elevate your culinary experience and make every meal a memorable one.
          </p>
        </div>
      </div>

      <a href="/product/all-product" class="about_btn">Order Now</a>
    </div>

  );
}

export default AboutUs;
