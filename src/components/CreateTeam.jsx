import axios from 'axios';
import React, { useContext, useState } from 'react'
import authContext from '../context/authContext'
import userContext from '../context/userContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply } from '@fortawesome/free-solid-svg-icons';

const CreateTeam = (props) => {

    let fetchUrl = 'http://localhost:3000/teams';

    const [auth, setAuth] = useContext(authContext);
    const [user, setUser] = useContext(userContext);
    const [teamName, setTeamName] = useState("");

    const closeModal = (e) => {
            window.location="/dashboard"
        }
    

    const submitTeam = async (e) => {
        e.preventDefault();
        await axios.post(fetchUrl,
            {
                "teamName": teamName,
                "teamOwner": user

            },
            { headers: { Authorization: auth, user: user }, withCredentials: true })
            window.location="/dashboard"
    }

    if (props.visible == false) return null

    return (
        <div className="absolute w-screen h-screen bg-black/50 backdrop-blur-sm -mt-20">
            <form action ="#" className="relative mt-64 bg-white/75 p-10 filter-flex flex-col bg-white/50 rounded-xl shadow-md text-center w-2/5 m-auto">
                <span class="text-2xl font-bold absolute right-2 top-2 cursor-pointer">
                <FontAwesomeIcon icon={faMultiply} onClick={closeModal}/>
                </span>
                <h1 className="text-3xl font-bold">Create your team</h1>
                <label for="teamName" className="block py-3 flex flex-col gap-3">
                    <span className="font-bold text-xl">Team name:</span>
                    <input name="teamName" type="text" id="teamName" className="p-3 rounded shadow-md" onInput={(e) => setTeamName(e.target.value)} value={teamName} required></input>
                </label>
                <button type="submit" value="submit" className="ml-2 px-5 py-2 bg-white/50 rounded-xl shadow-md" onClick={submitTeam}>Submit</button>
            </form>
        </div>

    )
}

export default CreateTeam