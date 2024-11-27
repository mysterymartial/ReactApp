import Login from "../auth/Login";
import SignUp from "../auth/Signup";
import Counter from "../component/counter";
import PopularMovies from "../component/popularMovies";
import Layout from "../layout/layout";
import popular from "../component/popularMovies";
import UpcomingMovies from "../component/upcomingMovies";
import NowPlaying from "../component/NowPlaying";
import TopRatedMovies from "../component/TopRatedMovies";



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
                path:"/movie/popular",
                element: <PopularMovies/>
            },
            {
                path: "/movie/upcoming",
                element: <UpcomingMovies/>
            },
            {
                path: "/movie/nowplaying",
                element: <NowPlaying/>
            },
            {
                path: "/movie/rated",
                element: <TopRatedMovies/>
            },
            

        ]
    }
]

export default Routes;

