import { Avatar, Flex, Tabs } from "antd"
import { UserOutlined } from '@ant-design/icons';
import { useState } from "react";
import MyModal from "../../components/ui/MyModal";
import AddUpdateFlower from "../../components/form/AddUpdateFlower";
import AddUpdateDiscount from "../../components/form/AddUpdateDiscount";
import DashboardOverview from "../../components/dashboard/DashboardOverview";
const items = [
  {
    key: '1',
    label: 'Dashboard',
    children: <DashboardOverview />,
  },
  {
    key: '2',
    label: 'Getting Started',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Recent Updates',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Announcements',
    children: 'Content of Tab Pane 4',
  },
];
const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
  return (
    <>
      <Flex align="center" gap={20} style={{ marginBottom: "", padding: "25px 20px" }}>
        <Avatar shape="square" size={48} icon={<UserOutlined />} />
        <Flex vertical gap={3}>
          <p style={{ fontSize: '20px', fontWeight: "bold" }}>Hello, Demo User</p>
          <p>Demo Company</p>
        </Flex>
      </Flex>
      <Flex gap={12} style={{ padding: "0 20px", fontSize: "20px" }}>
        <Tabs style={{ width: "100%" }} defaultActiveKey="1" items={items} />
        {/* <Col>
                    <Button onClick={() => setIsModalOpen(true)} type="primary" icon={<PlusCircleOutlined />} size="large">
                        Add Flower
                    </Button>
                </Col>
                <Col>
                    <Button onClick={() => setIsDiscountModalOpen(true)} type="primary" icon={<PlusCircleOutlined />} size="large">
                        Add Discount
                    </Button>
                </Col> */}
        {/* <Col>
                    <Button type="primary" icon={<PlusCircleOutlined />} size="large">
                        Sell Flower
                    </Button>
                </Col> */}
      </Flex>
      <MyModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}><AddUpdateFlower setIsModalOpen={setIsModalOpen} id={undefined} type="add" /></MyModal>
      <MyModal isModalOpen={isDiscountModalOpen} setIsModalOpen={setIsDiscountModalOpen}><AddUpdateDiscount setIsModalOpen={setIsDiscountModalOpen} id={undefined} type="add" /></MyModal>
    </>
  )
}

export default Dashboard