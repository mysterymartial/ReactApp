import Login from "../assets/auth/Login";
import SignUp from "../assets/auth/Signup";


const routes = [
    {
        path: "/Login",
        element: <Login/>
    },

    {
        path: "/SignUp",
        element: <SignUp/>
    }
]

export default router;