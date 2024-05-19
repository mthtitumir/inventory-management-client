import React, { useState } from 'react';
import { ConfigProvider, Flex, Layout, Menu } from 'antd';
import { sidebarItemsGenerator } from '../../utils/SidebarItemsGenerator';
import { dashboardPaths } from '../../routes/dashboard.route';
const { Sider } = Layout;

const sidebarItems = sidebarItemsGenerator(dashboardPaths);

const LeftSidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        darkItemBg: "none",
                        darkSubMenuItemBg: "none",
                        darkItemSelectedBg: "inherit",
                        // itemBg: "#24d613"
                    },
                },
            }}
        >
            <Sider
                collapsible collapsed={collapsed} onCollapse={(value: boolean) => setCollapsed(value)}
                // style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
                breakpoint="lg"
                collapsedWidth="0"
                style={{ height: '100vh', position: 'sticky', top: '0', left: '0' }}
            >
                <Flex align="center" justify="center" gap={5} style={{ margin: "10px" }}>
                    <img style={{ width: "40px" }} src="https://i.ibb.co/XZGDHvv/floral-vista-logo.png" />
                    <h4 style={{ color: "white", ...(collapsed && { display: "none" }) }}>Flora Vista</h4>
                </Flex>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
            </Sider>
        </ConfigProvider>

    );
};

export default LeftSidebar;