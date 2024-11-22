import { useState } from 'react'
import SignUp from './assets/auth/Signup'
import Login from './assets/auth/Login'
import './App.css'
import routes from './routes/routes'
import bookListPage from './component/BookListPage'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([...routes]);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router= {router }/>
    </>
  )
}

export default App;
