import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddTask from "../Pages/Task/AddTask/AddTask";
import CompleteTask from "../Pages/Task/CompleteTask/CompleteTask";
import MyTask from "../Pages/Task/MyTask/MyTask";

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
        ]
    }
])

export default router;