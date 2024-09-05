import React from 'react'
import "./Navbar.css"
import { IoSearchSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
const Navbar = () => {
  
  return (
    <div className='flex w-full border min-h-20 '>
      <div className='pt-3 pl-2'>
          <img className='logo' src="https://cdn.icon-icons.com/icons2/2699/PNG/512/dell_logo_icon_168288.png" />
      </div>
      <div className='pt-3 flex'>
          <div className='flex pt-2'><input className='pl-4 ' type="text" name="search" placeholder='Search For Deals' id="search_bar" /></div>
         <div ><IoSearchSharp className='componentIconSerchBar' style={{ margin: '10px', paddingLeft: '-10px' ,fontSize:"30px",}} /></div>
      </div>

      
      
      
      <div className='SignInSection flex'>
        <div >
        <IoPersonOutline className='personIcon'/>
        </div>
        <div className='pt-2 relative group'>
          <a href="#" className="text-black hover:underline">Sign Up</a>
          <div className="w-[300px] h-[200px] absolute hidden group-hover:block bg-white text-gray-800 py-2 mt-2 rounded shadow-lg">
            <div className='w-[300px] bg-blue-600 text-center'><a href="/signup" className="block px-4 py-2 text-white">Sign IN</a></div>
            <a href="/signup" className="block px-4 py-2 mt-4 hover:bg-gray-100">Create Account</a>
            <a href="/signup" className="block px-4 py-2 mt-4 hover:bg-gray-100">Premire Sign In</a>
          </div>
        </div>
        <div>
        <IoChevronDownSharp className='mt-3.5 ml-1'/>
        </div>
        
      </div>
      <div className='flex pt-6'>
          <CiHeadphones className='mt-1'/>
          <div>Contact </div>
      </div>

      <div className='IN_ENSection flex mt-4'>
               <GrLanguage className='mt-1 ml-4'/>
        <div className='ml-1'>IN/EN</div>
        <div>
              <IoChevronDownSharp className='mt-1 ml-1'/>
        </div>
      </div>
      <div className='cartSection flex mt-4 '>
          <IoCartOutline className='mt-1' />
          <div>Cart</div>
      </div>
    </div>
  )

}
export default Navbar
        