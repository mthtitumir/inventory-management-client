/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Select, Table, TableColumnsType, Modal } from "antd";
import AddHeader from "../../components/ui/AddHeader";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
  useUpdateUserMutation,
} from "../../redux/features/user/userApi";
import { TUser } from "../../redux/features/auth/authSlice";
import { Icon } from "../../icons";
import { userRoleOptions } from "../../constants";
import toast from "react-hot-toast";
import { useState } from "react";
import MyModal from "../../components/ui/MyModal";
import AddUser from "../../components/form/AddUser";
const { confirm } = Modal;
const Employees = () => {
    const btn = (
      <>
        <Button
          onClick={() => handleAddNewUser()}
          type="primary"
          icon={<Icon.PlusOutlined />}
        >
          New
        </Button>
      </>
    );
  const { data, isLoading } = useGetAllUserQuery({});
  //   const { selectedUserId, setSelectedUserId } = useState(undefined);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const employeesData = data?.data;
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const columns: TableColumnsType<TUser> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Change Role",
      key: "action",
      render: (_text, record) => (
        <Select
          placeholder={record.role}
          onChange={(e) => onRoleChange(e, record._id)}
          options={userRoleOptions}
        />
      ),
    },
    {
      title: "Delete",
      key: "action",
      render: (_text, record) => (
        <Button
          onClick={() => onDelete(record._id)}
          danger
          size="middle"
          icon={<Icon.DeleteOutlined size={20} />}
        />
      ),
    },
  ];
  const onRoleChange = (value: string, id: string) => {
    updateUser({ id, updatedUserData: { role: value } })
      .unwrap()
      .then((payload: any) => {
        toast.success(payload.message);
      })
      .catch((error: any) => {
        console.log(error);
        toast.error(error.message || "Update failed!");
      });
  };
  const onDelete = async (id: string) => {
    confirm({
      title: "Are you sure delete this user?",
      icon: <Icon.DeleteOutlined size={20} style={{ color: "red" }} />,
      content: "You won't get it back!",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteUser({id})
          .unwrap()
          .then((payload) => {
            toast.success(payload?.message);
          })
          .catch((error) => {
            toast.error(error.message || "Something went wrong!");
          });
      },
      onCancel() {
      },
    });
  };
  const handleAddNewUser = () =>{
    setIsAddUserModalOpen(true);
  }
  return (
    <>
      <AddHeader key={"123"} text="Employees" children={btn} />
      <Table
        dataSource={employeesData}
        columns={columns}
        style={{ padding: "0 20px", marginTop: "20px" }}
        loading={isLoading && !data}
        pagination={false}
        rowKey="_id"
      />
      {/* <MyModal
        isModalOpen={isEditDiscountModalOpen}
        setIsModalOpen={setIsEditDiscountModalOpen}
        children={
          <AddUpdateDiscount
            id={selectedDiscountId}
            type="update"
            setIsModalOpen={setIsEditDiscountModalOpen}
          />
        }
      /> */}
      <MyModal isModalOpen={isAddUserModalOpen} setIsModalOpen={setIsAddUserModalOpen} children={<AddUser setIsModalOpen={setIsAddUserModalOpen} />} />
    </>
  );
};

export default Employees;
