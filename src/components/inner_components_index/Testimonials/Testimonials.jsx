import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Testimonial from './Testimonial';
import './Testimonial.css'
function Testimonials() {
  return (
    <section className="section__container testimonial-container">
      <h2>Testimonials</h2>
      <h1>What our customers say</h1>
      <Carousel>
        <Carousel.Item>
          <div className="section__card">
            <span>
              <i className="ri-double-quotes-l"></i>
            </span>
            <h4>Our Clients Review</h4>
            <p>
              Your complete system from information, medium of communication,
              acceptance of order, confirmation, and delivery is extremely
              efficient, responsive, and user friendly.
            </p>
            <img src="/assets/user.png" alt="user" />
            <h5>Vinayak</h5>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="section__card">
            <span>
              <i className="ri-double-quotes-l"></i>
            </span>
            <h4>Our Clients Review</h4>
            <p>
              Mutton quality is very good ....Good you all have started selling
              fresh hygienic non-veg items ...This was very much needed here in
              Bhopal .... Thank you! Regards,
            </p>
            <img src="/assets/user.png" alt="user" />
            <h5>Mamta Sinha</h5>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="section__card">
            <span>
              <i className="ri-double-quotes-l"></i>
            </span>
            <h4>Our Clients Review</h4>
            <p>
              Your complete system from information, medium of communication,
              acceptance of order, confirmation, and delivery is extremely
              efficient, responsive, and user friendly.
            </p>
            <img src="/assets/user.png" alt="user" />
            <h5>Vinayak</h5>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Testimonials;


