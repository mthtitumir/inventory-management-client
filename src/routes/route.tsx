import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { routeGenerator } from "../utils/routeGenerator";
import { dashboardPaths } from "./dashboard.route";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/inventory' />,
    },
    {
        path: '/',
        element: <PrivateRoute><MainLayout /></PrivateRoute>,
        children: routeGenerator(dashboardPaths),
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
])

export default router;