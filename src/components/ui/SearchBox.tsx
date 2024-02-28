import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input, Select, Space } from 'antd';

const SearchBox: React.FC = () => {
    const [searchIn, setSearchIn] = useState("customers")
    const options = [
        {
            value: 'flowers',
            label: 'Flower',
        },
        {
            value: 'customers',
            label: 'Customer',
        },
        {
            value: 'suppliers',
            label: 'Supplier',
        },
        {
            value: 'sales',
            label: 'Sales',
        },
        {
            value: 'discounts',
            label: 'Discount',
        },
    ];
    const handleChangeSelect = (value: string) =>{
        console.log(value);
        setSearchIn(value);
        
    }
    return (
        <Space.Compact  style={{backgroundColor: ""}}>
            <Select onChange={handleChangeSelect} dropdownStyle={{ width: '300px' }} placeholder={<SearchOutlined />} value={<SearchOutlined />} options={options} />
            <Input size='middle' style={{ width: "300px" }} placeholder={`Search is ${searchIn} ( / )`} />
        </Space.Compact>
    )
};

export default SearchBox;

{/* <Space.Compact>
    <Select defaultValue="Zhejiang" options={options} />
    <Input defaultValue="Xihu District, Hangzhou" />
</Space.Compact> */}