import React, { Children, useEffect, useContext} from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import authContext from '../context/authContext'
import userContext from '../context/userContext'

const Layout = (props) => {

  const [auth, setAuth] = useContext(authContext);
  const [user, setUser] = useContext(userContext);

  useEffect(() => {
    async function meme() {
    if (localStorage.getItem('jwt') && localStorage.getItem('user')) {
  setAuth('JWT '+JSON.parse(localStorage.getItem('jwt')));
  setUser(localStorage.getItem('user'));
  console.log(auth);
  console.log(user);
    }
  }
  meme()
  }, []);

  return (
    <>
    <Navbar/>
    {props.children}
    </>
  )
}

export default Layout