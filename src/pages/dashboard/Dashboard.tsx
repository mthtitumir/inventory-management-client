import { Avatar, Flex, Tabs } from "antd"
import { UserOutlined } from '@ant-design/icons';
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
      </Flex>
      {/* <MyModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}><AddUpdateFlower type="add" /></MyModal>
      <MyModal isModalOpen={isDiscountModalOpen} setIsModalOpen={setIsDiscountModalOpen}><AddUpdateDiscount type="add" /></MyModal> */}
    </>
  )
}

export default Dashboard