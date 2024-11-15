import { useState } from 'react'
import SignUp from './assets/auth/Signup'
import Login from './assets/auth/Login'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> Fat Boy Wetin Be Your Babe Name</div>
      <h1>Welcome to react class</h1>
      <SignUp/> <Login />
      <button> Sign in </button>
    </>
  )
}

export default App;
