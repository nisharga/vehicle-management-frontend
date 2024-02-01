"use client";

import { USER_ROLE } from "@/constants/role";
import { sidebarItems } from "@/constants/sidebarItems";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import { useState } from "react";
import logo from "../../assets/logo.png";

const role = USER_ROLE.SUPER_ADMIN;
// const role = USER_ROLE.MANAGER;
// const role = USER_ROLE.DRIVER;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={210}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Image
        src={logo}
        alt="..."
        sizes="100vw"
        style={{
          width: "35%",
          height: "auto",
          margin: "auto",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      />

      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
