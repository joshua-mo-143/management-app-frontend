import React, {useState} from 'react'
import axios from 'axios'

const NewTaskForm = () => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    let fetchUrl = 'http://localhost:3000/tasks';

    const taskName = (e) => {
        setTitle(e.target.value)
    }

    const taskDesc = (e) => {
        setDesc(e.target.value)
    }
    
    async function addTask() {
        await axios.post(fetchUrl,
            {
                "taskName": title,
                "taskDesc": desc
            })
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

            <button type="submit" className="bg-green-500 px-5 py-2 font-bold rounded-xl" onClick={addTask}>Add task</button>

        </form>
    )
}

export default NewTaskForm