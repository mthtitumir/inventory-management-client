import { AppstoreOutlined, CodeSandboxOutlined, ShoppingCartOutlined, LineChartOutlined } from "@ant-design/icons"
import Dashboard from "../pages/dashboard/Dashboard"
import Inventory from "../pages/inventory/Inventory"
import SalesOrders from "../pages/sales/SalesOrders"
import MakeSellForm from "../components/form/MakeSellForm"
import InventorySettings from "../components/inventory/InventorySettings"

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
        path: 'inventory/settings',
        element: <InventorySettings />,
    },
    {
        name: 'Sales Orders',
        path: 'sales-orders',
        icon: <ShoppingCartOutlined />,
        element: <SalesOrders />,
    },
    {
        name: 'Reports',
        path: 'reports',
        icon: <LineChartOutlined />,
        element: <SalesOrders />,
    },
    {
        path: 'sell/:product',
        element: <MakeSellForm />,
    },
]