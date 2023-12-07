import './App.css'
import SignUp from './components/SignupForm'
import Authenticate from './components/Authenticate'
import { useState } from 'react'

function App() {
   const [token, setToken] = useState(null)


  return (
    <div>
        <SignUp setToken={setToken}/>
        <Authenticate token={token}/>
    </div>
    
  )
}

export default App
