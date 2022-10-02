import React, {useContext} from 'react'
import authContext from '../context/authContext';
import userContext from '../context/userContext'
import axios from 'axios'

const CommentsForm = () => {

    const [user, setUser] = useContext(userContext);
    const [auth, setAuth] = useContext(authContext);

    const submitComment = () => {
        axios.get
    }

    return (

        <form className="relative p-3 flex flex-col w-4/5 m-auto">
            <h1>Want to leave your thoughts?</h1>
            <textarea cols="110" rows="3" className="my-2" />
            <div className="flex justify-end">
                <button value="submit" type="submit" className="mt-3 relative mr-5 py-2 px-5 rounded-xl font-bold bg-blue-500">Add comment</button>
            </div>
        </form>
    )
}

export default CommentsForm