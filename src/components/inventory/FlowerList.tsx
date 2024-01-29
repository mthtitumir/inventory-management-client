import { useAppDispatch } from "../../redux/hooks";
import { setFlowers } from "../../redux/features/flower/flowerSlice";
import { useGetAllFlowersQuery } from "../../redux/features/flower/flowerApi";
import { TFlower } from "../../types";
import { InfoCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import MyPopover from "../ui/MyPopover";
import DeleteEditPop from "../ui/DeleteEditPop";

const FlowerList = () => {
    const dispatch = useAppDispatch();
    const [id, setId] = useState('');
    const { data } = useGetAllFlowersQuery(undefined);
    const flowers = data?.data;
    dispatch(setFlowers(flowers));
    const handleInfoClick = (id: string) =>{      
        setId(id);
    }
    return (
        <div>
            <table style={{ width: "100%" }}>
                <thead style={{ width: "100%", marginBottom: "10px", border: "1px solid rgba(5, 5, 5, 1) ", borderCollapse: "collapse" }}>
                    <tr style={{ textAlign: "left", }}>
                        <th></th>
                        <th>Image</th>
                        <th>Flower Name</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Fragrance</th>
                        <th>Size</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        flowers?.map((flower: TFlower) => <tr style={{ textAlign: "left" }}>
                            <td><input type="checkbox" /></td>
                            <td><img style={{ borderRadius: "3px" }} width={"40px"} src={flower?.image || "https://i.ibb.co/XZGDHvv/floral-vista-logo.png"} alt="" /></td>
                            <td>{flower?.name || "no data"}</td>
                            <td>{flower?.quantity || "no data"}</td>
                            <td>{flower?.type || "no data"}</td>
                            <td>{flower?.fragrance || "no data"}</td>
                            <td>{flower?.size || "no data"}</td>
                            <td><MyPopover key={flower?._id} child1={<InfoCircleOutlined  onClick={()=> handleInfoClick(flower?._id)}/>} child2={<DeleteEditPop id={id} />} /></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FlowerList


























// import React, { useState } from 'react';
// import { Table } from 'antd';
// import type { TableColumnsType, TableProps } from 'antd';

// type TableRowSelection<T> = TableProps<T>['rowSelection'];

// interface DataType {
//   key: React.Key;
//   flowerName: string;
//   quantity: number;
//   price: number;
// }

// const columns: TableColumnsType<DataType> = [
//   {
//     title: 'Flower Name',
//     dataIndex: 'flowerName',
//   },
//   {
//     title: 'Quantity',
//     dataIndex: 'quantity',
//   },
//   {
//     title: 'Price',
//     dataIndex: 'price',
//   },
// ];

// const data: DataType[] = [];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     flowerName: `Edward King ${i}`,
//     quantity: 32,
//     price: 2,
//   });
// }

// const FlowerList: React.FC = () => {
//   const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

//   const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
//     console.log('selectedRowKeys changed: ', newSelectedRowKeys);
//     setSelectedRowKeys(newSelectedRowKeys);
//   };

//   const rowSelection: TableRowSelection<DataType> = {
//     selectedRowKeys,
//     onChange: onSelectChange,
//     selections: [
//       Table.SELECTION_ALL,
//       Table.SELECTION_INVERT,
//       Table.SELECTION_NONE,
//       {
//         key: 'odd',
//         text: 'Select Odd Row',
//         onSelect: (changeableRowKeys) => {
//           let newSelectedRowKeys = [];
//           newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
//             if (index % 2 !== 0) {
//               return false;
//             }
//             return true;
//           });
//           setSelectedRowKeys(newSelectedRowKeys);
//         },
//       },
//       {
//         key: 'even',
//         text: 'Select Even Row',
//         onSelect: (changeableRowKeys) => {
//           let newSelectedRowKeys = [];
//           newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
//             if (index % 2 !== 0) {
//               return true;
//             }
//             return false;
//           });
//           setSelectedRowKeys(newSelectedRowKeys);
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//         <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
//     </div>
//   );
// };

// export default FlowerList;