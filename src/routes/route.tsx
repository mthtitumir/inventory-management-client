import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { routeGenerator } from "../utils/routeGenerator";
import { dashboardPaths } from "./dashboard.route";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to='/dashboard' />,
    },
    {
        path: '/',
        element: <MainLayout />,
        children: routeGenerator(dashboardPaths),
    },
])

export default router;