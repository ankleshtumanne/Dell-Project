
import secImage1 from "../assets/secImage1.avif"
import secImage2 from "../assets/secImage2.avif"
import secImage3 from "../assets/secImag3.avif"
import secImage4 from "../assets/secImage4.avif"
import secImage5 from "../assets/secImage5.avif"
import secImage6 from "../assets/secImage6.avif"
import secImage7 from "../assets/secImage7.avif"
import secImage8 from "../assets/secImage8.avif"
import React from "react";

import Products from "./Products"
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const CardGrid = () => {
  const navigate = useNavigate(); // Use the useNavigate hook to programmatically navigate

  // Function to handle image click
  const handleImageClick = () => {
    navigate("/Products"); // Replace with the actual path of your product page
  };

  return (
    <div className="bg-black p-8 ">
      <div className="container mx-auto grid grid-cols-4 gap-4 pl-16 pr-16">
        {/* Card 1 */}
        <div className="cursor-pointer">
          <img
            src={secImage1}
            alt="Product 1"
            className="w-full h-full object-cover  bg-slate-400"
            onClick={handleImageClick}
          />
        </div>
        {/* Card 2 */}
        <div className="cursor-pointer">
          <img
            src={secImage2}
            alt="Product 2"
            className="w-full h-full object-cover  bg-slate-400"
            onClick={handleImageClick}
          />
        </div>
        {/* Card 3 */}
        <div className="cursor-pointer">
          <img
            src={secImage3}
            alt="Product 3"
            className="w-full h-full object-cover  bg-slate-400"
            onClick={handleImageClick}
          />
        </div>
        {/* Card 4 */}
        <div className="cursor-pointer">
          <img
            src={secImage4}
            alt="Product 4"
            className="w-full h-full object-cover   bg-slate-400"
            onClick={handleImageClick}
          />
        </div>
        {/* Card 5 */}
        <div className="cursor-pointer">
          <img
            src={secImage5}
            alt="Product 5"
            className="w-full h-full object-cover   bg-slate-400"
            onClick={handleImageClick}
          />
        </div>
        {/* Card 6 */}
        <div className="cursor-pointer">
          <img
            src={secImage6}
            alt="Product 6"
            className="w-full h-full object-cover   bg-slate-400"
            onClick={handleImageClick}
          />
        </div>
        {/* Card 7 */}
        <div className="cursor-pointer">
          <img
            src={secImage7}
            alt="Product 7"
            className="w-full h-full object-cover   bg-slate-400"
            onClick={handleImageClick}
          />
        </div>
        {/* Card 8 */}
        <div className="cursor-pointer">
          <img
            src={secImage8}
            alt="Product 8"
            className="w-full h-full object-cover   bg-slate-400"
            onClick={handleImageClick}
          />
        </div>
      </div>
    </div>
  );
};

export default CardGrid;

