import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Counter from "../component/counter"



const routes = [
    {
        path: "/Login",
        element: <Login/>
    },

    {
        path: "/SignUp",
        element: <SignUp/>
    },
    {
        path: "/",
        element: <SignUp/>
    },
    {
        path: "/counter",
        element:<Counter/>
    }

    
]

export default routes;