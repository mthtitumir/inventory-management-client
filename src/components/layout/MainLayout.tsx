import { ConfigProvider } from "antd"
import LeftSidebar from "./LeftSidebar"
import { Outlet } from "react-router-dom"
import FooterC from "../ui/Footer"

export const mainBg = "linear-gradient(-60deg, #f8002f 10%, #000c14 100%)";
export const negMainBg = "linear-gradient(60deg, #f8002f 10%, #000c14 100%)";

import { Layout } from 'antd';
import Navbar from "../ui/Navbar";
import { useState } from "react";

const { Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#800000",
          colorPrimaryHover: "#800000",
        },
        components: {
          Input: {
            activeShadow: "0 0 0 2px rgba(5, 145, 255, 0.1)"
          },
          Tabs: {
            itemSelectedColor: "#800000",
            itemHoverColor: "#800000",
            inkBarColor: "#800000",
          },
          Form: {
            itemMarginBottom: 16
          },
          Layout: {
            siderBg: mainBg,
            bodyBg: "#FFFFFF"
          }
        }
      }}
    >
      <Layout style={{ height: '100%' }}>
        <LeftSidebar collapsed={collapsed} />
        <Layout>
          <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content>
            <div>
              <Outlet />
            </div>
          </Content>
          <FooterC />
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default MainLayout

// background-color: #f8002f;
// background-image: linear-gradient(326deg, #f8002f 0%, #000c14 74%);

