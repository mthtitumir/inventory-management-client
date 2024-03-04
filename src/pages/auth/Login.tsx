import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row } from 'antd';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/features/auth/authApi';
import { TUser, setUser } from '../../redux/features/auth/authSlice';
import { verifyToken } from '../../utils/verifyToken';

const Login = () => {
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
            toast.success("Logged in successfully!", { id: toastId, duration: 2000 })
            navigate(`/`);
        } catch (error) {
            toast.error("Something went wrong!", { id: toastId, duration: 2000 })
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
                <h3 style={{textAlign: "center", marginBottom: "15px"}}>Login Flora Vista</h3>
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
                <Form.Item style={{textAlign: "center"}}>
                    <Button type="primary" htmlType="submit" style={{ margin: "0 auto" }} className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </Row>
    );
};

export default Login;