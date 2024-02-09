"use client";
import profile from "@/assets/v-profile.png";
import {
  CameraOutlined,
  EditOutlined,
  EnvironmentOutlined,
  FacebookFilled,
  GithubFilled,
  MailFilled,
  MediumSquareFilled,
  PhoneOutlined,
  TwitterSquareFilled,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Divider } from "antd";
import Image from "next/image";
import React, { useState } from "react";

import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
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

const UserProfile = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(
    "edit-profile"
  );

  const defaultValues = {
    name: "default",
    email: "<EMAIL>",
    phone: "1234567890",
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-textColor">My Profile</h1>
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <div className="bg-white w-full md:w-72 px-4 py-8 rounded">
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 bg-red-500 rounded-full relative">
              <Image src={profile} alt="profile" fill />
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
              <div className="w-full md:w-3/5 md:mx-auto">
                <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                  <div className="space-y-4">
                    <div>
                      <FormInput
                        name="name"
                        type="text"
                        size="large"
                        label="Name"
                        prefix={<UserAddOutlined />}
                      />
                    </div>
                    <div>
                      <FormInput
                        name="email"
                        type="email"
                        size="large"
                        label="Email"
                        prefix={<MailFilled />}
                      />
                    </div>
                    <div>
                      <FormInput
                        name="phone"
                        type="text"
                        size="large"
                        label="Phone Number"
                        prefix={<PhoneOutlined />}
                      />
                    </div>
                    <div>
                      <FormInput
                        name="address"
                        type="text"
                        size="large"
                        label="Address"
                        prefix={<EnvironmentOutlined />}
                      />
                    </div>
                    <div>
                      <FormInput
                        name="location"
                        type="text"
                        size="large"
                        label="Location"
                        prefix={<EnvironmentOutlined />}
                      />
                    </div>
                  </div>
                  <Button
                    shape="default"
                    type="primary"
                    htmlType="submit"
                    className="bg-textColor mt-3"
                  >
                    Update Profile
                  </Button>
                </Form>
              </div>
            </div>
          )}
          {selectedMenuItem === "social-profile" && (
            <div>
              <h1 className="text-xl font-semibold">Social Profile</h1>
              <p className="font-extralight text-sm">
                Add elsewhere links to your profile
              </p>
              <Divider />
              <div className="w-full md:w-3/5 md:mx-auto">
                <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                  <div className="space-y-4">
                    <div>
                      <FormInput
                        name="facebook_url"
                        type="url"
                        size="large"
                        label="Facebook :"
                        placeholder="Facebook URL"
                        prefix={
                          <FacebookFilled className="text-2xl bg-blue-400 text-white outline-none border-none" />
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
                          <TwitterSquareFilled className="text-2xl bg-blue-400 text-white outline-none border-none" />
                        }
                      />
                    </div>
                    <div>
                      <FormInput
                        name="medium_url"
                        type="url"
                        size="large"
                        label="Medium :"
                        placeholder="Medium Url"
                        prefix={
                          <MediumSquareFilled className="text-2xl bg-blue-400 text-white outline-none border-none" />
                        }
                      />
                    </div>
                    <div>
                      <FormInput
                        name="github_url"
                        type="url"
                        size="large"
                        label="Github :"
                        placeholder="Github URL"
                        prefix={
                          <GithubFilled className="text-2xl bg-blue-400 text-white outline-none border-none" />
                        }
                      />
                    </div>
                  </div>
                  <Button
                    shape="default"
                    type="primary"
                    htmlType="submit"
                    className="bg-textColor mt-3"
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
