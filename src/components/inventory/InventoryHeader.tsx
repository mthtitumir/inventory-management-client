/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal, Col, Input, Flex } from "antd"
const { confirm } = Modal;
import { PlusCircleOutlined, DeleteFilled, SearchOutlined } from "@ant-design/icons"
import { ChangeEvent } from "react"
import { useAppSelector } from "../../redux/hooks";
import { setBulkDeleteIds, useBulkDeleteIds } from "../../redux/features/flower/flowerSlice";
import { useDeleteBulkFlowersMutation } from "../../redux/features/flower/flowerApi";
import toast from "react-hot-toast";
import ResetFilter from "../ui/ResetFilter";
import { Link } from "react-router-dom";
export type filterState = { filter: Record<string, unknown>, setFilter: React.Dispatch<React.SetStateAction<object | Record<string, unknown>>> };

const InventoryHeader = ({ filter, setFilter }: filterState) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const bulkSelectedIds = useAppSelector(useBulkDeleteIds);
    const [deleteBulkFlowers] = useDeleteBulkFlowersMutation();

    const handleBulkDelete = () => {
        // console.log(bulkSelectedIds);
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
                deleteBulkFlowers(bulkSelectedIds).unwrap().then((payload: any) => {
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
        setFilter({ ...filter, searchTerm: e.target.value });
    };
    return (
        <Flex align={"center"} justify={"space-between"} style={{ borderBottom: "1px solid lightblue", paddingBottom: '10px', marginTop: "10px" }}>
            <Col>
                <h2>Inventory</h2>
            </Col>
            <Flex align={"center"} justify={"space-between"}>
                <Input onChange={(e) => addSearchTerm(e)} style={{ marginRight: '5px' }} placeholder="Search Flower" prefix={<SearchOutlined />} />
                <ResetFilter setFilter={setFilter} />
            </Flex>
            <Col>
                {/* <Button type="default" style={{ marginRight: "8px", display: `${bulkSelectedIds.length > 0 ? "inline" : "none"}` }} danger >Sell</Button> */}
                {/* <Link to={`/sales/checkout`}><Button style={{ borderColor: "green", color: "green", width: "100%", display: `${bulkSelectedIds.length > 0 ? "inline" : "none"}` }} > Sell</Button></Link> */}
                <Button onClick={handleBulkDelete} type="default" style={{ marginRight: "8px", display: `${bulkSelectedIds.length > 0 ? "inline" : "none"}` }} danger icon={<DeleteFilled />} >Delete Selected</Button>
                <Link to={"/inventory/items/add-item"}>
                    <Button type="primary" icon={<PlusCircleOutlined />}>
                        Add New Flower
                    </Button>
                </Link>
            </Col>
            {/* <MyModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}><AddUpdateFlower setIsModalOpen={setIsModalOpen} id={undefined} type="add" /></MyModal> */}
        </Flex>
    )
}

export default InventoryHeader