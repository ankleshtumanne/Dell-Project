import React from 'react';
import "./ninthDiv.css"
import lastimg1 from"../assets/lastimg1.avif"
import lastimg2 from"../assets/lastimg2.avif"
import lastimg3 from"../assets/lastimg3.avif"
import lastimg4 from"../assets/lastimg4.avif"
function NinthDiv() {
  return (
    <div className="cont">
      <div className='parent1'>
        <h1 className='text-xl'>Latest from Dell Technologies</h1>
        <h1 className='text-5xl pt-2'>What's Happening</h1>
      </div>
       <div className=' cont2 '>
          <div>
            <img src={lastimg1} alt="" />
            <h1 className='text-xl pl-3 pt-2'>What We Do</h1>
            <div className='item'>
              <h1 className='mt-24 ml-3'>learn more</h1>
            </div>
          </div>
          <div >
            <img src={lastimg2} alt="" />
            <h1 className='text-xl pl-3 pt-2'>Four Keys to Optimal Outcomes with Generative AI</h1>
            <div className='item'>
              <h1 className='mt-10 ml-3'>learn more</h1>
            </div>
          </div>

          <div >
            <img src={lastimg3} alt="" />
            <h1 className='text-xl pl-3 pt-2'>Explore New Approaches to Innovation</h1>
            <div className='item'>
              <h1 className='mt-16 ml-3'>learn more</h1>
            </div>
          </div>

          <div >
            <img src={lastimg4} alt="" />
            <h1 className='text-xl pl-3 pt-2'>Our Purpose in Action</h1>
            <div className='item'>
              <h1 className='mt-24 ml-3'>learn more</h1>
            </div>
          </div>
       </div>
    </div>
  );
}

export default NinthDiv;
