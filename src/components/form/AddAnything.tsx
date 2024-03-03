import { Button, Flex } from "antd"
import { PlusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const AddAnything = () => {
  return (
    <Flex gap={10}>
      <Flex vertical gap={5} style={{ borderRight: "1px solid #e6f4ff", paddingRight: "10px" }}>
        <Button icon={<PlusOutlined />}>Add Flower</Button>
        <Link to={"/purchases/suppliers/add-new-supplier"}><Button icon={<PlusOutlined />}>Add Supplier</Button></Link>
      </Flex>
      <Flex vertical gap={5}>
        <Button icon={<PlusOutlined />}>Add Sales</Button>
        <Link to={"/sales/buyers/add-new-buyer"}><Button icon={<PlusOutlined />}>Add Buyer</Button></Link>
      </Flex>
    </Flex>
  )
}

export default AddAnything