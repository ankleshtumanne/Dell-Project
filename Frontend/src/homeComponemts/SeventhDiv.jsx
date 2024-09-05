import React from "react";
import lastImage from "../assets/lastImage.avif"
const SeventhDiv = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen" style={{background:"rgb(29,44,59)"}}>
      {/* Container Div */}
      <div className=" flex justify-center " style={{width:"90%"}}>
        {/* Text Box */}
        <div className="w-1/2 ml-10 items-center justify-center p-4 text-white" style={{background:"rgb(29,44,59)"}}>
          <p className="text-xl font-semibold mt-8">
             DELL REWARDS FOR BUSINESS 
          </p>
          <p className="text-4xl mt-4">Buy More. Get <br /> More.</p>
          <p className="text-xl mt-6">Get Rewarded on your purchase for your <br /> next buy at Dell.co.in. *Terms and <br /> conditions apply.</p>
          <button className="w-36 mt-12 text-white h-12" style={{border:"1px solid blue",background:"blue"}}>Learn More</button>
        </div>

        {/* Image Box */}
        <div className="w-1/2 flex items-center justify-center p-4 mr-16" style={{width:"50rem"}}>
          <img
            src=
            {lastImage}
            alt="Placeholder"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SeventhDiv;
