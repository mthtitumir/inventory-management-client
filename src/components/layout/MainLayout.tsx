import { Col, Row } from "antd"
import Navbar from "../ui/Navbar"
import LeftSidebar from "./LeftSidebar"

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Row>
        <Col style={{border: '1px solid red'}} xs={24} sm={12} md={8} lg={6}>
          <LeftSidebar />
        </Col>
        <Col style={{border: '1px solid red'}} xs={24} sm={12} md={8} lg={6}>
          Col2
        </Col>
        <Col style={{border: '1px solid red'}} xs={24} sm={12} md={8} lg={6}>
          Col3
        </Col>
        <Col style={{border: '1px solid red'}} xs={24} sm={12} md={8} lg={6}>
          Col4
        </Col>
      </Row>
    </div>
  )
}

export default MainLayout