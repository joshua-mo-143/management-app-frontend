import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import authContext from '../../context/authContext';
import userContext from '../../context/userContext'
import dataContext from '../../context/userDataContext';

const Teams = () => {

    const params = useParams();
    const teamId = params.id;

    const [user, setUser] = useContext(userContext);
    const [auth, setAuth] = useContext(authContext);
    const [userData, setUserData] = useContext(dataContext);  
  return (
    <Layout>
        <div className="mt-20">
            {userData.teams.filter(x => x._id == teamId).map((team) => (
                <>
            <h1 className="text-3xl text-center">Team - {team.teamName}</h1>
            <div className="mx-4 grid grid-cols-3 grid-rows-3 gap-4">
                <div className="col-span-2 row-span-1 rounded-xl bg-red-500">
                    <p className="text-xl text-center pt-3">Projects handled by this team</p>
                    <div className="grid grid-cols-3 grid-rows-auto p-3 gap-4">
                    {userData.projects.filter(x => x.assignedTeamId == teamId).map((project) => (
                        <Link to={`/dashboard/projects/${project._id}`}>
                        <div className="col-span-1 bg-white/50 rounded-xl p-2">
                            <p className="text-lg">{project.projectName}</p>
                            <hr className="border-black "/>
                            <p className="text-md ml-2 h-56">
                                {project.projectBrief.length > 75 ? 
                            project.projectBrief.slice(75)+"..." : 
                            project.projectBrief}</p>
                            <p className="text-sm">Click to view more</p>
                        </div>
                        </Link>
                        
                    ))}
                    </div>
                </div>
                <div className="col-span-1 row-span-1 rounded-xl bg-red-500">

                </div>
            </div>
                </>
            ))}
        </div>
    </Layout>
  )
}

export default Teams