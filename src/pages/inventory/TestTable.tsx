import { Table, TableColumnsType, TableProps } from "antd";
import { useFlowers } from "../../redux/features/flower/flowerSlice";
import { useAppSelector } from "../../redux/hooks";
import { TFlower } from "../../types";
import MyPopover from "../../components/ui/MyPopover";
import DeleteEditPop from "../../components/ui/DeleteEditPop";
import { InfoCircleOutlined, FilterTwoTone } from '@ant-design/icons';

const TestTable = () => {
    const flowers = useAppSelector(useFlowers);
    const onChange: TableProps<TFlower>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const columns: TableColumnsType<TFlower> = [
        {
            title: 'Image',
            dataIndex: 'image',
            render: theImageURL => <img style={{width: "40px"}} alt={theImageURL} src={theImageURL} />
        },
        {
            title: 'Name',
            dataIndex: 'name',
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Category 1',
                    value: 'Category 1',
                },
                {
                    text: 'Category 2',
                    value: 'Category 2',
                },
            ],
            filterMode: 'tree',
            filterSearch: true,
            onFilter: (value: string, record) => record.name.startsWith(value),
            width: '30%',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            sorter: (a, b) => a.quantity - b.quantity,
        },
        {
            title: 'Category',
            dataIndex: 'type',
        },
        {
            title: 'Fragrance',
            dataIndex: 'fragrance',
        },
        {
            title: 'Size',
            dataIndex: 'size',
        },
        {
            title: 'Action',
            dataIndex: '_id',
            render: <MyPopover key={dataIndex} child1={<InfoCircleOutlined onClick={() => handleInfoClick(flower?._id)} />} child2={<DeleteEditPop id={id} />} />
        },
    ];

    return (
        <Table columns={columns} dataSource={flowers} onChange={onChange} />
    )
}

export default TestTable