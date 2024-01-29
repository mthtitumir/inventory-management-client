import { Popover, Space } from 'antd';
import { ReactNode } from 'react';

const MyPopover = ({child1, child2}: {child1: ReactNode, child2: ReactNode}) => (
  <Space wrap>
    <Popover content={child2} title="" trigger="click">
      {child1}
    </Popover>
  </Space>
);

export default MyPopover;