import { Col, ConfigProvider, Row } from "antd"
import Navbar from "../ui/Navbar"
import LeftSidebar from "./LeftSidebar"
import { Outlet } from "react-router-dom"
import FooterC from "../ui/Footer"

export const mainBg = "linear-gradient(-60deg, #f8002f 10%, #000c14 100%)";
export const negMainBg = "linear-gradient(60deg, #f8002f 10%, #000c14 100%)";
const MainLayout = () => {
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
        }
      }}
    >
      <div>
        {/* <Navbar /> */}
        <Row style={{ minHeight: "100vh" }}>
          <Col xs={0} sm={0} md={0} lg={3} style={{ padding: "", backgroundColor: "#f8002f", backgroundImage: "linear-gradient(-60deg, #f8002f 10%, #000c14 100%)" }}>
            <LeftSidebar />
          </Col>
          <Col style={{ border: '', padding: '' }} xs={24} sm={24} md={24} lg={21}>
            <Navbar />
            <Outlet />
          </Col>
        </Row>
        <FooterC />
      </div>
    </ConfigProvider>
  )
}

export default MainLayout

// background-color: #f8002f;
// background-image: linear-gradient(326deg, #f8002f 0%, #000c14 74%);