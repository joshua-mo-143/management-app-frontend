import React, {useContext, useEffect, useState} from 'react'
import Layout from '../../components/Layout';
import authContext from '../../context/authContext';
import userContext from '../../context/userContext';
import dataContext from '../../context/userDataContext';
import Task from '../../components/Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import NewTaskForm from '../../components/NewTaskForm';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Tasks = () => {

    const params = useParams()
    const projectId = params.id;

    let fetchUrl = 'http://localhost:3000/tasks'

    // set states
    const [task, setTask] = useState("");
    const [showTaskForm, toggleTaskForm] = useState(false);

    const [auth, setAuth] = useContext(authContext);
    const [user, setUser] = useContext(userContext);
    const [userData, setUserData] = useContext(dataContext);
    const [tasks, setTasks] = useState([]);
    
    const navigate = useNavigate()

    // set functions for buttons
    const showTask = (e) => {

        toggleTaskForm(false)
        setTask(e.target.getAttribute("data-index"));
    };

    const showNewTaskForm = () => {
        setTask("")
        toggleTaskForm(true)
    };

    useEffect(() => {
        let data;
        // if (!auth ) {
        //     navigate("/");
        // }

        async function getTasks() {
        if (auth && user) {
            try {
        await axios.get(fetchUrl, {headers: {Authorization: auth, user: user}, withCredentials: true})
        .then((res) => {
            data = res.data;
            setTasks(data);
        })
    } catch(err) 
    {
        console.log(err.message);
    }

    }}
    getTasks()
    ,[tasks]});

   return (
    <Layout>
         {auth ?
        <>
    {projectId ? 
    <h1 className="mt-20 text-center font-bold text-3xl">Task List - {userData.projects.filter(x => x._id == projectId)
    .map((x) => (
        <span>{x.projectName}</span>
    ))}</h1>
    :
    <h1 className="mt-20 text-center font-bold text-3xl">Task List - {user}</h1>}

    <div className="grid grid-cols-1 grid-rows-auto bg-red-500 w-4/5 m-auto mt-3 rounded-xl px-5 py-3">
        <div className="col-span-7 row-span-1">
        <h1 className="text-xl font-bold text-center">High Priority Tasks</h1> 
        </div>
        <div className="grid grid-cols-7 grid-rows-1 gap-4">
            {tasks.filter(x => x.highPriority == true && x.projectId == projectId).map(x => (
        <div key={x._id} className={x.taskCompleted == true ? "w-full h-32 p-3 bg-green-500 rounded-xl shadow-sm col-span-1 p-3 relative" : "relative p-3 w-full h-32 bg-white/50 rounded-xl shadow-sm col-span-1"}>
        <div className="relative block">
            {x.taskCompleted == true ? 
                <h1 className="absolute right-0 font-bold">Completed!</h1> :
                 ""}
            <h2 className="text-xl">{x.taskName}</h2>
        </div>
        <button onClick={showTask} data-index={x._id} className="absolute bottom-2 bg-white/50 px-2 shadow-md rounded-lg">View more</button>
        </div>
            ))}
        </div>

    </div>
    <div className="flex flex-row mt-5 gap-5 justify-center">
    <div className="flex flex-col gap-5 w-2/5 ml-5 pb-5">
            <div className="px-5 py-3 block m-5 mb-0 bg-green-500 shadow-md rounded-xl cursor-pointer" onClick={showNewTaskForm}>
                <h3 className="text-xl ml-5 font-bold"> <FontAwesomeIcon icon={faPlus}/>  Make a new task</h3>
            </div>
    <div className="grid grid-cols-3 grid-rows-auto gap-4">
    {tasks.filter(x => x.highPriority == false && x.projectId == projectId).map(x => (
        <div key={x._id} className={x.taskCompleted == true ? "relative h-32 p-3 bg-green-500 rounded-xl shadow-sm" : x.highPriority == true ? "relative h-32 p-3 bg-red-500 rounded-xl shadow-sm" : "relative h-32 p-3 bg-white/50 rounded-xl shadow-sm"}>
        <div className="relative block">
            {x.taskCompleted == true ? 
                <h1 className="absolute right-0 font-bold">Completed!</h1> :
                 ""}
            <h2 className="text-xl">{x.taskName}</h2>
        </div>
        <button onClick={showTask} data-index={x._id} className="absolute bottom-3 bg-white/50 px-2 shadow-md rounded-lg">View more</button>
        </div>
    ))}
    </div>
    </div>
    <div className="w-2/5 mr-10">
    <div className={task == "" ? "hidden" : "border-8 bg-white/50"} id="showTask">
        <Task task={task} todo={tasks}/>
    </div>

    <div className={showTaskForm == false ? "hidden" : "border-8 bg-white/50"}>
        <NewTaskForm/>
    </div>
    </div>
    </div>
    </>
    :
    <h1 className="mt-20 text-5xl text-center">You're not authorised!</h1>
            }
    </Layout>
  )
}

export default Tasks