import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'
// import Cart from '../Components/Cart'
import PrivateRoute from '../privateRoutes/PrivateRoute.jsx'
import SignUp from '../Components/SignUp'
import Products from '../components/Products.jsx'

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