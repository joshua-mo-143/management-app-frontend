import React, {useContext, useState} from 'react'
import axios from 'axios'
import authContext from '../context/authContext';
import userContext from '../context/userContext';
import dataContext from '../context/userDataContext';
import { useNavigate } from 'react-router-dom';

const NewTaskForm = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [auth, setAuth] = useContext(authContext);
    const [user, setUser] = useContext(userContext);
    const [userData, setUserData] = useContext(dataContext);
    const [priority, setHighPriority] = useState(false);
    const [project, setProjectId] = useState("");

    let fetchUrl = 'http://localhost:3000/tasks';

    const highPrio = (e) => {
        setHighPriority(e.target.checked)
    }
    
    async function addTask(e) {
        let navigate = useNavigate()
        e.preventDefault()
        await axios.post(fetchUrl,
            {
                "taskName": title,
                "taskDesc": desc,
                "taskOwner": user,
                "highPriority": priority,
                "projectId": project
                
            }, {headers: {Authorization: auth, user: user}, withCredentials: true})
        setTitle("");
        setDesc("");
        navigate(0)
    }

    return (
        <form className="m-5">

            <h1 className="text-xl">Create a new task</h1>

            <section className="my-5">
                <label for="taskName" className="mt-5 block">Task title:</label>
                <input id="taskName" name="taskName" className="" value={title} onChange={(e) => setTitle(e.target.value)} required></input>
            </section>

            <section className="my-5">
                <label for="taskDesc" className="mt-5 align-top">Task description:</label>
                <textarea id="taskDesc" name="taskDesc" className="block w-4/5" cols="100" rows="5" value={desc} onChange={(e) => setDesc(e.target.value)} required></textarea>
            </section>

            <section className="my-5">
                <label for="project" className="mt-5 align-top gap-2">
                    <span className="block">Project to assign this task to:</span>
                    <select value={project} id="project" name="project" onChange={(e) => setProjectId(e.target.value)}>
                        <option value="" selected></option>
                            {userData.projects.map((project) => (
                                <option value={project._id}>{project.projectName}</option>
                            ))}

                    </select>
                </label>
                </section>

            <section className="my-5">
                <label for="highPriority" className="mt-5 align-top flex flex-row gap-2">
                    <input id="highPriority" name="highPriority" type="checkbox" value={priority} onClick={highPrio}></input>
                    <p className="font-bold">This task is high priority</p>
                </label>
                </section>

            <button type="submit" className="bg-green-500 px-5 py-2 font-bold rounded-xl" onClick={addTask}>Add task</button>

        </form>
    )
}

export default NewTaskForm