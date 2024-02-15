import { Col, Row } from "antd"

const DiscountBox = () => {
    return (
        <Row style={{margin: '20px 0'}}>
            {
                [1, 2, 3].map(num => <Col style={{border: "1px solid lightblue"}} lg={8}>
                    {num}
                </Col>
                )
            }
        </Row>
    )
}

export default DiscountBox