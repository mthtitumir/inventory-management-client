import React from 'react';
import { Menu } from 'antd';
import { sidebarItemsGenerator } from '../../utils/SidebarItemsGenerator';
import { dashboardPaths } from '../../routes/dashboard.route';

const sidebarItems = sidebarItemsGenerator(dashboardPaths);

const LeftSidebar: React.FC = () => {

    return (
        <div style={{}}>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} items={sidebarItems} />
        </div>

    );
};

export default LeftSidebar;