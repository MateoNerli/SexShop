import { useState } from "react";
import "../../styles/style-banner.css";

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/src/images/banner2.jpg",
    "/src/images/banner3.jpg",
    "/src/images/banner4.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="banner-container">
      <button className="banner-button" onClick={prevSlide}>
        &#10094;
      </button>
      <img
        src={images[currentSlide]}
        alt={`Banner Slide ${currentSlide + 1}`}
        className="banner-image"
      />
      <button className="banner-button" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};
