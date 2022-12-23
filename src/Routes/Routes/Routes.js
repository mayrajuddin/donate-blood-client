import Dashboard from "../../Layout/Dashboard";
import Main from "../../Layout/Main";
import AddBlood from "../../pages/Dashboard/AddBlood/AddBlood";
import Overview from "../../pages/Dashboard/Overview/Overview";
import Donors from "../../pages/Donors/Donors";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Profile from "../../pages/Profile/Profile";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
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
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <Overview />
            },
            {
                path: '/dashboard/addblood',
                element: <AddBlood />
            }
        ]
    }
])
