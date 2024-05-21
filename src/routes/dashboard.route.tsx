import Dashboard from "../pages/dashboard/Dashboard"
import Inventory from "../pages/inventory/Inventory"
import SalesOrders from "../pages/sales/SalesOrders"
import MakeSellForm from "../components/form/MakeSellForm"
import InventorySettings from "../components/inventory/InventorySettings"
import { IoStorefrontOutline } from "react-icons/io5";
import { ImStatsBars } from "react-icons/im";
import AddTradingPartner from "../components/form/AddTradingPartner"
import AddUpdateFlower from "../components/form/AddUpdateFlower"
import BuyerList from "../components/sales/BuyerList"
import SupplierList from "../components/purchases/SupplierList"
import Discounts from "../pages/sales/Discounts"
import { Icon } from "../icons"
import Employees from "../pages/company/Employees"

export const dashboardPaths = [
    {
        name: 'Dashboard',
        path: '/',
        icon: <Icon.Home />,
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
        icon: <Icon.ShoppingCartOutlined />,
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
                name: 'Discounts',
                path: 'sales/discounts',
                element: <Discounts />,
            },
            {
                path: 'sales/buyers/add-new-buyer',
                element: <AddTradingPartner type="Buyer" />,
            },
        ]
    },
    {
        name: 'Purchases',
        icon: <Icon.PurchaseTag />,
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
        name: 'Company Info',
        icon: <Icon.InfoCircle />,
        children: [
            {
                name: 'Discounts',
                path: 'info/coupons',
                element: <Discounts />,
            },
            {
                name: 'Employees',
                path: 'info/employees',
                element: <Employees />,
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