import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import HeroImage from '../assets/HeroImage.jpg'
import { Link, useNavigate } from 'react-router-dom'
import authContext from '../context/authContext'
import userContext from '../context/userContext'

const Home = () => {

  const navigate = useNavigate();
  const [auth, setAuth] = useContext(authContext);
  const [user, setUser] = useContext(userContext);

  useEffect(() => {
    if (localStorage.getItem('jwt') && localStorage.getItem('user')) {
      navigate('/dashboard');
    }
  },[]);

  return (
    <Layout>
        <img src= {HeroImage} className="fixed md: w-screen h-screen object-cover -z-10 pointer-events-none"/>
        <div className="absolute left-1/2 top-1/3 m-auto w-1/3 md:w-1/3 h-1/5">  
        <h1 className="font-bold text-xs sm:text-md md:text-4xl text-left p-5 bg-white/80 shadow-xl rounded-xl">
            <span className="text-blue-500">Project task management</span> for productive teams, <span className="text-blue-500">made easy</span>.
            </h1>   
        <h1 className="text-right font-bold text-xs sm:text-md lg:text-lg font-bold p-5 mt-2 bg-white rounded-xl text-shadow-md">
            <span className="text-blue-500">Eliminate</span> problems and 
            <span className="text-blue-500 "> streamline</span> your communication flow
            with our all-in-one app.</h1>
            <Link to="/about">
        <button className="absolute right-0 font-bold bg-blue-500 px-5 text-xl py-2 rounded-xl shadow-xl mt-2">
          Get started for free
          </button>
          </Link>
        </div>
        
    </Layout>
  )
}

export default Home