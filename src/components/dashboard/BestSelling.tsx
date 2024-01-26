import { Col, Row } from "antd"

const BestSelling = () => {
  return (
    <div>
        <h3>Best Selling Flowers</h3>
        <Row>
            <Col>
                <div style={{display: "flex", gap: "5px", alignItems: "center", justifyContent: "center"}}>
                    <img style={{ width: "40px"}} src="https://i.ibb.co/XZGDHvv/floral-vista-logo.png" alt="" />
                    <p>Floral Vista Logo</p>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default BestSelling