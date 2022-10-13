
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Layout from '../components/Layout'
import { Link, useNavigate } from 'react-router-dom'

export const Pricing = () => {

  let navigate = useNavigate();

  const goRegister = () => {
    navigate('/register')
  }

  return (
    <Layout>
      <div className="mt-20"></div>
      <h1 className="text-center text-6xl pt-5 font-bold">Pricing</h1>
      <div className="flex flex-cols justify-center gap-5 mt-20">

        {/* free tier */}
        <div className="rounded-xl w-1/4 flex flex-col bg-yellow-200 shadow-md">
          <h1 className="text-3xl text-center mt-3 font-bold">Free</h1>
          <span class="text-center">It's free!</span>
          <hr className="my-3 mx-32 border-black" />
          <p className="text-center">Experience our app for free. Good for freelancers, small businesses and personal projects.</p>
          <hr className="my-3 mx-32 border-black" />

          <ul className="list-none text-center text-2xl">Perks:
            <li className="text-left text-lg ml-3"><FontAwesomeIcon icon={faCheck} /> Up to 3 users in your team</li>
            <li className="text-left text-lg ml-3"><FontAwesomeIcon icon={faCheck} /> Up to 3 projects</li>
            <li className="text-left text-lg ml-3"><FontAwesomeIcon icon={faCheck} /> Store up to 50 posts, just for your team</li>
            <li className="text-left text-lg ml-3"><FontAwesomeIcon icon={faCheck} /> Comment on your team's posts</li>
            <li className="text-left text-lg ml-3"><FontAwesomeIcon icon={faCheck} /> Delegate tasks to team members</li>
            <li className="text-left text-lg ml-3"><FontAwesomeIcon icon={faCheck} /> Customer service aftercare</li>
          </ul>
          <button className="my-5 m-auto w-1/2 py-2 bg-blue-500 rounded-tl-xl rounded-xl" onClick={goRegister}>Get started</button>
        </div>

        {/* premium tier */}
        <div className="w-1/4 flex flex-col rounded-xl bg-blue-300 shadow-md">
        <span className="text-red-700 font-bold text-center absolute text-xl ml-2">Popular!</span>
          <h1 className="text-3xl text-center font-bold mt-3">Premium</h1>
          <span class="text-center">$10 per user, per month.</span>
          <hr className="my-3 mx-32 border-black" />
          <p className="text-center">Get started with the app that will transform the way your company manages projects.</p>
          <hr className="my-3 mx-32 border-black" />

          <ul className="list-none text-center text-2xl">Perks:
          <li className="text-left text-lg ml-3"><FontAwesomeIcon icon={faCheck} /> Everything in the Free tier!</li>
            <li className="text-left text-lg ml-3"><FontAwesomeIcon icon={faCheck} /> Up to 8 users in your team</li>
            <li className="text-left text-lg ml-3"><FontAwesomeIcon icon={faCheck} /> Store an infinite amount of posts</li>
            <li className="text-left text-lg ml-3"><FontAwesomeIcon icon={faCheck} /> Add priority levels to your tasks</li>
            <li className="text-left text-lg ml-3"><FontAwesomeIcon icon={faCheck} /> Task completion history</li>
            <li className="text-left text-lg ml-3"><FontAwesomeIcon icon={faCheck} /> Ensure your information source is streamlined</li>
          </ul>
          <button className="my-5 m-auto w-1/2 py-2 bg-blue-500 rounded-tl-xl rounded-xl" onClick={goRegister}>Get started</button>
        </div>

                {/* Corporate tier */}
                <div className="w-1/4 flex flex-col rounded-xl bg-purple-300 shadow-md">
          <h1 className="text-3xl text-center mt-3 font-bold">Corporate</h1>
          <span class="text-center">Call us for a quote</span>
          <hr className="my-3 mx-32 border-black" />
          <p className="text-center">Looking for bespoke requirements? Let us help you make the vision happen.</p>
          <hr className="my-3 mx-32 border-black" />

          <p className="text-left text-lg ml-3">For that special touch, we're willing to tailor our app to your specification to
          help your company facilitate communication as seamlessly and painlessly as possible. </p>

          <button className="my-5 w-1/2 mx-auto py-2 bg-blue-500 rounded-tl-xl rounded-xl">Contact Sales</button>
        </div>

      </div>
    </Layout>
  )
}

export default Pricing