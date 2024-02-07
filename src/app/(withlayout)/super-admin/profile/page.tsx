"use client";
import Image from "next/image";
import React, { useState } from "react";
import profile from "@/assets/v-profile.png";
import {
  CameraOutlined,
  EditOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Divider } from "antd";

import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Edit Profile", "edit-profile", <EditOutlined />),
  getItem("Social Profile", "social-profile", <UserAddOutlined />),

  { type: "divider" },
];

const ProfilePage = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(
    "edit-profile"
  );
  return (
    <div>
      <h1 className="text-2xl font-bold text-textColor">My Profile</h1>
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <div className="bg-white w-full md:w-72 px-4 py-8 rounded">
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 bg-red-500 rounded-full relative">
              <Image src={profile} alt="profile" fill />
              <div className="absolute right-1  bottom-0 flex items-center justify-center ring-4 ring-white rounded-full">
                <Button
                  shape="circle"
                  type="primary"
                  icon={<CameraOutlined />}
                  className="text-lg"
                />
              </div>
            </div>
          </div>
          <div className="text-center my-6">
            <h1 className="text-lg font-semibold ">Shofikul</h1>
            <p className="font-light">Full stack developer</p>
          </div>
          <Divider />
          <div>
            <Menu
              onClick={(e) => setSelectedMenuItem(e.key)}
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </div>
        </div>
        <div className="bg-white w-full md:flex-1 px-4 py-8 rounded">
          {selectedMenuItem === "edit-profile" && (
            <div>
              <h1 className="text-xl font-semibold">Edit Profile</h1>
              <p className="font-extralight text-sm">
                set up your personal information
              </p>
              <Divider />
              <div></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
