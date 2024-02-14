"use client";
import Heading from "@/components/ui/Heading";
import { EditOutlined, UserAddOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
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

const DriverProfilePage = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(
    "edit-profile"
  );

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Heading>
        <p>Driver Profile</p>
      </Heading>

      <div className="grid grid-cols-4 sm:grid-cols-12 gap-6">
        <div className="col-span-4 sm:col-span-3">
          <div className="bg-white dark:bg-[#00334E] dark:text-[#EFEFEF] shadow rounded-lg p-6">
            <div className="flex flex-col items-center">
              <img
                src="https://i.ibb.co/jkxVCby/pic7.jpg"
                alt="..."
                className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
              />
              <h1 className="text-xl font-bold">Md. Omar Faruq</h1>
              <p className="">Professional Driver</p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="bg-gray-300 hover:bg-gray-400   py-2 px-4 rounded"
                >
                  Resume
                </a>
              </div>
            </div>
            <hr className="my-6 border-t border-gray-300" />
            <div className="flex flex-col">
              <span className="uppercase font-bold tracking-wider mb-2">
                Skills →
              </span>
              <ul>
                <li className="mb-2">Driving Skills</li>
                <li className="mb-2">Mechanical Skills</li>
                <li className="mb-2">Communication Skills</li>
                <li className="mb-2">Navigation Skills</li>
                <li className="mb-2">Time Management</li>
                <li className="mb-2">Adaptability</li>
                <li className="mb-2">Soft Skill</li>
              </ul>
            </div>
            <div className="flex justify-center items-center gap-6 my-2">
              <a
                className="  hover:text-[#E8E8E8]"
                aria-label="Visit TrendyMinds LinkedIn"
                href=""
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-6"
                >
                  <path
                    fill="currentColor"
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </a>

              <a
                className="  hover:text-[#E8E8E8]"
                aria-label="Visit TrendyMinds Facebook"
                href=""
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="h-6"
                >
                  <path
                    fill="currentColor"
                    d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-4 sm:col-span-9">
          <div className="bg-white dark:bg-[#00334E] dark:text-[#E8E8E8] shadow rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">About Me</h2>
            <p className="italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              finibus est vitae tortor ullamcorper, ut vestibulum velit
              convallis. Aenean posuere risus non velit egestas suscipit. Nunc
              finibus vel ante id euismod. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam
              erat volutpat. Nulla vulputate pharetra tellus, in luctus risus
              rhoncus id.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
            <div className="mb-6">
              <div className="flex justify-between flex-wrap gap-2 w-full">
                <span className="font-bold">Driving</span>
                <p>
                  <span className="  mr-2">at ABC Company</span>
                  <span className=" ">2017 - 2019</span>
                </p>
              </div>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                finibus est vitae tortor ullamcorper, ut vestibulum velit
                convallis. Aenean posuere risus non velit egestas suscipit.
              </p>
            </div>
            <div className="mb-6">
              <div className="flex justify-between flex-wrap gap-2 w-full">
                <span className="  font-bold">Car Driving</span>
                <p>
                  <span className="  mr-2">at ABC Company</span>
                  <span className=" ">2017 - 2019</span>
                </p>
              </div>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                finibus est vitae tortor ullamcorper, ut vestibulum velit
                convallis. Aenean posuere risus non velit egestas suscipit.
              </p>
            </div>
            <div className="mb-6">
              <div className="flex justify-between flex-wrap gap-2 w-full">
                <span className="  font-bold">Mechanical Work</span>
                <p>
                  <span className="  mr-2">at ABC Company</span>
                  <span className=" ">2017 - 2019</span>
                </p>
              </div>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                finibus est vitae tortor ullamcorper, ut vestibulum velit
                convallis. Aenean posuere risus non velit egestas suscipit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverProfilePage;
