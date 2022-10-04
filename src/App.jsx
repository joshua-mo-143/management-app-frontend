import { createContext, useState, useEffect } from 'react'
import AllRoutes from './pages/AllRoutes'
import authContext from './context/authContext.jsx'
import userContext from './context/userContext'
import dataContext from './context/userDataContext'

function App() {

  const [auth, setAuth] = useState(null)
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setAuth('JWT ' + JSON.parse(localStorage.getItem('jwt')));
    setUser(localStorage.getItem('user'));
  }, [])

  return (
    <authContext.Provider value={[auth, setAuth]}>
      <userContext.Provider value={[user, setUser]}>
      <dataContext.Provider value={[userData, setUserData]}>
        <AllRoutes />
        </dataContext.Provider>
      </userContext.Provider>
    </authContext.Provider>
  )
}

export default App
