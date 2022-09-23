import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { data } from 'autoprefixer';
import Layout from '../../components/Layout';


const Dashboard = (props) => {

    const [todo, setTodo] = useState([]);

    let data;
    let fetchUrl = 'http://localhost:3000/tasks';

    useEffect(() => {
        async function getData() {
            await axios.get(fetchUrl)
                  .then(res => {
                      data = res.data;
                      setTodo(data);
                  })
              .catch(err => {
                  console.error(err);
              })
            }
            getData();
        },
        []);

        console.log(todo);
  return (
    <Layout>
    <h1 className="mt-20 text-center font-bold text-3xl">Dashboard</h1>
    <div className="flex flex-col gap-5 mt-5 w-2/5 border border-8 ml-5">
        <article className="mx-10">
            <div className="p5-block">
                <h3 className="text-xl ml-5 mt-5"> + Make a new objective?</h3>
            </div>
        </article>
    {todo.map(x => (
        <article key={x._id} className="mx-10">
        <div className="p-5 block">
            <h2 className="text-3xl">{x.taskName}</h2>
            <p>{x.taskDesc}</p>
            <p className="text-gray-300">Created {x.taskDate.slice(0,10)} by Guest</p>
        </div>
        </article>
    ))}
    </div>
    <div className="w-3/5">
        {props.children}
    </div>
    </Layout>
  )
}

export default Dashboard