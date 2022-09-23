import React from 'react'
import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout>
        <div className="w-full mt-20 ">
            <h1 className="text-6xl font-bold text-center pb-5 pt-5">What is Meme?</h1>
            <div className="w-4/5 text-center m-auto bg-purple-400 p-5 rounded-xl">
                <span className="font-bold text-xs lg:text-2xl">
                    Meme is an app designed specifically to faciliate project communication between your team members,
                     cutting out all the white noise and enabling crucial information to easily be accessed at the touch of a button.
                     
                    <br/>
                    <br/>
                    See which tasks have been delegated to each team member, set priority levels for various tasks, 
                    add comments to posts or leave a message for a team member. You'll no longer have to worry about whether
                     or not you've confirmed a deadline with a teammate via Outlook or Google Calendar.
                    <br/>
                    <br/>
                </span>
                </div>
                <h1 className="text-6xl font-bold text-center pb-5 pt-5">See what our customers are saying:</h1>
        </div>
    </Layout>
  )
}

export default About