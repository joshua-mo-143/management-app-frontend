import React, { Children, useEffect, useContext, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import authContext from '../context/authContext'
import userContext from '../context/userContext'
import CookieNotif from './cookieNotif'

const Layout = (props) => {

  const [auth, setAuth] = useContext(authContext);
  const [user, setUser] = useContext(userContext);

  useEffect(() => {
    async function meme() {
      if (!auth && !user && localStorage.getItem('jwt') && localStorage.getItem('user')) {
        
        setAuth('JWT ' + JSON.parse(localStorage.getItem('jwt')));
        setUser(localStorage.getItem('user'));
      }
    }
    meme()
  }, [window.location]);

  return (
    <>
      <Navbar />
      {props.children}
      <CookieNotif/>
    </>
  )
}

export default Layout