import React, {useContext, useState} from 'react'
import axios from 'axios'
import authContext from '../context/authContext';
import userContext from '../context/userContext';

const NewTaskForm = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [auth, setAuth] = useContext(authContext);
    const [user, setUser] = useContext(userContext);
    const [priority, setHighPriority] = useState(false);

    let fetchUrl = 'http://localhost:3000/tasks';

    const taskName = (e) => {
        setTitle(e.target.value)
    }

    const taskDesc = (e) => {
        setDesc(e.target.value)
    }

    const highPrio = (e) => {
        setHighPriority(e.target.checked)
    }
    
    async function addTask(e) {
        e.preventDefault()
        await axios.post(fetchUrl,
            {
                "taskName": title,
                "taskDesc": desc,
                "taskOwner": user,
                "highPriority": priority
                
            }, {headers: {Authorization: auth, user: user}, withCredentials: true})
        setTitle("");
        setDesc("");
    }

    return (
        <form className="m-5">

            <h1 className="text-xl">Create a new task</h1>

            <section className="my-5">
                <label for="taskName" className="mt-5 block">Task title:</label>
                <input id="taskName" name="taskName" className="" onChange={taskName} required></input>
            </section>

            <section className="my-5">
                <label for="taskDesc" className="mt-5 align-top">Task description:</label>
                <textarea id="taskDesc" name="taskDesc" className="block w-4/5" cols="100" rows="5" onChange={taskDesc} required></textarea>
            </section>

            <section className="my-5">
                <label for="highPriority" className="mt-5 align-top flex flex-row gap-2">
                    <input id="highPriority" name="highPriority" type="checkbox" value={priority} onClick={highPrio}></input>
                    <p>This task is high priority</p>
                </label>
                </section>

            <button type="submit" className="bg-green-500 px-5 py-2 font-bold rounded-xl" onClick={addTask}>Add task</button>

        </form>
    )
}

export default NewTaskForm