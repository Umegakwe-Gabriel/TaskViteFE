import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/common/Layout"
import TaskScreen from "../pages/screen/TaskScreen"
import Register from "../pages/auth/Register"
import SignIn from "../pages/auth/SignIn"

export const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <TaskScreen/>
            }
        ]
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/sign-in",
        element: <SignIn/>
    }
])

