import React from "react";
import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import { NavLink, useLocation } from "react-router-dom";
import { logout } from "../Auth/auth";

export const AdminSideBar = () => {
  const location = useLocation();
  return (
    <div>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        {/* <div className="logo">Virtual Shalmi</div> */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/admin/get-products"]}
          selectedKeys={[location.pathname]}
        >
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
          <Menu.Item key="/admin/vendors">
            <NavLink to="/admin/vendors"> Vendors </NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/retailers">
            <NavLink to="/admin/retailers"> Retailers </NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/all-categories">
            <NavLink to="/admin/all-categories">List of Categories</NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/get-products">
            <NavLink to="/admin/get-products">Products</NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/orders">
            <NavLink to="/admin/orders"> Order Management</NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/logout">
            <a
              href="/admin/login"
              onClick={() => {
                logout(() => {});
              }}
            >
              Logout
            </a>
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};
