"use client";
import { CaretRightOutlined } from "@ant-design/icons";
import type { CSSProperties } from "react";
import React from "react";
import type { CollapseProps } from "antd";
import { Button, Collapse } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const feedback = (
  <>
    <p className="my-4 font-bold text-textColor">Was this article helpful ?</p>
    <div className="flex gap-4">
      <Button
        style={{ backgroundColor: "#707070" }}
        type="primary"
        icon={<SmileOutlined />}
      >
        Yes
      </Button>
      <Button
        style={{ backgroundColor: "#707070" }}
        type="primary"
        icon={<SmileOutlined />}
      >
        No
      </Button>
    </div>
  </>
);

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
      <div>
        <p>
          The VMS is a comprehensive platform designed to simplify vehicle
          management for both individuals and businesses. It offers features
          such as user-friendly dashboard, vehicle profile management,
          maintenance scheduling, fuel expense tracking, and more.
        </p>
        <div>{feedback}</div>
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
        <div>{feedback}</div>
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
        <div>{feedback}</div>
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
        <div>{feedback}</div>
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
        <div>{feedback}</div>
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "6",
    label: (
      <p className="font-medium">Can I track fuel expenses using the VMS?</p>
    ),
    children: (
      <div>
        <p>
          Yes, the VMS provides a fuel expense tracking feature that allows you
          to keep a record of your fuel expenses. This feature helps monitor
          costs and enhance fuel efficiency by providing insights into fuel
          consumption patterns.
        </p>
        <div>{feedback}</div>
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "7",
    label: (
      <p className="font-medium">
        How does maintenance scheduling work in the VMS?
      </p>
    ),
    children: (
      <div>
        <p>
          The VMS allows you to set up automated reminders for routine
          maintenance tasks for your vehicles. This ensures that your vehicles
          stay in top-notch condition by adhering to recommended maintenance
          schedules, ultimately prolonging their lifespan and minimizing
          unexpected breakdowns.
        </p>
        <div>{feedback}</div>
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "8",
    label: (
      <p className="font-medium">
        Is it easy to manage documents using the VMS?
      </p>
    ),
    children: (
      <div>
        <p>
          Absolutely! The VMS provides a document storage feature that allows
          you to upload and store important documents such as insurance papers
          and registration certificates in a secure digital space. This
          eliminates the need for physical paperwork and ensures easy access to
          vital documents whenever needed.
        </p>
        <div>{feedback}</div>
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "9",
    label: (
      <p className="font-medium">
        Can I assign drivers to specific vehicles with the VMS?
      </p>
    ),
    children: (
      <div>
        <p>
          Yes, the VMS offers a driver assignment feature that allows you to
          assign drivers to specific vehicles and track their usage. This helps
          manage responsibilities effectively and monitor driver performance,
          ensuring optimal utilization of resources.
        </p>
        <div>{feedback}</div>
      </div>
    ),
    style: panelStyle,
  },
  {
    key: "10",
    label: (
      <p className="font-medium">
        How does the VMS help with budgeting and financial analysis?
      </p>
    ),
    children: (
      <div>
        <p>
          The VMS provides tools for budgeting and financial analysis, allowing
          you to assess overall vehicle-related expenses and plan for future
          investments. By generating detailed expense reports and offering
          insights into financial data, the VMS empowers you to make informed
          decisions and optimize your financial resources.
        </p>
        <div>{feedback}</div>
      </div>
    ),
    style: panelStyle,
  },
];

const page = () => {
  const panelStyle: React.CSSProperties = {
    padding: "5px",
    marginBottom: 20,
    background: "#ffffff",
    borderRadius: "5px",
    border: "none",
    boxShadow: "2px 2px 4px gray",
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2 ">FAQs</h1>

      <div className="w-full  h-full p-6  rounded">
        <h3 className="text-2xl font-bold mb-6">Using Applications</h3>
        {/* <Collapse items={items} bordered={false} defaultActiveKey={["1"]} /> */}
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
  );
};

export default page;
