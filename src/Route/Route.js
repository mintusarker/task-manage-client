import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddTask from "../Pages/Task/AddTask/AddTask";
import CompleteTask from "../Pages/Task/CompleteTask/CompleteTask";
import Details from "../Pages/Task/Media/Details";
import Media from "../Pages/Task/Media/Media";
import MyTask from "../Pages/Task/MyTask/MyTask";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/addtask',
                element: <AddTask></AddTask>
            },
            {
                path: '/mytask',
                element: <MyTask></MyTask>
            },
            {
                path: '/completetask',
                element: <CompleteTask></CompleteTask>
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/myTask/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/myTask/${params.id}`)
            },
        ]
    }
])

export default router;