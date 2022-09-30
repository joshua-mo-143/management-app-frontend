import React, {useState, useMemo} from 'react'
import {Routes , Route} from 'react-router-dom'
import About from './About';
import Home from './Home';
import Dashboard from './Dashboard/Dashboard';
import Pricing from './Pricing';
import Register from './Register';
import Login from './Login';

const AllRoutes = () => {

  return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/pricing" element={<Pricing/>}/>

            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            
        </Routes>
  )
}

export default AllRoutes