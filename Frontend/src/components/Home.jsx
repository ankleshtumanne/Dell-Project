import React from 'react'
import dell_first_image from "../assets/dell_first_image.avif"
import "./home.css"
import CardGrid from './gridCard';
import Slider from './slidder';
import ThirdDiv from '../homeComponemts/thirdDiv';
import FourthDiv from '../homeComponemts/FourthDiv';
import FifthDiv from '../homeComponemts/fifthDiv';
import SixthDiv from '../homeComponemts/SixthDiv';
import SeventhDiv from '../homeComponemts/SeventhDiv';
import Eigth from '../homeComponemts/Eigth';
import NinthDiv from '../homeComponemts/NinthDiv';

const Home = () => {
  return (
    <div >
        <Slider></Slider>
        <CardGrid />
        <ThirdDiv/>
        {/* <FourthDiv/> */}
        <FifthDiv/>
        <SixthDiv/>
        <SeventhDiv/>
        <Eigth/>
        <NinthDiv/>
    </div>
  )
}

export default Home
