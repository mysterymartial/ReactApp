import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import counter from './component/counter'
import Counter from './component/counter'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import  Routes  from './router/routes'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([...Routes]);

  return (
    <div>

    <RouterProvider router={router}/>

    
      
      
    </div>
  )
}

export default App
