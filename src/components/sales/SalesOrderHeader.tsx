/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, DatePicker, Button, Flex, Select } from "antd"
import { filterState } from "../inventory/InventoryHeader";
import { RedoOutlined } from "@ant-design/icons"

const { RangePicker } = DatePicker;

const SalesOrderHeader = ({ setFilter }: filterState) => {
    const addDateRange = (dates: any) => {
        if (!dates) {
            return;
        }
        const [startDate, endDate] = dates;
        const from = startDate.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
        const to = endDate.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
        setFilter({ from, to });
    };

    const resetFilter = () => {
        setFilter({});
    }
    
    const handleSelect = (value: string) => {
        setFilter({ range: value });
    }

    return (
        <Flex align={"center"} justify={"space-between"} style={{ marginBottom: "10px", }}>
            <Flex><h2>Sales Data</h2></Flex>
            <Flex align={"center"} justify={"space-between"} gap={8}>
                <Button onClick={resetFilter} icon={<RedoOutlined />} size={"middle"} style={{ color: "orangered", borderColor: "orangered" }}>
                    Reset
                </Button>
                <Select
                    placeholder="Select Filter"
                    style={{ width: 120 }}
                    onChange={handleSelect}
                    options={[
                        { value: 'day', label: 'Today' },
                        { value: 'week', label: 'This Week' },
                        { value: 'month', label: 'This Month' },
                        { value: 'year', label: 'This Year' },
                    ]}
                />
                <Form>
                    <Form.Item
                        name="RangePicker"
                        style={{ marginBottom: "0" }}
                    >
                        <RangePicker onChange={addDateRange} />
                    </Form.Item>
                </Form>
            </Flex>
            {/* <Col >
                <Button onClick={handleBulkDelete} type="default" style={{ marginRight: "8px", display: `${bulkDeleteIds.length > 0 ? "inline" : "none"}` }} danger icon={<DeleteFilled />} >Delete Selected</Button>
                <Button onClick={() => setIsModalOpen(true)} type="primary" icon={<PlusCircleOutlined />}>
                    Add New Flower
                </Button>
            </Col>
            <MyModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}><AddUpdateFlower setIsModalOpen={setIsModalOpen} id={undefined} type="add" /></MyModal> */}
        </Flex>
    )
}

export default SalesOrderHeader