import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddTask from "../Pages/Task/AddTask/AddTask";
import CompleteTask from "../Pages/Task/CompleteTask/CompleteTask";
import Details from "../Pages/Task/Media/Details";
import Media from "../Pages/Task/Media/Media";
import MyTask from "../Pages/Task/MyTask/MyTask";
import Update from "../Pages/Task/MyTask/Update";
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
                loader: ({ params }) => fetch(`https://my-task-server-ebon.vercel.app/myTask/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`https://my-task-server-ebon.vercel.app/addTask/${params.id}`)
            }
        ]
    }
])

export default router;