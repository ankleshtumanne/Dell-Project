import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'

import PrivateRoute from '../privateRoutes/PrivateRoute.jsx'
import SignUp from '../components/SignUp'
import Products from '../components/Products';

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