import React from "react";
import "./SixthDiv.css"
import { IoPersonOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { TbSettingsCheck } from "react-icons/tb";
import { ImHeadphones } from "react-icons/im";

const SixthDiv = () => {
  return (
    <div className="w-full  " style={{background:"rgb(29,44,59)"}}>
      
      <h1 className="text-white text-xl pt-12 ml-28"><span className="">Dell Support</span></h1>
      <h1 className="text-white text-4xl ml-28 pt-6">We're Here to Help</h1>
      <h1  className="text-white text-xl ml-28 pt-4">From offering expert advice to solving complex problems, we've got you <br /> covered.</h1>
      <div className="maindiv flex  items-center h-full" >
      
        <div className=" bg-blue-500 ml-28 mt-6 pl-8">
          <GoHome className="text-sky-700 text-6xl mt-6 ml-6"/>  
          <p className="text-white text-xl mt-4">Support Home</p>
        </div>

        <div className="   bg-blue-500 ml-6 mt-6 pl-8">
           <IoSettingsOutline className="text-sky-700 text-6xl mt-6 ml-8"/>
          <p className="text-white text-xl mt-4 ml-4">Drives And <br /> Download</p>
        </div>
        <div className="   bg-blue-500 ml-6 mt-6 pl-8">
           <IoPersonOutline className="text-sky-700 text-6xl mt-6 ml-8"/>
          <p className="text-white text-xl mt-4 ml-4">Order Support</p>
        </div>

        <div className="   bg-blue-500 ml-6 mt-6 pl-8">
           <TbSettingsCheck className="text-sky-700 text-6xl mt-6 ml-8"/>
          <p className="text-white text-xl mt-4 ml-4">Warranty And <br /> Contract</p>
        </div>

        

        <div className="   bg-blue-500 ml-6 mt-6 pl-8">
           <ImHeadphones className="text-sky-700 text-6xl mt-6 ml-8"/>
          <p className="text-white text-xl mt-4 ml-4">Parts And <br /> Upgrades</p>
        </div>

      </div>
    </div>
  );
};

export default SixthDiv;
