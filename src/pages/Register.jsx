import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate, Link } from 'react-router-dom';
const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function register(e) {
        e.preventDefault()

        if (username == "") {
            setError("Please enter a username.")
            return 
        }

        if (email == "") {
            setError("Please enter an email.")
            return 
        }

        if (password == "") {
            setError("Please enter a password.")
            return 
        }
        
        const fetchUrl = 'http://localhost:3000/register'
        try {
        await axios.post(fetchUrl,
            {
                "username": username,
                "email": email,
                "password": password
            })
        } catch(err) {
            console.error(err);
            setError("That user/email is already taken.")
        }

        window.location = "/login";
    }
    
  return (
    <form className="flex flex-col text-center w-1/5 m-auto mt-5 lg:mt-64">
        <h1 className="text-3xl">Register</h1>
        <label for="username" className="block py-3">
           <span className="float-left">Username:</span> 
           <input name="username" type="text" id="username" className="float-right" onInput={(e) => setUsername(e.target.value)} value={username} required></input>
        </label>
        <label for="email" className="block py-3">
        <span className="float-left">Email:</span> 
        <input name="email" type="email" id="email" className="float-right" onChange={(e) => setEmail(e.target.value)} value={email} required></input>
        </label>
        <label for="password" className="block py-3">
        <span className="float-left">Password:</span> 
        <input name="password" type="password" id="password" className="float-right" onChange={(e) => setPassword(e.target.value)} value={password} required></input>
        </label>
        <button type="submit" value="submit" className="ml-2 px-5 py-2 bg-white/50 backdrop-blur-lg shadow-sm rounded-xl" onClick={register}>Submit</button>
        <Link to="/login"><button className="mt-3 px-5 py-2 bg-white/50 backdrop-blur-lg shadow-sm rounded-xl">I already have an account</button></Link>
            <span>{error}</span>
    </form>
  )
}

export default Register