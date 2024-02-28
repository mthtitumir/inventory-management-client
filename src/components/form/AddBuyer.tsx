/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Space } from "antd"

const AddBuyer = () => {
    const onFinish = (values: any) => {
        console.log(values);
    }
    return (
        <Form onFinish={onFinish}>
            <Space style={{ width: "100%" }}>
                <Form.Item
                    style={{ marginBottom: "10px" }}
                    // label="Buyer Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input buyer name!' }]}
                >
                    <Input placeholder={"Buyer Name"} />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: "10px" }}
                    // label="Buyer Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input buyer email!' }]}
                >
                    <Input placeholder={"Buyer Email"} />
                </Form.Item>
                <Form.Item
                    style={{ marginBottom: "10px" }}
                    // label="Buyer Phone Number"
                    name="phoneNo"
                    rules={[{ required: true, message: 'Please input buyer phone number!' }]}
                >
                    <Input placeholder={"Buyer Phone"} />
                </Form.Item>
            </Space>
        </Form>
    )
}

export default AddBuyer