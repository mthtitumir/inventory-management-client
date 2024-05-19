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
import AddUpdateFlower from "../components/form/AddUpdateFlower"
import Carts from "../components/sales/Carts"
import BuyerList from "../components/sales/BuyerList"
import SupplierList from "../components/purchases/SupplierList"
import Checkout from "../pages/sales/Checkout"

export const dashboardPaths = [
    {
        name: 'Dashboard',
        path: '/',
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
                path: 'inventory/items/add-item',
                element: <AddUpdateFlower type="add" />,
            },
            {
                path: 'inventory/items/edit-item/:itemId',
                element: <AddUpdateFlower type="update" />,
            },
            {
                path: 'inventory/items/make-item-variant/:itemId',
                element: <AddUpdateFlower type="variant" />,
            },
            {
                path: 'inventory/items/sell-item/:itemId',
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
                element: <BuyerList />,
            },
            {
                name: 'Checkout',
                path: 'sales/checkout',
                element: <Checkout />,
            },
            {
                name: 'Carts',
                path: 'sales/carts',
                element: <Carts />,
            },
            {
                path: 'sales/buyers/add-new-buyer',
                element: <AddTradingPartner type="Buyer" />,
            },
        ]
    },
    {
        name: 'Purchases',
        icon: <BiPurchaseTag />,
        children: [
            {
                name: 'All Purchase',
                path: 'purchases/orders',
                element: <SalesOrders />,
            },
            {
                name: 'Suppliers',
                path: 'purchases/suppliers',
                element: <SupplierList />,
            },
            {
                path: 'purchases/suppliers/add-new-supplier',
                element: <AddTradingPartner type="Supplier" />,
            },
        ]
    },
    {
        name: 'Info',
        icon: <BiPurchaseTag />,
        children: [
            {
                name: 'Coupons',
                path: 'info/coupons',
                element: <SalesOrders />,
            },
            {
                name: 'Membership',
                path: 'info/membership',
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