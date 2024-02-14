"use client";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import type { CSSProperties } from "react";
import React from "react";
import Heading from "../ui/Heading";

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: (
      <p className="font-medium">
        What is the Vehicle Management System (VMS)?
      </p>
    ),
    children: (
      <div className="">
        <p>
          The VMS is a comprehensive platform designed to simplify vehicle
          management for both individuals and businesses. It offers features
          such as user-friendly dashboard, vehicle profile management,
          maintenance scheduling, fuel expense tracking, and more.
        </p>
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: <p className="font-medium">How can the VMS help me?</p>,
    children: (
      <div>
        <p>
          The VMS aims to streamline vehicle management tasks, making them more
          efficient and organized. It allows easy comparison between vehicles,
          reduces the need for manual management with the ability to manage many
          vehicles with minimal personnel, facilitates income and expenditure
          calculations, simplifies vehicle maintenance, digitizes important
          documents, and ultimately saves both time and cost.
        </p>
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: (
      <p className="font-medium">What are some key features of the VMS?</p>
    ),
    children: (
      <div>
        <p>
          The VMS is a comprehensive platform designed to simplify vehicle
          management for both individuals and businesses. It offers features
          such as user-friendly dashboard, vehicle profile management,
          maintenance scheduling, fuel expense tracking, and more.
        </p>
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: (
      <p className="font-medium">
        How does the VMS contribute to a smoother journey on the road?
      </p>
    ),
    children: (
      <div>
        <p>
          The VMS eliminates the complexities of vehicle management, allowing
          users to focus on enjoying their rides. By automating tasks, providing
          comprehensive data analysis tools, and ensuring easy access to
          important information, the VMS simplifies the entire process and helps
          users have a stress-free experience on the road.
        </p>
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: (
      <p className="font-medium">
        Is the VMS suitable for businesses with fleets?
      </p>
    ),
    children: (
      <div>
        <p>
          Absolutely! The VMS is designed to cater to the needs of businesses
          with fleets of vehicles. It offers features specifically tailored to
          fleet management, such as driver assignment, budgeting and financial
          analysis tools, and user permissions and access control, to ensure
          efficient operation and optimization of resources.
        </p>
      </div>
    ),
    style: panelStyle,
  },
];

const Faq = () => {
  const panelStyle: React.CSSProperties = {
    padding: "5px",
    marginBottom: 20,
    background: "#ffffff",
    borderRadius: "5px",
    border: "none",
    boxShadow: "2px 2px 4px gray",
  };
  return (
    <>
      <Heading>
        <p>FAQ</p>
      </Heading>
      <div className="flex justify-center ">
        <div className="md:w-[70%]  h-full pt-5 rounded">
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            items={getItems(panelStyle)}
          />
        </div>
      </div>
    </>
  );
};

export default Faq;
