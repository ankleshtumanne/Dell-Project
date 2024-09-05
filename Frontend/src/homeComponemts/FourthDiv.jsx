import React from 'react';
import slide1 from "../assets/slide1.avif"
import slide2 from "../assets/slide2.avif"
import "./fourthDiv.css"
import {useState} from "react"


const FourthDiv = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, imageUrl: {slide1} },
    { id: 2, imageUrl: {slide2} },
    { id: 3, imageUrl: "https://via.placeholder.com/600x400?text=Slide+3" },
    { id: 4, imageUrl: "https://via.placeholder.com/600x400?text=Slide+4" },
    { id: 5, imageUrl: "https://via.placeholder.com/600x400?text=Slide+5" },
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className='slideMaiCont'>
    <div className="slideParent relative w-full  mx-auto p-4">
      {/* Slider main area */}
      <div className="relative overflow-hidden h-64 rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-64 flex items-center justify-center"
            >
              <img src={slide.imageUrl} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Small box on the left corner */}
        <div className="absolute top-4  w-16 h-16 bg-white shadow-md rounded-lg flex items-center justify-center text-sm font-bold">
          Corner Box
        </div>
      </div>

      {/* Bullet points */}
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r"
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l"
      >
        Next
      </button>
    </div>
    </div>
  );
};

export default FourthDiv;


