import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Testimonial({ quote, author }) {
  return (
    <Carousel.Item>
      <div className="section__card">
        <span>
          <i className="ri-double-quotes-l"></i>
        </span>
        <h4>Our Clients Review</h4>
        <p>{quote}</p>
        <img src="/assets/user.png" alt="user" />
        <h5>{author}</h5>
      </div>
    </Carousel.Item>
  );
}
export default Testimonial;