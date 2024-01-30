import { Button, Flex } from "antd";
import { MenuOutlined, LoginOutlined } from '@ant-design/icons';
import { useState } from "react";
import MyDrawer from "./MyDrawer";
import LeftSidebar from "../layout/LeftSidebar";
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
        <Flex style={{ padding: "0 20px", border: '1px solid gray' }} align={"center"} justify={"space-between"}>
            {LogoNameContent}
            <Flex gap={8}>
                <Button href="/login" type="primary" icon={<LoginOutlined />}>Login</Button>
                <MenuOutlined onClick={showDrawer} style={{ padding: '7px', borderRadius: "5px", border: "1px solid gray", width: "" }} />
            </Flex>
            <MyDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} children1={LogoNameContent} children2={<LeftSidebar />} />
        </Flex>
    )
}

export default Navbar