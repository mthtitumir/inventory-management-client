/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex, Form, Input, Button } from 'antd';
import AddHeader from "../ui/AddHeader"
import { useAppSelector } from '../../redux/hooks';
import { useCurrentUser } from '../../redux/features/auth/authSlice';

const AddTradingPartner = ({ type }: { type: "Buyer" | "Supplier" }) => {
  const user = useAppSelector(useCurrentUser);
  // console.log(user);
  
  const onFinish = (values: { [s: string]: unknown; } | ArrayLike<unknown>) => {
    // Handle form submission logic here
    const filteredValues = Object.fromEntries(
      Object.entries(values).filter(([, value]) => value !== undefined)
    );
    const partnerData = {...filteredValues, partnerOf: user?.company, type: type.toLowerCase()}
    console.log('Received values:', partnerData);
  };
  return (
    <div style={{ padding: "0" }}>
      <AddHeader type={type} />
      <Flex justify='center' align='center'>
        <Form
          layout='vertical'
          onFinish={onFinish}
          style={{width: "100%", padding: "20px"}}
        >
          <Flex gap={10} justify='space-between'>
            <Form.Item
              label="Name"
              name="name"
              style={{width: "100%"}}
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              style={{width: "100%"}}
              rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              style={{width: "100%"}}
              name="phoneNumber"
              rules={[{ required: true, message: 'Please enter your phone number!' }]}
            >
              <Input />
            </Form.Item>
          </Flex>
          <Flex gap={10}>
            <Form.Item
              label="Business Name"
              name="businessName"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Job Title"
              name="jobTitle"
            >
              <Input />
            </Form.Item>
          </Flex>
          <Flex gap={10}>
            <Form.Item
              label="Country"
              name="country"
              rules={[{ required: true, message: 'Please enter your country!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: 'Please enter your city!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Province"
              name="province"
              rules={[{ required: true, message: 'Please enter your province!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Zip Code"
              name="zip"
              rules={[{ required: true, message: 'Please enter your area zip code!' }]}
            >
              <Input />
            </Form.Item>
          </Flex>
          <Form.Item
            label="Detailed Address"
            name="address"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Website"
            name="website"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Note"
            name="note"
          >
            <Input.TextArea />
          </Form.Item>

          {/* Add other form items based on your data model */}

          <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </div>
  )
}

export default AddTradingPartner