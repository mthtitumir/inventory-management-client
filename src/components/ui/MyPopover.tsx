import { Popover, Space } from 'antd';
import { ReactNode } from 'react';

const MyPopover = ({child1, child2}: {child1: ReactNode, child2: ReactNode}) => (
  // child1 ---> popover icon
  // child1 ---> content which will be shown inside the popover
  <Space wrap>
    <Popover placement='bottom' content={child2} title="" trigger="click">
      {child1}
    </Popover>
  </Space>
);

export default MyPopover;