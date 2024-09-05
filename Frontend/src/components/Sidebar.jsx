import React from 'react'
import "./sidebar.css"
import { IoChevronDownSharp } from "react-icons/io5";
const Sidebar = () => {
  return (
   <div className='w-full border h-12'>
         <div className='sideBarDiv flex   pl-16 h-12'>
                <div className='firstDiv firstsec pt-2'>Artificial Inteligent </div>
              <div className=' flex secondsec pt-2' >
                    <div >It Infrustracture</div>
                    <IoChevronDownSharp className='mt-1.5 ml-1'/>
                    
                </div>
              <div className='third flex pt-2'>
                    <div >Comuter & Accesories</div>
                    <IoChevronDownSharp className='mt-1.5 ml-1'/>
              </div>
              <div className='fourth flex pt-2'>
                  <div >Services</div>
                  <IoChevronDownSharp className='mt-1.5 ml-1'/>
              </div>
              <div className='fifth flex pt-2'>
                  <div>Support</div>
                  <IoChevronDownSharp className='mt-1.5 ml-1'/>
              </div>
              <div className='sixth flex pt-2' >
                  <div >Deals</div>
                  <IoChevronDownSharp className='mt-1.5 ml-1'/>
              </div>
                <div className='seventh pt-2'>Find A Store</div>
              
          </div>
   </div>
  )
}

export default Sidebar
