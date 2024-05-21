import { Button, Select, Table, TableColumnsType } from "antd";
import AddHeader from "../../components/ui/AddHeader";
import { useGetAllUserQuery } from "../../redux/features/user/userApi";
import { TUser } from "../../redux/features/auth/authSlice";
import { Icon } from "../../icons";
import { UserRole } from "../../constants";
const btn = (
  <>
    <Button
      // onClick={() => handleAddNewDiscount()}
      type="primary"
      icon={<Icon.PlusOutlined />}
    >
      New
    </Button>
    {/* <MyModal
        isModalOpen={isAddDiscountModalOpen}
        setIsModalOpen={setIsAddDiscountModalOpen}
        children={
          <AddUpdateDiscount
            id={undefined}
            type="add"
            setIsModalOpen={setIsAddDiscountModalOpen}
          />
        }
      /> */}
  </>
);
const Employees = () => {
  const { data, isLoading } = useGetAllUserQuery({});
  const employeesData = data?.data;
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
          onChange={onRoleChange}
          options={[
            {
              value: UserRole.manager,
              label: "Manager",
            },
            {
              value: UserRole.seller,
              label: "Seller",
            },
            {
              value: UserRole.admin,
              label: "Admin",
            },
          ]}
        />
      ),
    },
    {
      title: "Delete",
      key: "action",
      render: (_text, record) => (
        <Button
          // onClick={() => console.log(record._id)}
          danger
          size="middle"
          icon={<Icon.DeleteOutlined size={20} />}
        />
      ),
    },
  ];
  const onRoleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
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
    </>
  );
};

export default Employees;
