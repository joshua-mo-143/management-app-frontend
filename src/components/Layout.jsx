import React, { Children, useEffect, useContext, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import authContext from '../context/authContext'
import userContext from '../context/userContext'
import CookieNotif from './cookieNotif'
import dataContext from '../context/userDataContext'
import axios from 'axios'

const Layout = (props) => {
  let data;
  let fetchUrl = "http://localhost:3000/dashboard";

  const [isDashboard, setDashboard] = useState(false);
  const [auth, setAuth] = useContext(authContext);
  const [user, setUser] = useContext(userContext);
  const [userData, setUserData] = useContext(dataContext);

  useEffect(() => {
    async function setLogin() {
      if (!auth && !user && localStorage.getItem('jwt') && localStorage.getItem('user')) {
        
        setAuth('JWT ' + JSON.parse(localStorage.getItem('jwt')));
        setUser(localStorage.getItem('user'));
      }
    }

    async function getData() {
      if (auth && user) {
          try {
      await axios.get(fetchUrl, {headers: {Authorization: auth, user: user}, withCredentials: true})
      .then((res) => {
          data = res.data;
          setUserData(data)
      })
  } catch(err) 
  {
      console.log(err.message);
  }

}
}
    setLogin()
    getData()
  }, [window.location, user]);

  return (
    <>
      <Navbar />
      {props.children}
      <CookieNotif/>
    </>
  )
}

export default Layout