import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/js/bootstrap";
import axios from "axios";
import backendUrl from "../../../config";
import "./Banner.css"; // Import your custom styles for the banner if needed
function Banner() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/admin/getbanner`);
      setImages(response.data);
    } catch (error) {
      console.log("Failed to fetch banner images:", error);
      setImages([]);
    }
  };

  const indicatorStyles = {
    backgroundColor: "#bbb",
    border: "none",
    width: "12px",
    height: "12px",

    borderRadius: "50%",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  };

  const selectedIndicatorStyles = {
    ...indicatorStyles,
    backgroundColor: "#333",
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  return (
    <section className="banner">
      <div className="caraousel-coontainer">
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {images.map((banner, index) => (
              <div className="carousel-item active">
                <img
                  src={`${backendUrl}${banner.image}`}
                  alt={`Banner ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
export default Banner;
{
  /* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/images/BANNER IMAGE.png" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/images/crispy-kentucky-fried-chicken-black-slate-background_123827-22525 (1) 1.png" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide" />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */
}
