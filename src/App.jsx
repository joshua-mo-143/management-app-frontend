import { createContext, useState} from 'react'
import AllRoutes from './pages/AllRoutes'
import authContext from './context/authContext.jsx'
import userContext from './context/userContext'

function App() {

  const [auth, setAuth] = useState(null)
  const [user, setUser] = useState(null)

    // this variable forces child context values to only change if original value has been changed

  return (
    <authContext.Provider value={[auth, setAuth]}>
    <userContext.Provider value={[user, setUser]}>
    <AllRoutes/>
    </userContext.Provider>
    </authContext.Provider>
  )
}

export default App
