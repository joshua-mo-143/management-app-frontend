import React, {useContext, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import Layout from '../../components/Layout'
import authContext from '../../context/authContext';
import userContext from '../../context/userContext';
import dataContext from '../../context/userDataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Project = () => {

  const params = useParams()
  const projectId = params.id;

    const [auth, setAuth] = useContext(authContext);
    const [user, setUser] = useContext(userContext);
    const [userData, setUserData] = useContext(dataContext);

    useEffect(() => {
      if (!auth || !userData) {
          navigate("/");
      }
  },[]);

  return (
    <Layout>
        <div className="text-center mt-20">
          {userData.projects.filter(x => x._id == projectId).map((project) => (
            <>
            <h1 className="text-3xl">Project - {project.projectName}</h1>
            <div className="grid grid-cols-4 grid-rows-5 p-5 gap-4">
              <div className="col-span-4 row-span-10 bg-red-500 rounded-xl p-5">
                <p className="text-center text-3xl font-bold">Project Brief</p>
                <hr className="w-1/5 my-4 border-black border-2 bg-black m-auto"/>
                <span className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic exercitationem id temporibus labore quam optio, dolor libero nobis. Quaerat nesciunt deleniti iure sint autem facere consequatur magni, omnis odit animi, inventore repellat placeat! Deserunt vitae itaque eligendi. Nemo facilis, enim dolorem repudiandae sapiente dolorum, corrupti aliquam eos quidem dolores obcaecati exercitationem? Iusto est deserunt placeat vitae iste. Quam dolor doloribus harum impedit cumque animi nihil vel accusantium beatae quisquam, deserunt inventore earum dignissimos, minima nisi fugiat recusandae non? Distinctio reiciendis asperiores earum, omnis amet expedita eveniet officiis voluptas quod? Quis quidem illo libero necessitatibus temporibus repudiandae, molestiae autem corrupti quam. Quae quas est delectus sunt et error. Alias voluptatem, ut cum ea sunt quidem aperiam optio rem rerum molestias consequatur numquam! Accusamus modi accusantium excepturi porro aut fuga qui, fugit minima totam distinctio iure ipsa illum. Quas, nobis officia. Sunt omnis inventore molestiae delectus? Totam labore consequuntur, harum explicabo, quia rem tenetur amet vel nobis quos, a illum quis dicta sunt doloremque ab! Assumenda iusto ea quia tempore alias aperiam ipsum tempora laudantium cumque consequatur optio, libero iure odio amet perferendis expedita nulla asperiores aut voluptatibus, eaque velit quo vel adipisci. Veritatis voluptates ratione recusandae ab quo iusto id, voluptatum quod neque earum cupiditate deleniti! Fugiat accusamus et repudiandae quos sunt! Eveniet obcaecati placeat ea qui nesciunt facilis illo. Tempore, assumenda odit incidunt, corrupti voluptatum beatae distinctio voluptatem quasi praesentium animi sed rerum error cupiditate quae quam eum nihil architecto amet dolorum doloribus vero fugit consequuntur libero. Aliquam nostrum, debitis deleniti, ad, quo quia error similique provident officia dolore id ipsum et mollitia necessitatibus doloribus optio! Reprehenderit illo perferendis corporis. Dignissimos nihil recusandae voluptatem, eius repellendus dolor possimus labore magni, sit consectetur saepe rerum sequi? Veritatis tenetur animi nemo cumque hic cum vero voluptates quos perspiciatis similique maxime eum amet, laboriosam molestiae, inventore quibusdam? Totam aperiam, iste cupiditate distinctio rem minus provident officia iure tempore sed, quos, necessitatibus accusantium sint sunt autem quaerat. Beatae eveniet assumenda at, eligendi in velit accusamus quidem, laborum fugit facilis necessitatibus alias adipisci repellat optio provident tenetur minus ipsum vitae quia ratione nobis? Quas magni saepe a maiores, optio omnis perferendis eligendi velit nesciunt nulla iure, voluptatem labore cum pariatur eius ducimus explicabo quos iusto ea, soluta necessitatibus veritatis dicta! Voluptatum, eum numquam aut odio voluptatibus itaque delectus earum facilis reiciendis ipsum illo illum natus neque nihil distinctio soluta. Exercitationem ea sequi reiciendis nesciunt, libero doloribus debitis quis error labore facere quos commodi itaque? Magni impedit non voluptates accusamus eos quisquam accusantium aperiam perspiciatis minima obcaecati, veniam laborum suscipit veritatis et dolore vel aliquam consectetur! Placeat facilis tempore autem nam aliquam culpa eum tenetur odio officiis commodi voluptatibus ipsum at, magnam necessitatibus illo saepe ducimus. Perspiciatis eaque aperiam accusamus amet odio corporis porro consequuntur. Hic tempora eius quidem. Voluptatem quisquam dolores ex fugiat ipsum asperiores accusamus, dignissimos officia repellendus modi architecto nam sit vero voluptas reiciendis omnis porro eligendi rerum facere neque! Quidem architecto facilis nesciunt quod magnam, officia dolorum inventore a recusandae omnis!</span>
              </div>
              <div className="col-span-1 row-span-1 bg-red-500 rounded-xl p-5">
                <p className="text-center text-3xl font-bold">Project Members:</p>
                <hr className="w-1/5 my-4 border-black border-2 bg-black m-auto"/>
                {project.projectMembers.map((member) => (
                  <p>{member.memberName}</p>
                ))}
              </div>
              <div className="col-span-1 row-span-1 flex flex-col gap-4">
                <div className="max-h-32 bg-red-500 rounded-xl p-5">
                  <p className="text-center text-3xl font-bold">Options:</p>
                  <div className="flex flex-row justify-around gap-4 mt-4">
                    <button className="bg-white/50 px-5 py-2 rounded-xl shadow-md">Complete</button>
                    <button className="bg-white/50 px-5 py-2 rounded-xl shadow-md">Edit</button>
                    <button className="bg-white/50 px-5 py-2 rounded-xl shadow-md">Delete</button>
                    </div>
                    </div>
                    <div className="h-[calc(100%-8rem)] bg-red-500 rounded-xl">
                    <p className="text-center text-3xl font-bold mt-5">Tasks:</p>
                    {userData.tasks.filter(x => x.projectId == projectId).length == 0 ? 
                    <Link to={`/dashboard/projects/${project._id}/tasks`}>
                                <div className="px-5 py-3 block m-5 mb-0 bg-green-500 shadow-md rounded-xl cursor-pointer">
                                <h3 className="text-xl ml-5 font-bold"> <FontAwesomeIcon icon={faPlus}/>  Make a new task</h3>
                            </div>
                            </Link>
                    : 
                    <div>
                      <Link to={`/dashboard/projects/${project._id}/tasks`}>
                          <div className="px-5 py-3 block m-5 mb-0 bg-white/50 shadow-md rounded-xl cursor-pointer">
                          <h3 className="text-xl ml-5 font-bold">See all your current tasks</h3>
                            </div>
                            </Link>
                            <div className="mt-4 flex flex-col gap-4 p-5">
                            <div className="rounded-xl bg-blue-500 py-20 items-center align-middle">
                            <p className="text-9xl">{userData.tasks.filter(x => x.projectId == projectId && x.taskCompleted == false).length}</p>
                            <p className="font-bold text-xl">Uncompleted tasks on this project</p>
                            </div>
                      </div>
                      </div>
                      }
                    </div>
              </div>

              </div>
              </>
          ))}
        </div>
    </Layout>
  )
}

export default Project