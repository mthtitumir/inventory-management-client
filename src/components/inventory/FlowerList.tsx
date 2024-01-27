import { Divider } from "antd"

const FlowerList = () => {
    return (
        <div>
            <table style={{ width: "100%" }}>
                <thead>
                    <tr style={{ textAlign: "left" }}>
                        <th>Flower Name</th>
                        <th>Quantity</th>
                        <th>Category</th>
                        <th>Fragrance</th>
                        <th>Size</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <Divider style={{width: "100%"}} />
                <tbody>
                    <tr style={{ textAlign: "left" }}>
                        <td>Name</td>
                        <td>4</td>
                        <td>Gerbras</td>
                        <td>jasmine</td>
                        <td>s</td>
                        <td><img width={"40px"} src="https://i.ibb.co/XZGDHvv/floral-vista-logo.png" alt="" /></td>
                        <td>:</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>4</td>
                        <td>Gerbras</td>
                        <td>jasmine</td>
                        <td>s</td>
                        <td><img width={"40px"} src="https://i.ibb.co/XZGDHvv/floral-vista-logo.png" alt="" /></td>
                        <td>:</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>4</td>
                        <td>Gerbras</td>
                        <td>jasmine</td>
                        <td>s</td>
                        <td><img width={"40px"} src="https://i.ibb.co/XZGDHvv/floral-vista-logo.png" alt="" /></td>
                        <td>:</td>
                    </tr>
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