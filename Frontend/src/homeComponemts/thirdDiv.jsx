import React from 'react'
import "./thirdDiv.css"
import { IoArrowForward } from "react-icons/io5";

import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

import Products from '../Components/Products';
  // const navigate = useNavigate(); // Use the useNavigate hook to programmatically navigate

  // Function to handle image click
  // const handleImageClick = () => {
  //   navigate("/Products"); // Replace with the actual path of your product page
  // };

const ThirdDiv = () => {
  return (
    
    <div className='thirdDiv'>
      <h1 className='text-white text-4xl pt-20 pl-24'>For You</h1>
        <div className="container">
        
            <div className="box " style={{width:"30rem"}}>
                <h1 className='text-3xl pl-6 pt-4'>Best Seller</h1>
                <p className='text-xl pl-6 pt-4'>Enjoy special prices on our best <br /> selling laptops.</p>
                <div className='flex mt-32 pl-6'>
                  <button className='text-xl hover:border-b-2 hover:border-white' >See All  </button>
                  <IoArrowForward className="mt-2 ml-2"/>
               </div>
            </div>

            <div className="box " style={{width:"20rem"}}>
                <h1 className='text-3xl pl-6 pt-4'>Build Your Own Device</h1>
                <p className='text-xl pl-6 pt-4'>Order a system that will be built to your <br /> personal specifications.</p>
                <div className='flex mt-16 pl-6'>
                  <button className='text-xl hover:border-b-2 hover:border-white' >See All  </button>
                  <IoArrowForward className="mt-2 ml-2"/>
               </div>
            </div>

            <div className="box " style={{width:"20rem"}}>
                <h1 className='text-3xl pl-6 pt-4'>Access My Account</h1>
                <p className='text-xl pl-6 pt-4'>Sign in to your account to track & view <br /> your orders.</p>
                <div className='flex mt-28 pl-6'>
                  <button className='text-xl hover:border-b-2 hover:border-white'>Sign In </button>
                  <IoArrowForward className="mt-2 ml-2"/>
               </div>
            </div>

        </div>
    </div>
  )
}

export default ThirdDiv
