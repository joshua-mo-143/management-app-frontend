import React, {Component, useContext, useEffect, useState} from 'react'
import axios from 'axios';
import Layout from '../../components/Layout';
import Task from '../../components/Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import NewTaskForm from '../../components/NewTaskForm';
import authContext from '../../context/authContext';
import userContext from '../../context/userContext';
import { useNavigate } from 'react-router-dom';

const Tasks = (props) => {

    // set states
    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState("");
    const [showTaskForm, toggleTaskForm] = useState(false);
    const [auth, setAuth] = useContext(authContext);
    const [user, setUser] = useContext(userContext);

    const navigate = useNavigate()

    // set vars
    let data;
    let fetchUrl = 'http://localhost:3000/tasks';

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
        if (!auth) {
            navigate("/");
        }
    },[]);


    // send Axios query to API to get data
    useEffect(() => {        
        async function getData() {
            if (auth && user) {
            await axios.get(fetchUrl, {headers: {Authorization: auth, user: user}, withCredentials: true})
                  .then(res => {
                      data = res.data;
                      setTodo(data);
                  })
              .catch(err => {
                  console.error(err);
              })
            }}
            getData()
        },
        [todo]);
  return (
    
    <Layout> {auth ?
        <>
    <h1 className="mt-20 text-center font-bold text-3xl">Task List - {user}</h1>
    <div className="flex flex-row mt-5 gap-5 justify-center">
    <div className="flex flex-col gap-5 w-2/5 ml-5 pb-5">
            <div className="px-5 py-3 block m-5 mb-0 bg-green-500 shadow-md rounded-xl cursor-pointer" onClick={showNewTaskForm}>
                <h3 className="text-xl ml-5 font-bold"> <FontAwesomeIcon icon={faPlus}/>  Make a new task</h3>
            </div>
    {todo.sort((a,b) => b.highPriority - a.highPriority).map(x => (
        <div key={x._id} className={x.taskCompleted == true ? "mx-10 p-3 bg-green-500 rounded-xl shadow-sm" : x.highPriority == true ? "mx-10 p-3 bg-red-500 rounded-xl shadow-sm" : "mx-10 p-3 bg-white/50 rounded-xl shadow-sm"}>
        <div className="relative block">
            {x.taskCompleted == true ? 
                <h1 className="absolute right-0 font-bold">Completed!</h1> :
                x.highPriority == true ?
                <h1 className="absolute right-0 font-bold">HIGH PRIORITY</h1> :
                 ""}
            <h2 className="text-xl">{x.taskName}</h2>
            <p>{x.taskDesc.length >= 50 ? `${x.taskDesc.slice(0,50)}...` : x.taskDesc}</p>
            <p className={x.taskCompleted == true ? "text-black" : "text-gray-400"}>Created {x.taskDate.slice(0,10)} by {x.taskOwner}</p>
        </div>
        <button onClick={showTask} data-index={x._id} className="bg-white/50 px-2 shadow-md rounded-lg">View more</button>
        </div>
    ))}
    </div>
    <div className="w-2/5 mr-10">
    <div className={task == "" ? "hidden" : "border-8 bg-white/50"} id="showTask">
        <Task task={task} todo={todo}/>
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