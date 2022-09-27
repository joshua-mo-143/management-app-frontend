import React, { useState } from 'react'
import axios from 'axios'
const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function login(e) {
        e.preventDefault()
        const fetchUrl = 'http://localhost:3000/auth'
        
        await axios.post(fetchUrl,
            {
                "username": username,
                "password": password
            });

        console.log("Successfully logged in");
        
    }
    
  return (
    <form className="flex flex-col text-center">
        <h1 className="text-3xl">Register</h1>
        <label for="username" className="block py-3">
           Username: <input name="username" type="text" id="username" onChange={(e) => setUsername(e.target.value)} value={username}></input>
        </label>
        <label for="password" className="block py-3">
           Password: <input name="password" type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password }></input>
        </label>
        <button type="submit" value="submit" className="ml-2 px-5 py-2 bg-white/50" onClick={login}>Submit</button>
    </form>
  )
}

export default Login