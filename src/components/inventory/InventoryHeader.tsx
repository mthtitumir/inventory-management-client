import { Button, Col, Row } from "antd"
import { PlusCircleOutlined, DeleteFilled } from "@ant-design/icons"
import { useState } from "react"
import MyModal from "../ui/MyModal";
import AddUpdateFlower from "../form/AddUpdateFlower";
import { useAppSelector } from "../../redux/hooks";
import { setBulkDeleteIds, useBulkDeleteIds } from "../../redux/features/flower/flowerSlice";
import { useDeleteBulkFlowersMutation } from "../../redux/features/flower/flowerApi";
import toast from "react-hot-toast";

const InventoryHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const bulkDeleteIds = useAppSelector(useBulkDeleteIds);
    const [deleteBulkFlowers] = useDeleteBulkFlowersMutation();
    const handleBulkDelete = () => {
        console.log(bulkDeleteIds);
        deleteBulkFlowers(bulkDeleteIds).unwrap().then((payload) => {
            toast.success(payload.message);
            setBulkDeleteIds([]);
        }).catch((error) => {
            toast.error(error.message);
        })

    }
    const handleOpenModal = () => {
        setIsModalOpen(true);
    }
    return (
        <Row align={"middle"} justify={"space-between"}>
            <Col><h3>Inventory</h3></Col>
            <Col >
                <Button onClick={handleBulkDelete} type="default" style={{ marginRight: "8px", display: `${bulkDeleteIds.length > 0 ? "inline" : "none"}` }} danger icon={<DeleteFilled />} >Delete Selected</Button>
                <Button onClick={() => handleOpenModal()} type="primary" icon={<PlusCircleOutlined />}>
                    Add New Flower
                </Button>
            </Col>
            <MyModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}><AddUpdateFlower setIsModalOpen={setIsModalOpen} id={undefined} type="add" /></MyModal>
        </Row>
    )
}

export default InventoryHeader