import { Button, Col, Row } from "antd"
import { PlusCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import MyModal from "../ui/MyModal";
import AddUpdateFlower from "../form/AddUpdateFlower";
import AddUpdateDiscount from "../form/AddUpdateDiscount";

const DashboardHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
    return (
        <>
            <Row gutter={16}>
                <Col>
                    <Button onClick={() => setIsModalOpen(true)} type="primary" icon={<PlusCircleOutlined />} size="large">
                        Add Flower
                    </Button>
                </Col>
                <Col>
                    <Button onClick={() => setIsDiscountModalOpen(true)} type="primary" icon={<PlusCircleOutlined />} size="large">
                        Add Discount
                    </Button>
                </Col>
                {/* <Col>
                    <Button type="primary" icon={<PlusCircleOutlined />} size="large">
                        Sell Flower
                    </Button>
                </Col> */}
            </Row>
            <MyModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}><AddUpdateFlower setIsModalOpen={setIsModalOpen} id={undefined} type="add" /></MyModal>
            <MyModal isModalOpen={isDiscountModalOpen} setIsModalOpen={setIsDiscountModalOpen}><AddUpdateDiscount setIsModalOpen={setIsDiscountModalOpen} id={undefined} type="add" /></MyModal>
        </>
    )
}

export default DashboardHeader