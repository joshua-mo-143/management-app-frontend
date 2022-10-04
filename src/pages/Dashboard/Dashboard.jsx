import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import authContext from '../../context/authContext'
import userContext from '../../context/userContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const [auth, setAuth] = useContext(authContext);
    const [user, setUser] = useContext(userContext);

  return (
    <Layout>
        {auth ? 
        <>
            <h1 className="mt-20 text-center font-bold text-3xl pb-5">Dashboard</h1>
            <div className="w-4/5 m-auto grid grid-cols-5 grid-rows-2 mt-5 gap-5">
                <div className="col-span-1 row-span-1">
                <Link to="/dashboard/tasks">
                    <div className="min-w-32 w-full h-full p-3 pt-10 rounded-xl bg-black text-white text-center">
                        <p className="text-9xl font-bold">0</p>
                        <p className="text-xl font-bold">Tasks left for you to do</p>
                        <span className="text-sm">Click to view more</span>
                    </div>
                    </Link>
                </div>
                <div className="col-span-1 row-span-1">
                <Link to="/dashboard/tasks">
                    <div className="min-w-32 w-full h-full p-3 pt-10 rounded-xl bg-black text-white text-center">
                        <p className="text-9xl font-bold">2</p>
                        <p className="text-xl font-bold">High Priority tasks</p>
                        <span className="text-sm">Click to view more</span>
                    </div>
                    </Link>

                </div>
                <div className="col-span-3 row-span-1">
                    <div className="w-full h-full rounded-xl p-3 text-center bg-black text-white">
                        <p className="text-3xl font-bold">Team notes</p>
                        <p className="text-left pt-3">Nothing at the moment. </p>
                    </div>
                </div>
                <div className="col-span-3 row-span-1">
                <div className="w-full h-full rounded-xl p-3 text-center bg-black text-white">
                        <p className="text-3xl font-bold">Current Projects</p>
                        <p className="text-left pt-3">Nothing at the moment. Maybe you need to make a project?</p>
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
            :""}
    </Layout>
  )
}

export default Dashboard