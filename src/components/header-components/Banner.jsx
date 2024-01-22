import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/src/images/banners/banner1.jpg",
    "/src/images/banners/banner2.jpg",
    "/src/images/banners/banner3.jpg",
    "/src/images/banners/banner4.jpg",
    "/src/images/banners/banner5.jpg",
    "/src/images/banners/banner6.jpg",
    "/src/images/banners/banner7.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2500);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full m-0 mx-auto">
      <button
        className="bg-gray-500 rounded-full  absolute top-1/2 left-0 -translate-y-1/2 bg-[rgba(0, 0, 0, 0.5)] text-white border-none font-bold p-[10px 15px] pointer p-4 "
        onClick={prevSlide}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <img
        src={images[currentSlide]}
        alt={`Banner Slide ${currentSlide + 1}`}
        className="w-full h-[300px] object-cover"
      />
      <button
        className="bg-gray-500 rounded-full  absolute top-1/2 right-0 -translate-y-1/2 bg-[rgba(0, 0, 0, 0.5)] text-white border-none font-bold p-[10px 15px] pointer p-4"
        onClick={nextSlide}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};
