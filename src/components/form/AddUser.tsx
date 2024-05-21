/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Flex, Form, Input, Select } from "antd";
import { Icon } from "../../icons";
import { userRoleOptions } from "../../constants";
import { useCreateUserMutation } from "../../redux/features/user/userApi";
import toast from "react-hot-toast";
import { Dispatch, SetStateAction } from "react";

const AddUser = ({setIsModalOpen}: {setIsModalOpen: Dispatch<SetStateAction<boolean>>}) => {
  const [createUser] = useCreateUserMutation();
  const onFinish = async (values: any) => {
    console.log(values);
    createUser(values)
      .unwrap()
      .then((payload: any) => {
        toast.success(payload.message);
      })
      .catch((error: any) => {
        console.log(error);
        toast.error(error.message || "User create failed!");
      });
      setIsModalOpen(false);
  };
  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
        Add New Staff
      </h2>
      <Form
        name="normal_login"
        className="login-form"
        // style={{ width: "50%", margin: "0 auto" }}
        onFinish={onFinish}
        layout="vertical"
        size="large"
      >
        <Flex gap={7}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input prefix={<Icon.MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your Name!" }]}
          >
            <Input
              prefix={<Icon.RenameOutlined className="site-form-item-icon" />}
              type="text"
              placeholder="Name"
            />
          </Form.Item>
        </Flex>
        <Flex gap={7}>
          <Form.Item name="role" rules={[{ required: true }]}>
            <Select
              placeholder="Select a role"
              allowClear
              style={{ width: "100%" }}
              options={userRoleOptions}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<Icon.LockOutlined />}
              placeholder="Password"
            />
          </Form.Item>
        </Flex>
        <Form.Item style={{ textAlign: "center" }}>
          <Button size="large" type="primary" htmlType="submit">
            Add User
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddUser;
