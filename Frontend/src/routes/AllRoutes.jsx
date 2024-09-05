import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home.jsx';
import Login from '../Components/Login.jsx';

import PrivateRoute from '../privateRoutes/PrivateRoute.jsx';
import SignUp from '../Components/SignUp.jsx';
import Products from '../Components/Products.jsx';

const AllRoutes = () => {
  return (
    <>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Products" element={
           
                <Products/>
           
            }/>
            <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default AllRoutes