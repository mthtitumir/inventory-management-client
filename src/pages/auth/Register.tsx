import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row } from 'antd';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/features/auth/authApi';
import { TUser, setUser } from '../../redux/features/auth/authSlice';
import { verifyToken } from '../../utils/verifyToken';
import Lottie from 'react-lottie';
import flowerData from '../../lotties/Animation - 1707805810249.json'

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const onFinish = async (values: FormData) => {
    console.log('Received values of form: ', values);
    const toastId = toast.loading('Logging in ...!');

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
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: flowerData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
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
      >
        <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Register</h3>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your Email!' }]}
        >
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
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
        <Form.Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit" style={{ margin: "0 auto" }} >
            Register
          </Button>
        </Form.Item>
      </Form>
      <Lottie
          options={defaultOptions}
          // height={400}
          width={400}
        />
    </Row>
  );
};

export default Register;