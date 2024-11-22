import { useState } from 'react'
import SignUp from './assets/auth/SignUp'
import Login from './assets/auth/Login'
import './App.css'
import routes from './assets/routes/routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Counter from "./assets/component/counter";

const router = createBrowserRouter([...routes]);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <RouterProvider router= {router }/>
      <h1>Redux Counter</h1>
      <Counter/> */}
    </>
  );
};

export default App;
