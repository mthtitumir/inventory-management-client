import { Avatar, Button, Col, Flex, Row } from "antd";
import { useState } from "react";
import MyDrawer from "./MyDrawer";
import LeftSidebar from "../layout/LeftSidebar";
import SearchBox from "./SearchBox";
import { mainBg, negMainBg } from "../layout/MainLayout";
import { Link } from "react-router-dom";
import AddAnything from "../form/AddAnything";
import MyPopover from "./MyPopover";
import { Icon } from "../../icons";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

export const LogoNameContent = (
  <Flex
    align="center"
    justify="start"
    gap={5}
    style={{ margin: "10px 0 10px 10px", borderBottom: "1px solid #e6f4ff" }}
  >
    <img
      style={{ width: "40px" }}
      src="https://i.ibb.co/XZGDHvv/floral-vista-logo.png"
    />
    <h4 style={{ color: "white" }}>Flora Vista</h4>
  </Flex>
);

const Navbar = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const menuItemCommonStyles = {
    outline: "white",
    color: "black",
    borderRadius: "5px",
    padding: "5px",
    TextAlign: "center",
  };
  // const openPopIcon = (<CloseOutlined style={{ outline: "white", backgroundImage: negMainBg, color: "white", borderRadius: "5px", padding: "5px", textAlign: "center" }} />);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const openPopIcon = (
    <Icon.PlusOutlined
      style={{
        outline: "white",
        backgroundImage: isPopoverOpen ? mainBg : negMainBg,
        color: "white",
        borderRadius: "5px",
        padding: "5px",
        textAlign: "center",
      }}
    />
  );

  // const showDrawer = () => {
  //     setIsDrawerOpen(true);
  // };
  const handleAddOnClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };
  return (
    <Row
      style={{
        padding: "0 10px",
        marginBottom: "",
        borderBottom: "1px solid #e6f4ff",
        backgroundColor: "#FFFDD0",
        position: "sticky",
        top: "0",
        zIndex: 1,
      }}
      align={"middle"}
      justify={"space-between"}
    >
      {/* {search box} */}
      <Col
        xs={{ span: 20 }}
        md={{ span: 8 }}
        lg={{ span: 8 }}
        style={{ padding: "8px 0" }}
      >
        <Flex align="center" gap={5}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #d9d9d9",
            }}
          />
          <SearchBox />
        </Flex>
      </Col>
      <Col xs={{ span: 0 }} md={{ span: 12 }} lg={{ span: 12 }}>
        <Row justify="end" align="middle">
          <Col>
            <Flex>
              <Flex align="center" gap={8} style={{ paddingRight: "20px" }}>
                <p>Demo Company</p>
                <div onClick={handleAddOnClick}>
                  <MyPopover child1={openPopIcon} child2={<AddAnything />} />
                </div>
              </Flex>
              <Flex
                gap={8}
                style={{
                  padding: "0 10px",
                  borderRight: "1px solid #e6f4ff",
                  borderLeft: "1px solid #e6f4ff",
                  fontWeight: "bold",
                }}
              >
                <Link to={"/inventory/settings"} style={menuItemCommonStyles}>
                  <Icon.RegUser />
                </Link>
                <Link to={"/inventory/settings"} style={menuItemCommonStyles}>
                  <Icon.NotificationsOutlined />
                </Link>
                <Link to={"/sales/carts"} style={menuItemCommonStyles}>
                  <Icon.ShoppingCartOutlined />
                </Link>
                <Link to={"/inventory/settings"} style={menuItemCommonStyles}>
                  <Icon.SettingsOutlined />
                </Link>
              </Flex>
              <Flex align="center" gap={8} style={{ paddingLeft: "10px" }}>
                <p>Mr. Test User</p>
              </Flex>
            </Flex>
          </Col>
          {/* <Button href="/login" type="primary" icon={<LoginOutlined />}>Login</Button> */}
          {/* <MenuOutlined disabled onClick={showDrawer} style={{ padding: '7px', borderRadius: "5px", border: "1px solid gray", width: "", display: "none" }} /> */}
        </Row>
      </Col>
      <Col>
        <Avatar
          src={<Icon.UserAddOutlined style={{ color: "black" }} />}
          style={{ border: "1px solid pink" }}
        />
      </Col>
      <MyDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        children1={LogoNameContent}
        children2={<LeftSidebar collapsed={collapsed} />}
      />
    </Row>
  );
};

export default Navbar;
