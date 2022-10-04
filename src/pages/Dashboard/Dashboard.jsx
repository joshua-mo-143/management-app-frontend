import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import authContext from '../../context/authContext'
import userContext from '../../context/userContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import CreateTeam from '../../components/CreateTeam';
import CreateProject from '../../components/CreateProject';
import dataContext from '../../context/userDataContext';

const Dashboard = () => {

    const [auth, setAuth] = useContext(authContext);
    const [user, setUser] = useContext(userContext);
    const [userData, setUserData] = useContext(dataContext);

    const [teamFormVis, setTeamFormVis] = useState(false);
    const [projFormVis, setProjFormVis] = useState(false);
    return (
        <>

        <Layout>
            {auth ?
                <>
                        {teamFormVis ? 
            <CreateTeam visible={teamFormVis}/> : projFormVis ? <CreateProject visible={projFormVis}/>
        : ""}
                    <h1 className="mt-20 text-center font-bold text-3xl pb-5">Dashboard - {user}</h1>
                    <div className="w-4/5 m-auto grid grid-cols-5 grid-rows-2 mt-5 gap-5">
                        <div className="col-span-1 row-span-1">
                            <Link to="/dashboard/tasks">
                                <div className="min-w-32 w-full h-full p-3 pt-10 rounded-xl bg-black text-white text-center">
                                    <p className="text-9xl font-bold">{userData ? userData.tasks.filter(x => x.taskCompleted == false).length : 0}</p>
                                    <p className="text-xl font-bold">Tasks left for you to do</p>
                                    <span className="text-sm">Click to view more</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-span-1 row-span-1">
                            <Link to="/dashboard/tasks">
                                <div className="min-w-32 w-full h-full p-3 pt-10 rounded-xl bg-black text-white text-center">
                                    <p className="text-9xl font-bold">{userData ? userData.tasks.filter(x => x.taskCompleted == false && x.highPriority == true).length : 0}</p>
                                    <p className="text-xl font-bold">High Priority tasks</p>
                                    <span className="text-sm">Click to view more</span>
                                </div>
                            </Link>

                        </div>
                        <div className="col-span-3 row-span-1">
                            <div className="w-full h-full rounded-xl p-3 text-center bg-black text-white">
                                <p className="text-3xl font-bold col-span-5 row-span-1">Your Teams</p>

                                
                                <div onClick={() => setTeamFormVis(true)}className="col-span-5 row-span-1 h-8 w-full p-5 mt-5 rounded-xl inline-flex flex-row items-center gap-4 bg-green-500 font-bold">
                                            <FontAwesomeIcon icon={faPlus} />
                                            <p>Create a team</p>
                                        </div>
                                        
                                        <div className="mt-2 grid grid-cols-5 grid-rows-1 gap-4 w-full h-32 rounded-xl"> 
                                        {userData ? userData.teams.slice(0,5).map((x) => (
                                            <Link to={`/dashboard/teams/${x._id}`} key={x._id}>
                                            <div className="cursor-pointer text-black bg-white col-span-1 row-span-1 w-full h-full rounded-xl pt-2">
                                                <p className="font-bold">{x.teamName}</p>
                                                <p>Click to view more</p>
                                            </div>
                                            </Link>
                                        )): ""}
                                        </div>
                            </div>
                        </div>
                        <div className="col-span-3 row-span-1">
                            <div className="w-full h-full rounded-xl p-3 bg-black text-white">
                                <p className="text-3xl font-bold text-center">Current Projects</p>
                                <div className="grid-cols-5 grid grid-rows-1">
                                    <div className="col-span-5 row-span-1">
                                    <div onClick={() => setProjFormVis(true)}className="cursor-pointer col-span-5 row-span-1 h-8 w-full p-5 mt-5 rounded-xl inline-flex flex-row items-center gap-4 bg-green-500 font-bold">
                                            <FontAwesomeIcon icon={faPlus} />
                                            <p>Create a project</p>
                                        </div>
                                        <div className="mt-2 grid grid-cols-5 grid-rows-1 gap-4 w-full h-32 rounded-xl"> 
                                        {userData ? userData.projects.slice(0,5).map((x) => (
                                            <Link to={`/dashboard/projects/${x._id}`}  key={x._id}>
                                            <div className="cursor-pointer text-black bg-white col-span-1 row-span-1 w-full h-full rounded-xl pt-2 text-center">
                                                <p className="font-bold ">{x.projectName}</p>
                                                <p>Click to view more</p>
                                            </div>
                                            </Link>
                                        )): ""}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 row-span-1">
                            <div className="w-full h-full rounded-xl p-3 text-center bg-black text-white">
                                <p className="text-xl font-bold pb-3">Online Team Members</p>
                                <p className="text-md">You're the only online person in your team :( </p>
                            </div>
                        </div>
                        <div className="min-w-32 w-full h-full p-3 pt-10 rounded-xl bg-black text-white text-center">
                            <p className="text-9xl font-bold">0</p>
                            <p className="text-xl font-bold">New messages</p>
                            <span className="text-sm">Click to view more</span>
                            
                        </div>
                    </div>
                </>
                : ""}
        </Layout>
        </>
    )
}

export default Dashboard