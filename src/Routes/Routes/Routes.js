import AddUserData from "../../Component/AddUserData/AddUserData";
import Dashboard from "../../Layout/Dashboard";
import Main from "../../Layout/Main";
import Donors from "../../pages/Donors/Donors";
import Home from "../../pages/Home/Home/Home";
import Profile from "../../pages/Profile/Profile";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/donoradd',
                element: <PrivateRoutes><AddUserData /></PrivateRoutes>
            },
            {
                path: '/donors',
                element: <Donors />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/signin',
                element: <SignIn />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    }
])
