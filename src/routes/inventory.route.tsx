import { IoStorefrontOutline } from "react-icons/io5";
import MakeSellForm from "../components/form/MakeSellForm";
import Inventory from "../pages/inventory/Inventory";


export const inventoryPaths = {
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
}