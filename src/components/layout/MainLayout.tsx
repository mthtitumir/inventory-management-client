import { Col, Row } from "antd"
import Navbar from "../ui/Navbar"
import LeftSidebar from "./LeftSidebar"
import { Outlet } from "react-router-dom"
import FooterC from "../ui/Footer"

const MainLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Row style={{ minHeight: "100vh" }}>
        <Col xs={0} sm={0} md={0} lg={3} style={{ padding: "", backgroundColor: "#f8002f", backgroundImage: "linear-gradient(-60deg, #f8002f 10%, #000c14 100%)" }}>
          <LeftSidebar />
        </Col>
        <Col style={{ border: '1px solid rgba(5, 5, 5, 0.06)', padding: '10px' }} xs={24} sm={24} md={24} lg={21}>
          <Outlet />
        </Col>
      </Row>
      <FooterC />
    </div>
  )
}

export default MainLayout

// background-color: #f8002f;
// background-image: linear-gradient(326deg, #f8002f 0%, #000c14 74%);