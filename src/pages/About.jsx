import React from 'react'
import Layout from '../components/Layout'
import TestimonySlider from '../components/TestimonySlider'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <Layout>
        <div className="w-full mt-20 ">
            <h1 className="text-6xl font-bold text-center pb-5 pt-5">What is Taskify?</h1>
            <div className="w-4/5 text-center m-auto p-5 rounded-xl">
                <span className="font-bold text-xs lg:text-2xl">
                    Taskify is an app designed specifically to faciliate project communication between your team members,
                     cutting out all the white noise and enabling crucial information to easily be accessed at the touch of a button.
                     
                    <br/>
                    <br/>
                    See which tasks have been delegated to each team member, set priority levels for various tasks, 
                    add comments to posts or leave a message for a team member. You'll no longer have to worry about whether
                     or not you've confirmed a deadline with a teammate via Outlook or Google Calendar. Exploring your options?
                     We also have a generous free tier for small business, entrepreneurs and small working teams.
                    <br/>
                    <br/>
                </span>
                <Link to="/pricing">
                <button className="bg-gray-100 px-4 py-2 text-xl rounded-xl font-bold shadow-md">
                  Check out our pricing here.
                  </button>
                  </Link>
                </div>
                <h1 className="text-6xl font-bold text-center pb-5 pt-5 mt-20">See what our customers are saying:</h1>
              <TestimonySlider/>
        </div>
        <div className="p-5"></div>
    </Layout>
  )
}

export default About