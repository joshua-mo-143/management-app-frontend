import React, {useState, useMemo} from 'react'
import {Routes , Route} from 'react-router-dom'
import About from './About';
import Home from './Home';
import Dashboard from './Dashboard/Dashboard'
import Pricing from './Pricing';
import Register from './Register';
import Login from './Login';
import Tasks from './Dashboard/Tasks';
import Project from './Dashboard/Project';
import Teams from './Dashboard/Teams';

const AllRoutes = () => {

  return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/pricing" element={<Pricing/>}/>

            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/dashboard/tasks" element={<Tasks/>}/>
            {/* <Route path="/dashboard/projects/:id" element={<Project/>}/>
            <Route path="/dashboard/projects/:id/tasks" element={<Tasks/>}/>
            <Route path="/dashboard/teams/:id" element={<Teams/>}/> */}
        </Routes>
  )
}

export default AllRoutes