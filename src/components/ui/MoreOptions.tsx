import { DeleteOutlined, EditOutlined, DeleteFilled, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
const { confirm } = Modal;
import { useDeleteFlowerMutation } from '../../redux/features/flower/flowerApi';
import toast from 'react-hot-toast';
import { useState } from 'react';
import AddUpdateFlower from '../form/AddUpdateFlower';
import MyModal from './MyModal';
import MakeSellForm from '../form/MakeSellForm';

const MoreOptions = ({ id }: { id: string }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSellModalOpen, setIsSellModalOpen] = useState(false);
    const [deleteFlower] = useDeleteFlowerMutation();

    const handleOnClick = (actionType: "edit" | "delete" | "sell") => {
        if (actionType === "edit") {
            setIsModalOpen(true);
        }
        if (actionType === "delete") {
            showDeleteConfirm();
        }
        if (actionType === "sell") {
            setIsSellModalOpen(true);
        }
    }

    const showDeleteConfirm = async() => {
        confirm({
            title: 'Are you sure delete this flower?',
            icon: <DeleteFilled style={{ color: "red" }} />,
            content: "You won't get it back!",
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteFlower(id).unwrap().then((payload) => {
                    // console.log();
                    toast.success(payload?.message);
                })
                .catch((error) => {
                    toast.error(error.message || "Something went wrong!")
                });
            },
            onCancel() {
                toast.error("Delete canceled!")
            },
        });
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Button onClick={() => handleOnClick("sell")} style={{ borderColor: "green", color: "green" }} icon={<ShoppingCartOutlined />}> Sell</Button>
            <Button onClick={() => handleOnClick("edit")} icon={<EditOutlined />}> Edit</Button>
            <Button onClick={() => handleOnClick("delete")} style={{ borderColor: "red", color: "red" }} icon={<DeleteOutlined style={{ color: "red" }} />}> Delete</Button>
            <MyModal isModalOpen={isSellModalOpen} setIsModalOpen={setIsSellModalOpen} children={<MakeSellForm key={id} product={id} setIsModalOpen={setIsSellModalOpen} />} />
            <MyModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} children={<AddUpdateFlower key={id} id={id} setIsModalOpen={setIsModalOpen} type="update" />} />
        </div>
    )
}

export default MoreOptions
