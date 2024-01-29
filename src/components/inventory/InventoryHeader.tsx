import { Button, Modal, Col, Row, Input } from "antd"
const { confirm } = Modal;
import { PlusCircleOutlined, DeleteFilled, SearchOutlined } from "@ant-design/icons"
import { ChangeEvent, useState } from "react"
import MyModal from "../ui/MyModal";
import AddUpdateFlower from "../form/AddUpdateFlower";
import { useAppSelector } from "../../redux/hooks";
import { setBulkDeleteIds, useBulkDeleteIds } from "../../redux/features/flower/flowerSlice";
import { useDeleteBulkFlowersMutation } from "../../redux/features/flower/flowerApi";
import toast from "react-hot-toast";
export type filterState = {filter: Record<string, unknown>, setFilter: React.Dispatch<React.SetStateAction<Record<string, unknown>>>};

const InventoryHeader = ({filter, setFilter}: filterState) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const bulkDeleteIds = useAppSelector(useBulkDeleteIds);
    const [deleteBulkFlowers] = useDeleteBulkFlowersMutation();

    const handleBulkDelete = () => {
        console.log(bulkDeleteIds);
        showDeleteConfirm();
    }
    const showDeleteConfirm = async () => {
        confirm({
            title: 'Are you sure delete this flowers?',
            icon: <DeleteFilled style={{ color: "red" }} />,
            content: "You won't get it back!",
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteBulkFlowers(bulkDeleteIds).unwrap().then((payload) => {
                    toast.success(payload.message);
                    setBulkDeleteIds([]);
                }).catch((error) => {
                    toast.error(error.message);
                })
            },
            onCancel() {
                toast.error("Delete canceled!")
            },
        });
    };
    const addSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        
        setFilter({ ...filter, searchTerm: e.target.value });
    };
    return (
        <Row align={"middle"} justify={"space-between"}>
            <Col><h2>Inventory</h2></Col>
            <Col><Input onChange={(e)=>addSearchTerm(e)} style={{width: "500px"}} placeholder="Search Flower" prefix={<SearchOutlined />} /></Col>
            <Col >
                <Button onClick={handleBulkDelete} type="default" style={{ marginRight: "8px", display: `${bulkDeleteIds.length > 0 ? "inline" : "none"}` }} danger icon={<DeleteFilled />} >Delete Selected</Button>
                <Button onClick={() => setIsModalOpen(true)} type="primary" icon={<PlusCircleOutlined />}>
                    Add New Flower
                </Button>
            </Col>
            <MyModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}><AddUpdateFlower setIsModalOpen={setIsModalOpen} id={undefined} type="add" /></MyModal>
        </Row>
    )
}

export default InventoryHeader