/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, Input, Button, Row, Col, Flex } from 'antd';
import AddHeader from "../ui/AddHeader"
import { useAppSelector } from '../../redux/hooks';
import { useCurrentUser } from '../../redux/features/auth/authSlice';
import { useAddTradingPartnerMutation } from '../../redux/features/buyer/tradingPartnerApi';
import toast from 'react-hot-toast';

const AddTradingPartner = ({ type }: { type: "Buyer" | "Supplier" }) => {
  const user = useAppSelector(useCurrentUser);
  const [addTradingPartner] = useAddTradingPartnerMutation();
  // console.log(user);

  const onFinish = (values: { [s: string]: unknown; } | ArrayLike<unknown>) => {
    const filteredValues = Object.fromEntries(
      Object.entries(values).filter(([, value]) => value !== undefined)
    );
    const partnerData = { ...filteredValues, partnerOf: user?.company, type: type.toLowerCase() }
    // console.log('Received values:', partnerData);
    addTradingPartner(partnerData).unwrap().then((payload: any) => {
      console.log(payload);

      toast.success(payload.message);
    }).catch((error: any) => {
      toast.error(error.message || "Something went wrong!");
    })
  };
  return (
    <div>
      <AddHeader text={type === "Buyer" ? "New Buyer" : "New Supplier"} />
      <Row justify='center' align='middle'>
        <Col span={24} style={{ width: "100%", padding: "20px" }}>
          <Form
            layout='vertical'
            onFinish={onFinish}
          >
            <Row gutter={10} justify='space-between'>
              <Col sm={{ span: 24 }} md={{ span: 8 }}>
                <Form.Item
                  label="Name"
                  name="name"
                  style={{ width: "100%" }}
                  rules={[{ required: true, message: 'Please enter your name!' }]}
                >
                  <Input placeholder="Enter your name" />
                </Form.Item>
              </Col>
              <Col sm={{ span: 24 }} md={{ span: 8 }}>
                <Form.Item
                  label="Email"
                  name="email"
                  style={{ width: "100%" }}
                  rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
                >
                  <Input placeholder="Enter your email" />
                </Form.Item>
              </Col>
              <Col sm={{ span: 24 }} md={{ span: 8 }}>
                <Form.Item
                  label="Phone Number"
                  style={{ width: "100%" }}
                  name="phoneNumber"
                  rules={[{ required: true, message: 'Please enter your phone number!' }]}
                >
                  <Input placeholder="Enter your phone number" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={10} justify='space-between'>
              <Col sm={{ span: 24 }} md={{ span: 8 }}>
                <Form.Item
                  label="Business Name"
                  name="businessName"
                >
                  <Input placeholder="Enter your business name" />
                </Form.Item>
              </Col>
              <Col sm={{ span: 24 }} md={{ span: 8 }}>
                <Form.Item
                  label="Job Title"
                  name="jobTitle"
                >
                  <Input placeholder="Enter your job title" />
                </Form.Item>
              </Col>
              <Col sm={{ span: 24 }} md={{ span: 8 }}>
                <Form.Item
                  label="Website"
                  name="website"
                >
                  <Input placeholder="Enter your website URL" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={10} justify='space-between'>
              <Col sm={{ span: 24 }} md={{ span: 6 }}>
                <Form.Item
                  label="Country"
                  name="country"
                  rules={[{ required: true, message: 'Please enter your country!' }]}
                >
                  <Input placeholder="Enter your country" />
                </Form.Item>
              </Col>
              <Col sm={{ span: 24 }} md={{ span: 6 }}>
                <Form.Item
                  label="City"
                  name="city"
                  rules={[{ required: true, message: 'Please enter your city!' }]}
                >
                  <Input placeholder="Enter your city" />
                </Form.Item>
              </Col>
              <Col sm={{ span: 24 }} md={{ span: 6 }}>
                <Form.Item
                  label="Province"
                  name="province"
                  rules={[{ required: true, message: 'Please enter your province!' }]}
                >
                  <Input placeholder="Enter your province" />
                </Form.Item>
              </Col>
              <Col sm={{ span: 24 }} md={{ span: 6 }}>
                <Form.Item
                  label="Zip Code"
                  name="zip"
                  rules={[{ required: true, message: 'Please enter your area zip code!' }]}
                >
                  <Input placeholder="Enter your zip code" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={10} justify='space-between'>
              <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <Form.Item
                  label="Detailed Address"
                  name="address"
                >
                  <Input.TextArea placeholder="Enter your detailed address" />
                </Form.Item>
              </Col>
              <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <Form.Item
                  label="Note"
                  name="note"
                >
                  <Input.TextArea placeholder="Enter any additional notes" />
                </Form.Item>
              </Col>
            </Row>
            {/* Add other form items based on your data model */}
            <Row gutter={10} justify='end'>
              <Col sm={{ span: 24 }} md={{ span: 12 }}>
                <Flex justify='flex-end' gap={10}>
                  <Form.Item >
                    <Button >
                      Cancel
                    </Button>
                  </Form.Item>
                  <Form.Item >
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Flex>
              </Col>
            </Row>
          </Form>

        </Col>
      </Row>
    </div >
  )
}

export default AddTradingPartner