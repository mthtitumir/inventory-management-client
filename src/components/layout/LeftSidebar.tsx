import React from 'react';
import { ConfigProvider, Menu } from 'antd';
import { sidebarItemsGenerator } from '../../utils/SidebarItemsGenerator';
import { dashboardPaths } from '../../routes/dashboard.route';

const sidebarItems = sidebarItemsGenerator(dashboardPaths);

const LeftSidebar: React.FC = () => {

    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                      darkItemBg: "none",
                      darkItemSelectedBg: "inherit",
                    //   itemBg: "#24d613"
                    },
                  },
            }}
        >
            <div>
                <h3 style={{ padding: "5px 24px", color: "white" }}>Flora Vista</h3>
            </div>
            <Menu style={{ backgroundImage: "" }} theme="dark" mode="inline" defaultSelectedKeys={['1']} items={sidebarItems} />
        </ConfigProvider>

    );
};

export default LeftSidebar;