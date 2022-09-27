import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="absolute top-0 left-0 m-5 mt-2 text-lg font-bold rounded-2xl">
        <ul className="inline-flex gap-5 flex-row justify-around">
        <li className="py-2 px-5 bg-gray-200 rounded-xl shadow-md">
        <Link to="/">Taskify.</Link>
            </li>
            <li className="py-2 px-5">
                <Link to="/about">[ About ]</Link>
            </li>
            <li className="py-2 px-5">
                <Link to="/pricing">[ Pricing ]</Link>
            </li>
            <li className="bg-blue-500 py-2 px-5 rounded-xl shadow-md">
                <Link to="/dashboard">Customer Login</Link>
            </li>
        </ul>
    </nav>

    </>
  )
}

export default Navbar