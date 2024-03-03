import { ShoppingCartOutlined } from "@ant-design/icons"
import Dashboard from "../pages/dashboard/Dashboard"
import Inventory from "../pages/inventory/Inventory"
import SalesOrders from "../pages/sales/SalesOrders"
import MakeSellForm from "../components/form/MakeSellForm"
import InventorySettings from "../components/inventory/InventorySettings"
import { IoStorefrontOutline } from "react-icons/io5";
import { BiHome, BiPurchaseTag } from "react-icons/bi";
import { ImStatsBars } from "react-icons/im";
import AddTradingPartner from "../components/form/AddTradingPartner"

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
            {
                path: 'inventory/settings',
                element: <InventorySettings />,
            },
        ]
    },
    {
        name: 'Sales',
        icon: <ShoppingCartOutlined />,
        children: [
            {
                name: 'Orders',
                path: 'sales/orders',
                element: <SalesOrders />,
            },
            {
                name: 'Buyers',
                path: 'sales/buyers',
                element: <SalesOrders />,
            },
            {
                path: 'sales/buyers/add-new-buyer',
                element: <AddTradingPartner type="Buyer" />,
            },
        ]
    },
    {
        name: 'Purchases',
        // path: 'sales-orders',
        icon: <BiPurchaseTag />,
        children: [
            {
                name: 'Orders',
                path: 'purchases/orders',
                element: <SalesOrders />,
            },
            {
                name: 'Suppliers',
                path: 'purchases/suppliers',
                element: <SalesOrders />,
            },
            {
                path: 'purchases/suppliers/add-new-supplier',
                element: <AddTradingPartner type="Supplier" />,
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