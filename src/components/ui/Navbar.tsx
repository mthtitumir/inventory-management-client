import { Avatar, Flex } from "antd";
import { MenuOutlined, PlusOutlined, UserAddOutlined, SettingOutlined } from '@ant-design/icons';
import { IoMdNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import MyDrawer from "./MyDrawer";
import LeftSidebar from "../layout/LeftSidebar";
import SearchBox from "./SearchBox";
import { mainBg } from "../layout/MainLayout";
import { Link } from "react-router-dom";
// import SearchBox from "./SearchBox";
export const LogoNameContent = (
    <Flex align="center" justify="center" gap={5}>
        <img style={{ width: "40px" }} src="https://i.ibb.co/XZGDHvv/floral-vista-logo.png" />
        <h5>Flora Vista</h5>
    </Flex>
)

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const showDrawer = () => {
        setIsDrawerOpen(true);
    };
    return (
        <Flex style={{ padding: "0 20px", marginBottom: "", borderBottom: '1px solid #e6f4ff', backgroundColor: "#FFFDD0" }} align={"center"} justify={"space-between"}>
            {/* {LogoNameContent} */}
            <Flex style={{ padding: "8px 0" }}>
                <SearchBox />
            </Flex>
            <Flex gap={8}>
                <Flex align="center" gap={8}>
                    <p>Demo Company</p>
                    <PlusOutlined style={{ outline: "white", backgroundImage: mainBg, color: "white", borderRadius: "5px", padding: "5px", textAlign: "center" }} />
                </Flex>
                <Flex align="center" gap={8} style={{ padding: "0 10px", borderRight: "1px solid #e6f4ff", borderLeft: "1px solid #e6f4ff" }}>
                    <UserAddOutlined />
                    <IoMdNotificationsOutline />
                    <Link to={'/inventory/settings'} style={{ color: "black" }}><SettingOutlined /></Link>
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