import { Menu } from 'antd';
import { AppstoreFilled, FlagFilled, DatabaseFilled } from '@ant-design/icons';
import React from 'react';

const Sidebar = () => {
    return (
        <div>
            <h3 style={{marginTop: "20px", marginLeft: "40px"}} class="menu-title">MENU</h3>
            <Menu 
                defaultSelectedKeys={['dashboard']}
            >
                <Menu.Item key="dashboard">
                    <AppstoreFilled />
                    <span>Dashboard</span>
                </Menu.Item>
                <Menu.Item key="maps">
                    <FlagFilled />
                    <span>Maps</span>
                </Menu.Item>
                <Menu.Item key="menu">
                    <DatabaseFilled />
                    <span>Menu</span>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Sidebar;