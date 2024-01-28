import { Col, Row } from "antd"
import Navbar from "../ui/Navbar"
import LeftSidebar from "./LeftSidebar"
import { Outlet } from "react-router-dom"
import FooterC from "../ui/Footer"

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <Col xs={0} sm={0} md={0} lg={4}>
          <LeftSidebar />
        </Col>
        <Col style={{border: '1px solid rgba(5, 5, 5, 0.06)', padding: '10px'}} xs={24} sm={24} md={24} lg={20}>
          <Outlet />
        </Col>
        </Row>
      <FooterC />
    </div>
  ) 
}

export default MainLayout