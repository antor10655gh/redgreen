import { Menu } from 'antd';
import { AppstoreFilled, FlagFilled, DatabaseFilled, SettingFilled, UserOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import React from 'react';

const Sidebar = () => {
    return (
        <div>
            
            <Menu 
                defaultSelectedKeys={['dashboard']}
            >
                <h3 style={{margin: "15px", marginTop:"30px"}} class="menu-title">MENU</h3>
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
                <h3 style={{margin: "15px", marginTop:"30px"}} class="menu-title">OTHERS</h3>
                <Menu.Item key="settings">
                    <SettingFilled />
                    <span>Settings</span>
                </Menu.Item>
                <Menu.Item key="accounts">
                    <UserOutlined />
                    <span>Accounts</span>
                </Menu.Item>
                <Menu.Item key="helps">
                    <ExclamationCircleFilled />
                    <span>Helps</span>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default Sidebar;