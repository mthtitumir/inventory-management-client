import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const SearchBox: React.FC = () => (
    <>
        <Input style={{width: "200px"}} placeholder="Search Flower" prefix={<SearchOutlined />} />
    </>
);

export default SearchBox;