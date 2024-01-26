import { AppstoreOutlined, CodeSandboxOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import Dashboard from "../pages/dashboard/Dashboard"
import Inventory from "../pages/inventory/Inventory"
import SalesOrders from "../pages/sales/SalesOrders"

export const dashboardPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        icon: <AppstoreOutlined />,
        element: <Dashboard />,
    },
    {
        name: 'Inventory',
        path: 'inventory',
        icon: <CodeSandboxOutlined />,
        element: <Inventory />,
    },
    {
        name: 'Sales Orders',
        path: 'inventory',
        icon: <ShoppingCartOutlined />,
        element: <SalesOrders />,
    },
]