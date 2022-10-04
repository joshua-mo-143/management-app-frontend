import React, {useContext, useState} from 'react'
import { useFormAction, useRouteLoaderData } from 'react-router-dom';
import authContext from '../context/authContext';
import userContext from '../context/userContext';
import Layout from './Layout'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMultiply } from '@fortawesome/free-solid-svg-icons';
import dataContext from '../context/userDataContext';

const CreateProject = (props) => {

    let fetchUrl='http://localhost:3000/projects'
    const [user, setUser] = useContext(userContext);
    const [auth, setAuth] = useContext(authContext);
    const [userData, setUserData] = useContext(dataContext);

    const [projectName, setProjectName] = useState("");
    const [projectBrief, setProjectBrief] = useState("");
    const [projectDeadline, setProjectDeadline] = useState("");
    const [priority, setHighPriority] = useState(false);
    const [assignedTeamId, setAssignedTeamId] = useState("");

    const highPrio = (e) => {
        setHighPriority(e.target.checked)
    }

    const closeModal = (e) => {
        window.location="/dashboard"
    }

    const submitProject = async (e) => {
            e.preventDefault();
            await axios.post(fetchUrl,
                {
                    "projectName": projectName,
                    "projectOwner": user,
                    "projectBrief": projectBrief,
                    "projectDeadline" : projectDeadline,
                    "highPriority": priority,
                    "assignedTeamId": assignedTeamId
                },
                { headers: { Authorization: auth, user: user }, withCredentials: true })
                window.location="/dashboard"
        }
    
        if (props.visible == false) return null
    
  return (
    <Layout>
        <div className="absolute w-screen h-screen bg-black/50 backdrop-blur-sm -mt-20">
<form className="relative flex flex-col text-center w-2/5 m-auto bg-white/50 p-5 rounded-xl mt-20">
    <h1 className="text-3xl font-bold">Create your project</h1>
    <span class="text-2xl font-bold absolute right-2 top-2 cursor-pointer">
                <FontAwesomeIcon icon={faMultiply} onClick={closeModal}/>
                </span>
    <label for="projectName" className="block py-3">
        <span className="float-left font-bold">Project name:</span>
        <input name="projectName" type="text" id="projectName" className="p-2 w-4/5" onInput={(e) => setProjectName(e.target.value)} value={projectName} required></input>
    </label>
    <label for="projectBrief" className="block py-3">
        <span className="float-left font-bold">Project brief:</span>
        <textarea cols="75" rows="15" name="projectBrief" type="text" id="projectBrief" className="p-2 w-4/5" onInput={(e) => setProjectBrief(e.target.value)} value={projectBrief} required></textarea>
    </label>
    <label for="projectName" className="block py-3 text-left flex gap-10">
        <span className="font-bold">Deadline:</span>
        <input name="projectDeadline" type="date" id="projectDeadline" className="p-2" onChange={(e) => setProjectDeadline(e.target.value)} value={projectDeadline} required></input>
    </label>
    <label for="assignedTeam" className="block py-3 text-left flex gap-10">
        <span className="font-bold">Assigned team:</span>
        <select name="assignedTeam" id="assignedTeam" value={assignedTeamId} onChange={(e) => setAssignedTeamId(e.target.value)}>
            <option value="" selected></option>
            {userData.teams.map((team) => (
                <option value={team._id}>{team.teamName}</option>
            ))}
        </select>
    </label>
    <label for="highPriority" className="my-5 align-top flex flex-row gap-2">
                    <input id="highPriority" name="highPriority" type="checkbox" value={priority} onClick={highPrio}></input>
                    <p className="font-bold">This project is high priority</p>
                </label>
    <button type="submit" value="submit" className="ml-2 px-5 py-2 bg-white/50" onClick={submitProject}>Submit</button>
</form>
</div>
</Layout>
  )
}

export default CreateProject