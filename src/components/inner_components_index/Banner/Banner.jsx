import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/js/bootstrap';
import axios from "axios";
import backendUrl from "../../../config";
import './Banner.css'; // Import your custom styles for the banner if needed
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
    <div id="homepage-slider" class="st-slider">

    <input type="radio" class="cs_anchor radio" name="slider" id="slide1"/>
    <input type="radio" class="cs_anchor radio" name="slider" id="slide2"/>
    <input type="radio" class="cs_anchor radio" name="slider" id="slide3"/>
    <input type="radio" class="cs_anchor radio" name="slider" id="play1" checked=""/>

    <div class="images">
       <div class="images-inner">
        <div class="image-slide">
            <img src="https://i.ytimg.com/vi/rYKgKfvpuus/maxresdefault.jpg" alt="" class="image bg-yellow" />
        </div>
        <div class="image-slide">
          <img src="https://i.ytimg.com/vi/rYKgKfvpuus/maxresdefault.jpg" alt="" class="image bg-yellow" />
        </div>
        <div class="image-slide">
          <img src="https://i.ytimg.com/vi/rYKgKfvpuus/maxresdefault.jpg" alt="" class="image bg-yellow" />
        </div>
      </div>
    </div>
  
    <div class="labels">
        <label for="slide1" class="label">text slide 1</label>
        <label for="slide2" class="label">text slide 2</label>
        <label for="slide3" class="label">text slide 3</label>
      
        <div class="fake-radio">
          <label for="slide1" class="radio-btn"></label>
          <label for="slide2" class="radio-btn"></label>
          <label for="slide3" class="radio-btn"></label>
        </div>
    </div>
</div>
  );
}

export default Banner;



// {/* <section className="banner">
// <div>
// <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
//     <div className="carousel-inner">


//     {images.map((banner, index) => (
        
//       <div className="carousel-item active">
// <img src={`${backendUrl}${banner.image}`} alt={`Banner ${index + 1}`} />
// </div>
//       ))}

//     </div>
//     <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
//       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span className="visually-hidden">Previous</span>
//     </button>
//     <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
//       <span className="carousel-control-next-icon" aria-hidden="true"></span>
//       <span className="visually-hidden">Next</span>
//     </button>
//   </div>
//   </div>
//     </section> */}
{/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
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
</div> */}




