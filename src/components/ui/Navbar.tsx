import { Col, Row } from "antd";
import { MenuOutlined } from '@ant-design/icons';
import SearchBox from "./SearchBox";

const Navbar = () => {
    return (
        <Row style={{ padding: "0 20px", border: '1px solid gray' }} align={"middle"} justify={"space-between"}>
            <Col xs={8} sm={8} md={8} lg={12}>
                <img style={{width: "40px"}} src="https://i.ibb.co/XZGDHvv/floral-vista-logo.png" />
            </Col>
            <Col style={{textAlign: "right"}} xs={8} sm={8} md={8} lg={12}>
                <SearchBox />
            </Col>
            <Col xs={8} sm={8} md={8} lg={0}>
                <MenuOutlined style={{padding: '7px', borderRadius: "5px", border: "1px solid gray", width: ""}} />
            </Col>
        </Row>
    )
}

export default Navbar