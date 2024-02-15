"use client";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Image } from "antd";

const ContactCard = ({ contacts }: any) => {
  const {
    Avatar,
    banner,
    firstName,
    lastName,
    email,
    position,
    phone,
    address,
  } = contacts;
  return (
    <>
      <div className="max-w-sm rounded-lg bg-gray-300 dark:bg-[#1B2937]">
        <div className="rounded-t-lg h-32 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src={banner}
            alt="..."
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <Image src={Avatar} alt="..." />
        </div>
        <div className="text-center mt-2 ">
          <h2 className="text-xl dark:text-gray-300 font-semibold">
            {firstName} {lastName}
          </h2>
          <p className="font-semibold dark:text-[#EFEFEF] ">{position}</p>
        </div>

        <div className="p-5 space-y-2">
          <p className="text-gray-600 italic dark:text-[#6A7082]">
            <span className="mr-2">
              <PhoneOutlined />
            </span>{" "}
            {phone}
          </p>
          <p className="text-gray-600 italic dark:text-[#6A7082]">
            <span className="mr-2">
              <SendOutlined />
            </span>
            {email}
          </p>
          <p className="text-gray-600 italic dark:text-[#6A7082]">
            <span className="mr-2">
              <EnvironmentOutlined />
            </span>
            {address}
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
