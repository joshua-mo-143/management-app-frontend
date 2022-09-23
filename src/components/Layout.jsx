import React, { Children } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Layout = (props) => {
  return (
    <>
    <Navbar/>
    {props.children}
    </>
  )
}

export default Layout