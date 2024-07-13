"use client";
import profile from "@/assets/profile.png";
import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import {
  CameraOutlined,
  EditOutlined,
  EnvironmentOutlined,
  FacebookFilled,
  MailFilled,
  PhoneOutlined,
  TwitterSquareFilled,
  UserAddOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Divider, Menu } from "antd";
import Image from "next/image";
import React, { useState } from "react";
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
];

const UserProfile = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(
    "edit-profile"
  );

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-textColor">My Profile</h1>
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <div className="bg-white dark:bg-[#00334E] w-full md:w-72 px-4 py-8 rounded">
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 bg-red-500 rounded-full relative">
              <Image src={profile} alt="profile" className="" />
              <div className="absolute right-1  bottom-0 flex justify-center items-center ">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <Button
                    title="Upload Photo"
                    shape="circle"
                    type="primary"
                    icon={<CameraOutlined />}
                    className="bg-blue-400 ring-2  ring-white text-center"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center my-6 dark:text-[#EFEFEF]">
            <h1 className="text-lg font-semibold ">Nisharga Kabir</h1>
            <p className="font-light">Part Time Manager</p>
          </div>
          <Divider style={{ backgroundColor: "#eee" }} />
          <div>
            <Menu
              onClick={(e) => setSelectedMenuItem(e.key)}
              style={{ width: 230 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="vertical"
              items={items}
              className="dark:bg-[#00334E] dark:text-[#EFEFEF] "
            />
          </div>
        </div>

        <div className="bg-white dark:bg-[#00334E]  w-full md:flex-1 px-4 py-8 rounded">
          {selectedMenuItem === "edit-profile" && (
            <div className="dark:text-[#EFEFEF]">
              <h1 className="text-xl font-semibold">Edit Profile</h1>
              <p className="text-sm">set up your personal information</p>
              <Divider style={{ backgroundColor: "#eee" }} />

              <div className="w-full md:w-3/5 md:mx-auto">
                <Form submitHandler={onSubmit}>
                  <div className="space-y-4">
                    <div>
                      <FormInput
                        name="name"
                        type="text"
                        size="large"
                        label="Name"
                        placeholder="Your Name"
                        prefix={<UserAddOutlined />}
                      />
                    </div>
                    <div>
                      <FormInput
                        name="email"
                        type="email"
                        size="large"
                        label="Email"
                        placeholder="Your Email (abc@gmail.com)"
                        prefix={<MailFilled />}
                      />
                    </div>
                    <div>
                      <FormInput
                        name="phone"
                        type="text"
                        size="large"
                        label="Phone Number"
                        placeholder="Phone Number (+880 ...)"
                        prefix={<PhoneOutlined />}
                      />
                    </div>
                    <div>
                      <FormInput
                        name="address"
                        type="text"
                        size="large"
                        label="Address"
                        placeholder="Your Address"
                        prefix={<EnvironmentOutlined />}
                      />
                    </div>
                  </div>
                  <Button
                    shape="default"
                    type="primary"
                    htmlType="submit"
                    className="bg-[#003343] text-[#eee] dark:bg-gray-100 dark:text-[#00334E] mt-3"
                  >
                    Update Profile
                  </Button>
                </Form>
              </div>
            </div>
          )}
          {selectedMenuItem === "social-profile" && (
            <div className="dark:text-[#EFEFEF]">
              <h1 className="text-xl font-semibold">Social Profile</h1>
              <p className="font-extralight text-sm">
                Add elsewhere links to your profile
              </p>
              <Divider style={{ backgroundColor: "#eee" }} />
              <div className="w-full md:w-3/5 md:mx-auto">
                <Form submitHandler={onSubmit}>
                  <div className="space-y-4">
                    <div>
                      <FormInput
                        name="facebook_url"
                        type="url"
                        size="large"
                        label="Facebook :"
                        placeholder="Facebook URL"
                        prefix={
                          <FacebookFilled className="text-2xl bg-[#00334E] text-white outline-none border-none" />
                        }
                      />
                    </div>
                    <div>
                      <FormInput
                        name="twitter_url"
                        type="url"
                        size="large"
                        label="Twitter :"
                        placeholder="Twitter URL"
                        prefix={
                          <TwitterSquareFilled className="text-2xl bg-[#00334E] text-white outline-none border-none" />
                        }
                      />
                    </div>
                  </div>
                  <Button
                    shape="default"
                    type="primary"
                    htmlType="submit"
                    className="bg-[#003343] text-[#eee] dark:bg-gray-100 dark:text-[#00334E] mt-3"
                  >
                    Update Social Profile
                  </Button>
                </Form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
