import React, { useContext, useState } from 'react'
import axios from 'axios'
import authContext from '../context/authContext';
import { useNavigate, Link} from 'react-router-dom';
import userContext from '../context/userContext';

const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const [auth, setAuth] = useContext(authContext);
    const [user, setUser] = useContext(userContext);

    const handleLogin = async(e) => {
        let data;
        e.preventDefault()
        const fetchUrl = 'http://localhost:3000/auth'
        
        await axios.post(fetchUrl,
            {
                "username": username,
                "password": password
            }, {withCredentials: true, credentials: 'include'})
            .then(res => {
                data = res.data.jwt;
                localStorage.setItem('jwt', JSON.stringify(data));
                localStorage.setItem('user', username);
                setAuth('JWT ' + JSON.parse(localStorage.getItem('jwt')));
                setUser(localStorage.getItem('user'));
                setSuccess(true);
                navigate('/tasks');
            })
        .catch(err => {
            console.error(err);
        })

        
    }
    
  return (
    <form className="flex flex-col text-center w-1/5 m-auto mt-5 lg:mt-64">
        <h1 className="text-3xl">Log In</h1>
        <label for="username" className="block py-3">
           Username: <input name="username" type="text" id="username" onChange={(e) => setUsername(e.target.value)} value={username}></input>
        </label>
        <label for="password" className="block py-3">
           Password: <input name="password" type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password}></input>
        </label>
        <button type="submit" value="submit" className="ml-2 px-5 py-2 bg-white/50 backdrop-blur-lg shadow-sm rounded-xl" onClick={handleLogin}>Submit</button>
        <Link to="/register"><button className="mt-3 px-5 py-2 bg-white/50 backdrop-blur-lg shadow-sm rounded-xl">I don't have an account</button></Link>
    </form>
  )
}

export default Login