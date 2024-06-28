import { IoMdCheckbox, IoIosArrowDown, IoIosArrowRoundForward, IoMdNotificationsOutline, IoMdClose } from "react-icons/io";
import { BsCloudUpload, BsCartCheckFill } from "react-icons/bs";
import { PlusOutlined, UserAddOutlined, MoreOutlined, FilterTwoTone, MailOutlined, LockOutlined } from '@ant-design/icons';
import { FaRegUser, FaSearchengin, FaRegEdit, FaFacebookSquare, FaInstagramSquare, FaStripe, FaEtsy, FaEbay, FaAmazon, FaSalesforce } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineShoppingCart, MdOutlineDeleteOutline, MdDriveFileRenameOutline, MdOutlineHomeWork, MdDiscount } from "react-icons/md";
import { BiHome, BiInfoCircle, BiPurchaseTag } from "react-icons/bi";
import { SiBigcommerce, SiShopify, SiWoocommerce } from "react-icons/si";

export const Icon = {
    ArrowDown : IoIosArrowDown,
    ArrowRight : IoIosArrowRoundForward,
    Upload: BsCloudUpload,
    PlusOutlined,
    UserAddOutlined,
    Search: FaSearchengin,
    NotificationsOutlined:IoMdNotificationsOutline,
    SettingsOutlined: IoSettingsOutline,
    ShoppingCartOutlined: MdOutlineShoppingCart,
    RegUser: FaRegUser,
    Home: BiHome,
    PurchaseTag: BiPurchaseTag,
    InfoCircle: BiInfoCircle,
    DeleteOutlined: MdOutlineDeleteOutline,
    Edit: FaRegEdit,
    Close: IoMdClose,
    MoreOutlined,
    FilterTwo: FilterTwoTone,
    MailOutlined,
    LockOutlined,
    RenameOutlined: MdDriveFileRenameOutline,
    // homepage section three 
    sales: BsCartCheckFill,
    discount: MdDiscount,
    inventory: MdOutlineHomeWork,
    tick: IoMdCheckbox,
    // our partners 
    wooCom: SiWoocommerce,
    bigCom: SiBigcommerce,
    facebook: FaFacebookSquare,
    insta: FaInstagramSquare,
    shopify: SiShopify,
    stripe: FaStripe,
    etsy: FaEtsy,
    ebay: FaEbay,
    amazon: FaAmazon,
    salesForce: FaSalesforce,
}