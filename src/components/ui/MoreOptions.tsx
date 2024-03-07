import { DeleteOutlined, EditOutlined, DeleteFilled, ShoppingCartOutlined, CopyOutlined } from '@ant-design/icons';
import { LuShoppingCart } from "react-icons/lu";
import { Button, Modal, Select } from 'antd';
const { confirm } = Modal;
import { useDeleteFlowerMutation } from '../../redux/features/flower/flowerApi';
import toast from 'react-hot-toast';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';
import MyModal from './MyModal';
import { useState } from 'react';
import AddToCartModal from '../sales/AddToCartModal';

const MoreOptions = ({ id }: { id: string }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [isSellModalOpen, setIsSellModalOpen] = useState(false);
    // const [isVariantModalOpen, setIsVariantModalOpen] = useState(false);
    const [deleteFlower] = useDeleteFlowerMutation();

    const handleOnClick = (actionType: "edit" | "delete" | "sell" | "variant" | "cart") => {
        if (actionType === "delete") {
            showDeleteConfirm();
        } else if (actionType === "cart") {
            setIsModalOpen(true);
        }
    }

    const showDeleteConfirm = async () => {
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
        !id ? <Spinner /> : <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Link to={`/inventory/items/sell-item/${id}`}><Button style={{ borderColor: "green", color: "green", width: "100%" }} icon={<ShoppingCartOutlined />}> Sell</Button></Link>
            {/* <Button onClick={() => handleOnClick("sell")} style={{ borderColor: "green", color: "green" }} icon={<ShoppingCartOutlined />}> Sell</Button> */}
            <Link to={`/inventory/items/edit-item/${id}`}><Button icon={<EditOutlined />} style={{ width: "100%" }}> Edit</Button></Link>
            {/* <Button onClick={() => handleOnClick("edit")} icon={<EditOutlined />}> Edit</Button> */}
            <Link to={`/inventory/items/make-item-variant/${id}`}><Button icon={<CopyOutlined />}> Make Variant</Button></Link>
            {/* <Button onClick={() => handleOnClick("variant")} icon={<CopyOutlined />}> Make Variant</Button> */}
            <Button onClick={() => handleOnClick("cart")} style={{ borderColor: "orange", color: "orange" }} icon={<LuShoppingCart style={{ color: "orange" }} />}>Add To Cart</Button>
            <Button onClick={() => handleOnClick("delete")} style={{ borderColor: "red", color: "red" }} icon={<DeleteOutlined style={{ color: "red" }} />}> Delete</Button>
            <MyModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} children={<AddToCartModal />} />
        </div>
    )
}

export default MoreOptions
