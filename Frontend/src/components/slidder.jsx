import React, { useState, useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import dell_first_image from "../assets/dell_first_image.avif"
import dell_second_image from "../assets/dell_second_image.avif"
import dell_third_image from "../assets/dell_third_image.png"
// import { useNavigate}  from "react-router-dom"; 
import Products from "./Products";


const Slider = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of slides with text and image
  const slides = [
    {
      text: "Latest Tech Limited Products",
      image: dell_first_image,
      bgColor: "rgb(1,38,90)",
      
    },
    {
      text: "Review History With Gen AI",
      image: dell_second_image,
      bgColor: "rgb(139,63,187)"
    },
    {
      text: "Earn Up  to Rs 25000 with online ExclusiveDell Revard And Pc Exchange Program",
      image: dell_third_image ,
      bgColor: "gray"
    },
  ];
  // Import useNavigate from react-router-dom


   // Use the useNavigate hook to programmatically navigate

  // Function to handle image click
  
  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto p-8 text-white " style={{ backgroundColor: slides[currentSlide].bgColor }} >
      <div className="flex items-center justify-between space-x-4 h-full ">
        {/* Text part */}
        <div className="w-1/2 flex flex-col justify-center">
        
          <h2 className="text-2xl font-bold mb-4">{slides[currentSlide].text}</h2>
          <p className="text-lg text-gray-300">This is a sample description or additional text for the slide. You can use this area to provide more information.</p>
          {/* <button className="text-xl border-x-white mt-10">See All</button> */}
          <div className="flex space-x-4 mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
              See All
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
              Learn More
            </button>
          </div>
        </div>
        {/* Image part */}
        <div className="w-1/2">
          <img
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      {/* Navigation buttons */}
      <div className="flex justify-end mr-16 ">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={prevSlide}
        >
         <IoArrowBackOutline />
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={nextSlide}
        >
          <IoArrowForward className=""/>
        </button>
      </div>
    </div>
  );
};

export default Slider;
