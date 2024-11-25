import Login from "../assets/auth/Login";
import SignUp from "../assets/auth/Signup";
import BookListPage from "../component/BookListPage";


export const routes = [
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
    path: "/bookList",
    element: <BookListPage/>
    }
]

