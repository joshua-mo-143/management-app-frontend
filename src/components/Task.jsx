import React, {useContext, useState} from 'react'
import axios from 'axios'
import authContext from '../context/authContext';
import CommentsForm from './CommentsForm';
import userContext from '../context/userContext';
import dataContext from '../context/userDataContext';

const Task = (props) => {

    const [auth, setAuth] = useContext(authContext);
    const [user, setUser] = useContext(userContext);
    const [userData, setUserData] = useContext(dataContext);

// delete task
    async function deleteTask(e) {
        let toDelete = e.target.getAttribute("data-index");
        let fetchUrl = `http://localhost:3000/tasks/${toDelete}`;

        await axios.delete(fetchUrl, {data: {_id: toDelete}}, {headers: {Authorization: auth, user: user}, withCredentials: true});
    }
// complete task
    async function completeTask(e) {
        let toComplete = e.target.getAttribute("data-index");
        let fetchUrl = `http://localhost:3000/tasks/${toComplete}`;

        await axios.patch(fetchUrl, {"taskCompleted": true, "taskCompletedBy": user}, {headers: {Authorization: auth, user: user}, withCredentials: true});
    }
// undo complete status of task
    async function undoComplete(e) {
        let toComplete = e.target.getAttribute("data-index");
        let fetchUrl = `http://localhost:3000/tasks/${toComplete}`;

        await axios.patch(fetchUrl, {"taskCompleted": false, "taskCompletedBy": null},  {headers: {Authorization: auth, user: user}, withCredentials: true});
    }

  return (
    <div className="">
    {props.todo.filter(x => x._id == props.task).map((x) => (
        // task data
        <div className="ml-5" key={x._id}>
            <h1 className="text-2xl mt-10">{x.taskName}</h1>
            <hr className="my-5 mx-10 border-black"/>
            <p className="w-4/5 m-auto whitespace-pre-wrap">{x.taskDesc}</p>
            <hr className="my-5 mx-10 border-black"/>

            {/* creation info */}
            <div className="inline-flex flex-row gap-5 items-center pb-5">
                <div className="text-xs">
            <p>Created by: {x.taskOwner}</p>
            <p>Creation date: {x.taskDate.slice(0,10)}</p>
            </div>

            {/* user options */}
            <p className="items-center">Options: </p>
            {x.taskCompleted == true ? 
            <button className="h-full bg-white inline py-1 px-3 bg-gray-300 font-bold rounded-xl shadow-sm" onClick={undoComplete} data-index={x._id}>Undo complete</button>
        :

        <button className="h-full inline py-1 px-3 bg-green-500 font-bold rounded-xl shadow-sm" onClick={completeTask} data-index={x._id}>Complete</button>}
            <button className="h-full bg-white inline py-1 px-3 bg-red-400 font-bold rounded-xl shadow-sm" onClick={deleteTask} data-index={x._id}>Delete</button>
            </div>
        </div>
    ))}
    </div>
  )
}

export default Task