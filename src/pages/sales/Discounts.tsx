import { Button, Flex, Table, TableColumnsType } from "antd";
import AddHeader from "../../components/ui/AddHeader";
import { useGetAllDiscountsQuery } from "../../redux/features/discount/discountApi";
import { useState } from "react";
import { TDiscount } from "../../types";
import { Icon } from "../../icons";
import MyModal from "../../components/ui/MyModal";
import AddUpdateDiscount from "../../components/form/AddUpdateDiscount";

const Discounts = () => {
  // const [selectedDiscountId, setSelectedDiscountId] = useState<string | null>(
  //   null
  // );
  const [isAddDiscountModalOpen, setIsAddDiscountModalOpen] = useState(false);
  const { data, isLoading } = useGetAllDiscountsQuery({});
  const discountsData = data?.data;
  const columns: TableColumnsType<TDiscount> = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Min. Value",
      dataIndex: "minOrderValue",
      key: "minOrderValue",
    },
    {
      title: "Min. Quantity",
      dataIndex: "minOrderQuantity",
      key: "minOrderQuantity",
    },
    {
      title: "Limit/Customer",
      dataIndex: "limitPerCustomer",
      key: "limitPerCustomer",
    },
    {
      title: "Amount",
      dataIndex: "amountOff",
      key: "amountOff",
    },
    {
      title: "Percent",
      dataIndex: "percentOff",
      key: "percentOff",
    },
    {
      title: "Action",
      key: "action",
      render: (_text, record) => (
        <Flex gap={5}>
          <Button
            onClick={() => console.log(record._id)}
            danger
            size="middle"
            icon={<Icon.DeleteOutlined size={20} />}
          />
          <Button
            onClick={() => console.log(record._id)}
            size="middle"
            icon={<Icon.Edit style={{ color: "#1F75FE" }} size={20} />}
          />
        </Flex>
      ),
    },
  ];
  const btn = (
    <>
      <Button
        onClick={() => handleAddNewDiscount()}
        type="primary"
        icon={<Icon.PlusOutlined />}
      >
        New
      </Button>
      <MyModal
        isModalOpen={isAddDiscountModalOpen}
        setIsModalOpen={setIsAddDiscountModalOpen}
        children={
          <AddUpdateDiscount
            id={undefined}
            type="add"
            setIsModalOpen={setIsAddDiscountModalOpen}
          />
        }
      />
    </>
  );
  const handleAddNewDiscount = () => {
    setIsAddDiscountModalOpen(true);
  };

  return (
    <>
      <AddHeader key={"123"} text="Discounts" children={btn} />
      <Table
        dataSource={discountsData}
        columns={columns}
        style={{ padding: "0 20px", marginTop: "20px" }}
        loading={isLoading && !data}
        pagination={false}
        rowKey="_id"
      />
      ;
    </>
  );
};

export default Discounts;
