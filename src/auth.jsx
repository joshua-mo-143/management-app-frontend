import React, { useContext } from 'react'
import authContext from './context/authContext'
import userContext from './context/userContext';

export const handleAuth = () => {

    const [auth, setAuth] = useContext(authContext);
    const [user, setUser] = useContext(userContext);

    // if (localStorage.getItem('jwt') && localStorage.getItem('user')) {
    //     setAuth(localStorage.getItem('jwt'));
    //     setUser(localStorage.getItem('user'));
    // } else {
        
    // }
    setAuth(JSON.parse(localStorage.getItem('jwt')));
    setUser(localStorage.getItem('user'));

}

export default handleAuth