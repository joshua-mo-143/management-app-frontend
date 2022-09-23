import React, {useState, useMemo} from 'react'
import {Routes , Route} from 'react-router-dom'
import About from './About';
import Home from './Home';
import Dashboard from './Dashboard/Dashboard';

const AllRoutes = () => {

  return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
  )
}

export default AllRoutes