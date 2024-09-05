import React from 'react'
import product2image from "../assets/product2image.avif"
const Products = () => {
  return (
    <div>
      <div className='w-full flex pl-36'>
          <img className='w-20' src={product2image} alt="" />
          <h1 className='text-center pt-4'>Earn up to ₹10,000 with Dell Rewards. Exchange your Old PC for our latest AI PC*.</h1>
          <a className='pt-4' href=""><span className='text-blue-500  pl-2'> Shop Deals</span>   |</a>
          <a className='pt-4' href=""><span className='text-blue-500  pl-2'> Question's</span></a>
      </div>
      <div class="w-full flex bg-gray-500 ">
          <div class="w-1/2 bg-gray-300 p-6 pt-6 pl-16">
            <h2 class="text-3xl font-bold mb-4 mt-14">Text Section</h2>
            <p class="text-lg">This is the text box. You can place any content here, such as paragraphs, headings, or lists.</p>
          </div>

        
          <div class="w-1/2 bg-gray-300">
            <img src={product2image} alt="Sample Image" class="w-full h-full object-cover"/>
          </div>
      </div>
       
      <div class="w-[95%] mx-auto ">
          <h1>filter</h1>
          <div className='flex'>
              <div class="w-[30%] bg-gray-100 p-4">
                <h2 class="text-2xl font-semibold mb-4">First Text Box</h2>
                <p>This box takes 20% of the container width and contains text.</p>
              </div>

            
              <div class="w-[70%] flex bg-gray-100 p-4 ml-4">
                
                <div class="w-[50%]">
                  <img src="your-image-url.jpg" alt="Sample Image" class="w-full h-full object-cover"/>
                </div>
              
                <div class="w-[50%] bg-white p-4 ml-4">
                  <h2 class="text-2xl font-semibold mb-4">Second Text Box</h2>
                  <p>This is a text section inside the second box, which also contains an image.</p>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Products
