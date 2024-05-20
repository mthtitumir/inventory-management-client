import React, { useState } from 'react';
import { Flex, Input, Select, Space } from 'antd';
import { Icon } from '../../icons';


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
    const handleChangeSelect = (value: string) => {
        setSearchIn(value);
    }
    const searchIcons = (<Flex align='center' gap={2} style={{ width: "" }}>
        <Icon.Search size={16} color='maroon' style={{ marginLeft: "5px" }} />
        <Icon.ArrowDown size={16} color="maroon" style={{ marginRight: "-8px" }} />
    </Flex>)
    return (
        <Space.Compact style={{ backgroundColor: "" }}>
            <Select value={""} onChange={handleChangeSelect} dropdownStyle={{ width: '50%' }} suffixIcon={searchIcons} options={options} />
            <Input size='middle' style={{ width: "100%" }} placeholder={`Search is ${searchIn} ( / )`} />
        </Space.Compact>
    )
};

export default SearchBox;

{/* <Space.Compact>
    <Select defaultValue="Zhejiang" options={options} />
    <Input defaultValue="Xihu District, Hangzhou" />
</Space.Compact> */}