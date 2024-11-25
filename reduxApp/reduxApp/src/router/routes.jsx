import Login from "../auth/Login";
import SignUp from "../auth/Signup";
import Counter from "../component/counter";
import Layout from "../layout/layout";

const Routes = [
    {
        path: "/",
        element: <Login/>
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path: "/signUp",
        element: <SignUp/>
    },
    {
        path: "/counter",
        element: <Counter/>
    },
    {
        path: "/movie",
        element: <Layout/>,
        children: [
            {

            }

        ]
    }
]

export default Routes;

