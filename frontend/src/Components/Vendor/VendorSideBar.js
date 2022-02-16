import React from 'react'
import { Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { logout } from '../Auth/auth';

export const VendorSideBar = () => {
    const location = useLocation();
    return (
        <div>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                }}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['/vendor/get-products']} selectedKeys={[location.pathname]}>
                <Menu.Item
            key="/"
            className="mt-4"
            style={{
              backgroundcolor: "black",
              fontWeight: "bolder",
              fontSize: "18px",
            }}
          >
            <NavLink to="/"> Virtual Shalmi </NavLink>
          </Menu.Item>
          <hr />
                    <Menu.Item key="/vendor/get-products">
                        <NavLink to='/vendor/get-products'>Products</NavLink>
                    </Menu.Item>
                    <Menu.Item key="/vendor/orders">
                        <NavLink to='/vendor/orders'> Order Management</NavLink>
                    </Menu.Item>
                    <Menu.Item key="/vendor/reviews">
                        <NavLink to='/vendor/reviews'> Reviews</NavLink>
                    </Menu.Item>
                    <Menu.Item key="/vendor/profile">
                        <NavLink to='/vendor/profile'> Profile</NavLink>
                    </Menu.Item>
                    <Menu.Item key="/vendor/logout">
                        <a href='/vendor/login' onClick={() => { logout(() => { }) }}>
                            Logout
                        </a>
                    </Menu.Item>
                </Menu>
            </Sider>
        </div>
    )
}
