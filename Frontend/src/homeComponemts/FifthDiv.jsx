import React from "react";
 // Ensure to import your Tailwind styles here
import vedioForProject from "../assets/vedioForProject.mp4"
const FifthDiv = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={vedioForProject} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
        <p className="text-xl">CUSTOMER SUCCESS STORIES</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">PhonePe: Empowering Financial Inclusion</h1>
        <p className="text-lg md:text-xl">Accelerating India's digitization efforts with greater access to digital payments.</p>
       <button className="w-28 mt-6 bg-cyan-400 h-10 border-blue-500"><a href={vedioForProject}> Play Vedio</a></button>
      </div>
    </div>
  );
};

export default FifthDiv;
