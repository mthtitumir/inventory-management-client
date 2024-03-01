import React from 'react';
import { ConfigProvider, Menu } from 'antd';
import { sidebarItemsGenerator } from '../../utils/SidebarItemsGenerator';
import { dashboardPaths } from '../../routes/dashboard.route';
import { LogoNameContent } from '../ui/Navbar';
// const { Sider } = Layout;

const sidebarItems = sidebarItemsGenerator(dashboardPaths);

const LeftSidebar: React.FC = () => {
    // const [collapsed, setCollapsed] = useState(false);

    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        darkItemBg: "none",
                        darkSubMenuItemBg: "none",
                        darkItemSelectedBg: "inherit",
                        //   itemBg: "#24d613"
                    }
                },
            }}
        >
            {/* <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}> */}
            {/* <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}> */}
            {/* <div>
                <h3 style={{ padding: "5px 24px", color: "white" }}>Flora Vista</h3>
            </div> */}
            {LogoNameContent}
            <Menu style={{ backgroundImage: "" }} theme="dark" mode="inline" defaultSelectedKeys={['1']} items={sidebarItems} />
            {/* </Sider> */}
        </ConfigProvider>

    );
};

export default LeftSidebar;