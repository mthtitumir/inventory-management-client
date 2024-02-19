/* eslint-disable @typescript-eslint/no-explicit-any */
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Divider, Flex, Form, Input, Row, Upload } from 'antd';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/features/auth/authApi';
import { TUser, setUser } from '../../redux/features/auth/authSlice';
import { verifyToken } from '../../utils/verifyToken';
// import { useState } from 'react';
// import regBg from './assets/images/register-bg.svg'
import regBg from '../../assets/images/register-bg.svg'
// import logo from '../../assets/images/fvista-logo.svg'
import { HighlightOutlined } from '@ant-design/icons';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { RiChatQuoteLine } from "react-icons/ri";

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const onFinish = async (values: FormData) => {
    console.log('Received values of form: ', values);
    const toastId = toast.loading('Logging in ...!');
    const data = { ...values, imageUrl };
    console.log(data);
    try {
      const res = await login(values).unwrap();
      // console.log(res);
      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user, token: res.data.accessToken }))
      toast.success("Registered successfully!", { id: toastId, duration: 2000 });
      navigate(`/dashboard`);
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col xs={0} md={0} lg={10} style={{ padding: "20px", height: "100%", background: `url(${regBg})`, backgroundSize: "cover" }}>
        <div style={{}}>
          {/* <img src={logo} style={{width: "30%"}} /> */}
          <h2 style={{ color: 'white' }}>Flower Vista</h2>
        </div>
        <Flex justify='center' align='center'>
          <div style={{ width: "100%", margin: "50px" }}>
            <Divider style={{ color: "white", borderBottom: "1px solid pink", paddingBottom: "10px" }}><RiChatQuoteLine style={{ fontSize: "40px" }} /></Divider>
            {/* <Flex justify='center' align='center' gap={5} style={{ width: "100%" }}>
              <hr style={{ border: '1px solid pink' }} />
              <HighlightOutlined style={{  }} />
              <hr style={{ border: '1px solid pink' }} />
            </Flex> */}
            <p style={{ fontWeight: "bold", lineHeight: "2", color: "white", padding: "0 20px", fontSize: "16px" }}>Our stock management system has become much better after using Flower Vista Inventory. We also switched to their Books for our accounting management for its seamless integration with Flower Vista Inventory.</p>
            <Divider style={{ border: '1px solid pink' }}></Divider>
            <Flex justify='center' align='center' gap={20}>
              <Avatar size={40} src={"https://www.hindustantimes.com/ht-img/img/2023/06/25/1600x900/Tristan_State_1687696831241_1687696831443.jpeg"} />
              <div style={{ color: 'white' }}>
                <h2>Tristan Tate</h2>
                <h5>Co-founder, Hustlers University</h5>
              </div>
            </Flex>
            <Divider style={{ border: '1px solid pink' }}></Divider>
          </div>
        </Flex>
      </Col>

      {/* registration part */}
      <Col xs={24} md={24} lg={14}>
        <div style={{ width: "50%", margin: "10px auto" }}>
          <img width={150} src="https://www.zoho.com/inventory/images/inventory-logo-new.svg" alt="" />
          <h3>Start your full-featured Free Trial for 14 days</h3>
        </div>

        {/* registration form  */}
        <Form
          name="normal_login"
          className="login-form"
          style={{ width: "50%", margin: "0 auto" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          size='large'
        >
          {/* <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Register</h3> */}
          <Form.Item
            name="company"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input prefix={<HiOutlineBuildingOffice2 />} placeholder="Company" />
          </Form.Item>
          <Divider >Manager Information</Divider>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="text"
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="confirm-password"
            rules={[{ required: true, message: 'Re-write your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button size='large' type="primary" htmlType="submit" style={{ margin: "0 auto", width: "100%" }} >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;