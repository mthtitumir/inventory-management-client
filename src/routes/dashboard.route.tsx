import { ShoppingCartOutlined } from "@ant-design/icons"
import Dashboard from "../pages/dashboard/Dashboard"
import Inventory from "../pages/inventory/Inventory"
import SalesOrders from "../pages/sales/SalesOrders"
import MakeSellForm from "../components/form/MakeSellForm"
import InventorySettings from "../components/inventory/InventorySettings"
import { IoStorefrontOutline } from "react-icons/io5";
import { BiHome, BiPurchaseTag  } from "react-icons/bi";
import { ImStatsBars } from "react-icons/im";

export const dashboardPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        icon: <BiHome />,
        element: <Dashboard />,
    },
    {
        name: 'Inventory',
        icon: <IoStorefrontOutline />,
        children: [
            {
                name: 'Items',
                path: 'inventory/items',
                element: <Inventory />,
            },
            {
                path: 'inventory/sell/:product',
                element: <MakeSellForm />,
            },
        ]
    },
    {
        path: 'inventory/settings',
        element: <InventorySettings />,
    },
    {
        name: 'Sales',
        // path: 'sales-orders',
        icon: <ShoppingCartOutlined />,
        children: [
            {
                name: 'Orders',
                path: 'sales/orders',
                element: <SalesOrders />,
            },
            {
                name: 'Customers',
                path: 'sales/customers',
                element: <SalesOrders />,
            }
        ]
    },
    {
        name: 'Purchases',
        // path: 'sales-orders',
        icon: <BiPurchaseTag />,
        children: [
            {
                name: 'Orders',
                path: 'purchase/orders',
                element: <SalesOrders />,
            },
            {
                name: 'Customers',
                path: 'purchase/suppliers',
                element: <SalesOrders />,
            },
        ]
    },
    {
        name: 'Reports',
        path: 'reports',
        icon: <ImStatsBars />,
        element: <SalesOrders />,
    },
    // {
    //     path: 'sell/:product',
    //     element: <MakeSellForm />,
    // },
]