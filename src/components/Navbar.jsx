import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authContext from '../context/authContext'
import userContext from '../context/userContext';

const Navbar = () => {

    const navigate = useNavigate();
    const [auth, setAuth] = useContext(authContext);
    const [user, setUser] = useContext(userContext);

    const logout = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        setAuth(null)
        setUser(null)

        navigate("/")
    }

  return (
    <>
    <nav className="fixed top-0 left-0 m-5 mt-2 text-lg font-bold rounded-2xl">
        <ul className="inline-flex gap-5 flex-row justify-around">
        {auth == null || user == null ? 
        <>
        <li className="py-2 px-5 bg-gray-200 rounded-xl shadow-md">
        <Link to="/">Taskify.</Link>
            </li>
            <li className="py-2 px-5 cursor-pointer">
                <Link to="/about">[ About ]</Link>
            </li>
            <li className="py-2 px-5 cursor-pointer">
                <Link to="/pricing">[ Pricing ]</Link>
            </li>
            <li className="bg-blue-500 py-2 px-5 rounded-xl shadow-md cursor-pointer">
                <Link to="/login">Customer Login</Link>
            </li>
            </> 
            : 
            <>
                        <li className="py-2 px-5">
                <p>Hello, {user}!</p>
            </li>
            <li className="py-2 px-5 cursor-pointer">
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="py-2 px-5 cursor-pointer">
                <p>Messages</p>
            </li>
            <li className="py-2 px-5 cursor-pointer" onClick={logout}>
                <span>Log out</span>
            </li>
            </> }
        </ul>
    </nav>

    </>
  )
}

export default Navbar