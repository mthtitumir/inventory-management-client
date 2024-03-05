import { Avatar, Flex } from "antd";
import { MenuOutlined, PlusOutlined, UserAddOutlined } from '@ant-design/icons';
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import MyDrawer from "./MyDrawer";
import LeftSidebar from "../layout/LeftSidebar";
import SearchBox from "./SearchBox";
import { mainBg, negMainBg } from "../layout/MainLayout";
import { Link } from "react-router-dom";
import AddAnything from "../form/AddAnything";
import MyPopover from "./MyPopover";

export const LogoNameContent = (
    <Flex align="center" justify="start" gap={5} style={{ margin: "10px 0 10px 10px", borderBottom: "1px solid #e6f4ff" }}>
        <img style={{ width: "40px" }} src="https://i.ibb.co/XZGDHvv/floral-vista-logo.png" />
        <h4 style={{ color: "white" }}>Flora Vista</h4>
    </Flex>
)

const Navbar = () => {
    // const openPopIcon = (<CloseOutlined style={{ outline: "white", backgroundImage: negMainBg, color: "white", borderRadius: "5px", padding: "5px", textAlign: "center" }} />);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const openPopIcon = (<PlusOutlined style={{ outline: "white", backgroundImage: isPopoverOpen ? mainBg : negMainBg, color: "white", borderRadius: "5px", padding: "5px", textAlign: "center" }} />);
    const showDrawer = () => {
        setIsDrawerOpen(true);
    };
    const handleAddOnClick = () => {
        setIsPopoverOpen(!isPopoverOpen);
    }
    return (
        <Flex style={{ padding: "0 20px", marginBottom: "", borderBottom: '1px solid #e6f4ff', backgroundColor: "#FFFDD0" }} align={"center"} justify={"space-between"}>
            {/* {LogoNameContent} */}
            <Flex style={{ padding: "8px 0" }}>
                <SearchBox />
            </Flex>
            <Flex gap={8}>
                <Flex align="center" gap={8}>
                    <p>Demo Company</p>
                    <div onClick={handleAddOnClick}>
                        <MyPopover child1={openPopIcon} child2={<AddAnything />} />
                    </div>

                </Flex>
                <Flex align="center" justify="center" gap={8} style={{ padding: "0 10px", borderRight: "1px solid #e6f4ff", borderLeft: "1px solid #e6f4ff", fontWeight: "bold" }}>
                    <Link to={'/inventory/settings'} style={{ color: "black", height: "20px" }}><FaRegUser size={20} /></Link>
                    <Link to={'/inventory/settings'} style={{ color: "black", height: "20px" }}><IoMdNotificationsOutline size={20} /></Link>
                    <Link to={'/sales/carts'} style={{ color: "black", height: "20px" }}><MdOutlineShoppingCart size={20} /></Link>
                    <Link to={'/inventory/settings'} style={{ color: "black", height: "20px" }}><IoSettingsOutline size={20} /></Link>
                </Flex>
                <Flex align="center" gap={8}>
                    <p>Mr. Test User</p>
                    <Avatar src={<UserAddOutlined style={{ color: "black" }} />} style={{ border: "1px solid pink" }} />
                </Flex>
                {/* <Button href="/login" type="primary" icon={<LoginOutlined />}>Login</Button> */}
                <MenuOutlined disabled onClick={showDrawer} style={{ padding: '7px', borderRadius: "5px", border: "1px solid gray", width: "", display: "none" }} />
            </Flex>
            <MyDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} children1={LogoNameContent} children2={<LeftSidebar />} />
        </Flex>
    )
}

export default Navbar