/* eslint-disable @typescript-eslint/no-explicit-any */
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Divider, Flex, Form, Input, Row, Space } from 'antd';
import toast from 'react-hot-toast';
import { useAppDispatch } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { TUser, setUser } from '../../redux/features/auth/authSlice';
import { verifyToken } from '../../utils/verifyToken';
import regBg from '../../assets/images/register-bg.svg'
// import logo from '../../assets/images/fvista-logo.svg'
import { HiOutlineBuildingOffice2, HiOutlineFlag } from "react-icons/hi2";
import { RiChatQuoteLine } from "react-icons/ri";
import { MdDriveFileRenameOutline, MdOutlinePhoneInTalk, MdOutlineLocationOn, MdMyLocation } from "react-icons/md";
import { LiaMedalSolid, LiaCitySolid } from "react-icons/lia";
import { useAddCompanyMutation } from '../../redux/features/company/companyApi';
import { useLoginMutation } from '../../redux/features/auth/authApi';
import { LogoNameContent } from '../../components/ui/Navbar';

const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [addCompany] = useAddCompanyMutation();
  const [login] = useLoginMutation();
  const onFinish = async (values: any) => {
    console.log('Received values of form: ', values);
    const { companyName, companyEmail, companyPhoneNo, companyLicense, country, provinceOrState, ZIP, detailedAddress, name, email, password } = values;
    const companyData = { name:companyName, email: companyEmail, phoneNo:companyPhoneNo, companyLicenseNumber:companyLicense, address: {country, provinceOrState, ZIP, detailedAddress} };
    const adminData = { name, email, password };
    const toastId = toast.loading('Registering Inventory...');
    const data = { companyData, adminData };
    // console.log(data);
    try {
      const res = await addCompany(data).unwrap();
      // dispatch(setCompany(res?.data));
      // console.log(res);
      if(res.data && res.data._id){
        const resLogin = await login({email, password}).unwrap();
        const user = verifyToken(resLogin.data.accessToken) as TUser;
        dispatch(setUser({ user, token: res.data.accessToken }))
        navigate(`/dashboard`);
        toast.success("Registered successfully!", { id: toastId, duration: 2000 });
      }
    } catch (error) {
      toast.error("Registration failed!", { id: toastId, duration: 2000 });
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
      <Col xs={24} md={24} lg={14} style={{ height: "100%", overflowY: "auto"}}>
        <div style={{padding: "15px 10px", position: "sticky", borderBottom: "1px solid gray"}}>
          <p style={{fontSize: "18px", textAlign: "right"}}>Already have an account? <a href="/login">Sign In</a></p>
        </div>
        <div style={{ width: "50%", margin: "10px auto" }}>
          {LogoNameContent}
          <h3>Start your full-featured Free Trial for 14 days</h3>
        </div>

        {/* registration form  */}
        <Form
          name="normal_login"
          className="login-form"
          style={{ width: "50%", margin: "0 auto"}}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          size='large'
        >
          {/* <h3 style={{ textAlign: "center", marginBottom: "15px" }}>Register</h3> */}
          <Form.Item
            name="companyName"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input prefix={<HiOutlineBuildingOffice2 />} placeholder="Company Name" />
          </Form.Item>
          <Form.Item
            name="companyEmail"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Company Email" />
          </Form.Item>
          <Form.Item
            name="companyPhoneNo"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input prefix={<MdOutlinePhoneInTalk  />} placeholder="Company Phone" />
          </Form.Item>
          <Form.Item
            name="companyLicense"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input prefix={<LiaMedalSolid />} placeholder="Company License Number" />
          </Form.Item>
          <Space>
            <Form.Item
              name="country"
              rules={[{ required: true, message: 'Please i. country!' }]}
            >
              <Input prefix={<HiOutlineFlag />} placeholder="Country" />
            </Form.Item>
            <Form.Item
              name="provinceOrState"
              rules={[{ required: true, message: 'Please input City!' }]}
            >
              <Input prefix={<LiaCitySolid   />} placeholder="City" />
            </Form.Item>
            <Form.Item
              name="ZIP"
              rules={[{ required: true, message: 'Please input ZIP!' }]}
            >
              <Input prefix={<MdOutlineLocationOn />} placeholder="ZIP" />
            </Form.Item>
          </Space>
          <Form.Item
            name="detailedAddress"
            rules={[{ required: true, message: 'Please input detailed address!' }]}
          >
            <Input prefix={<MdMyLocation />} placeholder="Detailed Address" />
          </Form.Item>

          {/* admin infos  */}
          <Divider >Admin Information</Divider>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input
              prefix={<MdDriveFileRenameOutline className="site-form-item-icon" />}
              type="text"
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password prefix={<LockOutlined />} placeholder='Password' />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The new password that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder='Confirm Password' />
          </Form.Item>
          <Form.Item style={{ textAlign: "center" }}>
            <Button size='large' type="primary" htmlType="submit" style={{ margin: "0 auto", width: "100%", backgroundImage: "linear-gradient(319deg, #ff1493 0%, #0000ff 37%, #ff8c00 100%)" }} >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Register;
