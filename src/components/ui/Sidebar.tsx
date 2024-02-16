"use client";

import { USER_ROLE } from "@/constants/role";
import { sidebarItems } from "@/constants/sidebarItems";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { getTokenFromKey } from "@/services/auth.service";


const role = USER_ROLE.ADMIN;

const Sidebar =  () => {
  const [collapsed, setCollapsed] = useState(false);
  const [currentRole, setCurrentRole] = useState('')
  const roleFromToekn =  getTokenFromKey()

  useEffect(()=>{
    // if(roleFromToekn.role === 'ADMIN'){
    //   roles = 'super-admin'
    // }else if(roleFromToekn.role === 'MANAGER'){
    //   roles = 'manager'
    // } else if(roleFromToekn.role === 'DRIVER'){
    //   roles = 'driver'
    // }
    if (roleFromToekn.role == 'ADMIN') {
      setCurrentRole('super-admin')
    }else if(roleFromToekn.role == 'MANAGER'){
      setCurrentRole('manager')
    }else if(roleFromToekn.role == 'DRIVER'){
      setCurrentRole('driver')
    }
    // setCurrentRole(roleFromToekn.role)
  },[roleFromToekn])

  

 
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
        className="customSidebar"
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(currentRole)}
      />
    </Sider>
  );
};

export default Sidebar;
