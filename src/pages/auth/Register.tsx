/* eslint-disable @typescript-eslint/no-explicit-any */
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row, Upload } from 'antd';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/features/auth/authApi';
import { TUser, setUser } from '../../redux/features/auth/authSlice';
import { verifyToken } from '../../utils/verifyToken';
import { useState } from 'react';

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [imageUrl, setImageUrl] = useState('');

  const uploadImage = async (event: any) => {
    // console.log(event.target.files[0]);
    if (!event.target.files[0]) return;
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    const toastId = toast.loading("Image uploading...");
    
    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=8232356251c40167197e4cb1208b3e70`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) throw new Error("Failed to upload image");

      const data = await res.json();
      // console.log(data);
      setImageUrl(data?.data?.display_url)
      toast.dismiss(toastId);
      toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.error("Image not uploaded!");
      toast.dismiss(toastId);
    }
  };
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
      <Form
        name="normal_login"
        className="login-form"
        style={{ maxWidth: "300px", }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Register</h3>
        <Form.Item
          name="email"
          label="Write Your Email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="name"
          label="Write Your Name"
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
          label="Set A Password"
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
          label="Confirm Password"
          rules={[{ required: true, message: 'Re-write your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Item>
        <Form.Item label="Upload picture" rules={[{ message: 'Please upload your flower photo!' }]} >
          <Upload>
            <Input type='file' onChange={uploadImage} placeholder='Picture' />
          </Upload>
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit" style={{ margin: "0 auto" }} >
            Register
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default Register;