// SlidingImage.js
import { useState, useEffect } from "react";
import { images } from "../lightbox/imageData";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function SlidingImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Slide every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [images]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute w-full h-full object-cover transform transition-transform duration-1000 ${
            index === currentIndex ? "translate-x-0" : "-translate-x-full"
          }`}
        />
      ))}
      <button
        className="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-l-full left-0"
        onClick={prevSlide}
      >
        <MdArrowBackIos className='text-xl md:text-2xl' />
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-r-full right-0"
        onClick={nextSlide}
      >
        <MdArrowForwardIos className='text-xl md:text-2xl' />
      </button>
    </div>
  );
}

export default SlidingImage;
