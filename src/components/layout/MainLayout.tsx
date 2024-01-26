import { Col, Row } from "antd"
import Navbar from "../ui/Navbar"
import LeftSidebar from "./LeftSidebar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <Col xs={0} sm={0} md={0} lg={4}>
          <LeftSidebar />
        </Col>
        <Col xs={24} sm={12} md={8} lg={14}>
          <Outlet />
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          Col4
        </Col>
      </Row>
    </div>
  )
}

export default MainLayout