import React from 'react'
import lastvedio1 from "../assets/lastvedio1.mp4"
const Eigth = () => {
  return (
    
      <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={lastvedio1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
        <p className="text-xl">ADVANCING SUSTAINABILITY</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">At the Core of Everything We Do</h1>
        <p className="text-lg md:text-xl">Creating sustainable products and solutions that drive change.</p>
       <button className="w-28 mt-6 bg-cyan-400 h-10 border-blue-500"><a href={lastvedio1}> Play Vedio</a></button>
      </div>
    </div>
   
  )
}

export default Eigth
