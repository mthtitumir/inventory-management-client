import React from 'react';
import { Checkbox } from 'antd';

const onChange = (checkedValues: FormData) => {
    console.log('checked = ', checkedValues);
};

const Check: React.FC = (id: string) => (
    <Checkbox onChange={()=>{onchange(id)}} value="A">A</Checkbox>

);

export default Check;