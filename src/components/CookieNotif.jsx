import { faCross, faMultiply } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'

const CookieNotif = () => {

    const [clicked, setClicked] = useState(false);

    const acknowledgeClick = () => {
        localStorage.setItem('cookie_acknowledgement', true);
        setClicked(true);
    }

    useEffect(() => {
        if (localStorage.getItem('cookie_acknowledgement')) { 
            setClicked(true)
        }
    },[])

  return (
    <>
    {!localStorage.getItem('cookie_acknowledgement') ?
    <div className="fixed bottom-0 w-screen flex flex-row h-5 text-sm justify-center items-center text-center bg-white gap-4 py-2">
    <p className="text-center">This website uses cookies for the sake of storing your login sessions. By continuing to use this site, you agree to our usage.</p>
    <FontAwesomeIcon icon={faMultiply} className="text-blue-500 cursor-pointer" onClick={acknowledgeClick}/>
    </div>
    : 
     "" }
     </>
  )
}

export default CookieNotif