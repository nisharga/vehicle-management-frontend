import {
  CarOutlined,
  DesktopOutlined,
  ExperimentOutlined,
  FieldTimeOutlined,
  FileAddOutlined,
  HistoryOutlined,
  OrderedListOutlined,
  SaveOutlined,
  ShopOutlined,
  SolutionOutlined,
  TableOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItems = (role: string) => {
  //.............Manager.......................
  const managerSidebarItems: MenuProps["items"] = [
    // ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/addVehicle`}>Add Vehicle</Link>,
      icon: <FileAddOutlined />,
      key: `/${role}/addVehicle`,
    },
    {
      label: <Link href={`/${role}/Manager-item-2`}>Vehicle List</Link>,
      icon: <UnorderedListOutlined />,
      key: `/${role}/vehicleList`,
    },
    {
      label: <Link href={`/${role}/createTrip`}>Create Trip</Link>,
      icon: <CarOutlined />,
      key: `/${role}/createTrip`,
    },
    {
      label: <Link href={`/${role}/addDriver`}>Add Driver</Link>,
      icon: <UserAddOutlined />,
      key: `/${role}/addDriver`,
    },
    {
      label: <Link href={`/${role}/driverList`}>Driver List</Link>,
      icon: <OrderedListOutlined />,
      key: `/${role}/driverList`,
    },
    {
      label: <Link href={`/${role}/manageFuel`}>Manage Fuel</Link>,
      icon: <ExperimentOutlined />,
      key: `/${role}/manageFuel`,
    },

    {
      label: "Inventory",
      key: "inventory",
      icon: <ShopOutlined />,
      children: [
        {
          label: "Tools",
          key: "tools",
        },
        {
          label: "Furniture",
          key: "furniture",
        },
        {
          label: "Vehicle Wheels",
          key: "vehicleWheels",
        },
        {
          label: "Others",
          key: "others",
        },
      ],
    },
    {
      label: "Report",
      key: "Report",
      icon: <SaveOutlined />,
      children: [
        {
          label: "Trip Report",
          key: "tripReport",
        },
        {
          label: "income/expenditure",
          key: "expenditureReport",
        },
      ],
    },
  ];

  //.........Driver........................
  const driverSidebarItems: MenuProps["items"] = [
    // ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/tripHistory`}>Trip History</Link>,
      icon: <HistoryOutlined />,
      key: `/${role}/tripHistory`,
    },
    {
      label: "Trip Schedule",
      key: "tripSchedule",
      icon: <FieldTimeOutlined />,
      children: [
        {
          label: "Complete Trip",
          key: "Complete Trip",
        },
        {
          label: "Up-coming",
          key: "upComingReport",
        },
        {
          label: "on-going",
          key: "onGoingReport",
        },
      ],
    },

    {
      label: "Driver History",
      key: "driverHistory",
      icon: <SolutionOutlined />,
      children: [
        {
          label: "Total trip",
          key: "totalTrip",
        },
        {
          label: "Shifting",
          key: "shifting",
        },
        {
          label: "Holyday",
          key: "holyday",
        },
        {
          label: "Salary status",
          key: "salaryStatus",
        },
      ],
    },

    {
      label: <Link href={`/${role}/inventoryRequest`}>Inventory Request</Link>,
      icon: <ShopOutlined />,
      key: `/${role}/inventoryRequest`,
    },
  ];

  //............default.......................
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Overview",
      icon: <TableOutlined />,
      key: `/${role}/overview`,
    },
    {
      label: "Report",
      key: "report",
      icon: <DesktopOutlined />,
      children: [
        {
          label: "Income Report",
          key: "incomeReport",
        },
        {
          label: "Expenditure Report",
          key: "expenditureReport",
        },
        {
          label: "Fuel Report",
          key: "fuelReport",
        },
      ],
    },
    {
      label: "Settings",
      key: "settings",
      icon: <DesktopOutlined />,
      children: [
        {
          label: "Logout",
          key: "logout",
        },
        {
          label: "Profile",
          key: "profile",
        },
      ],
    },
  ];

  //.............Super admin.......................
  const superAdminSidebarItems: MenuProps["items"] = [
    ...managerSidebarItems,
    ...driverSidebarItems,
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/roleManage`}>Role Manage</Link>,
      icon: <TableOutlined />,
      key: `/${role}/roleManage`,
    },
    {
      label: <Link href={`/${role}/viewProfile`}>View Profile</Link>,
      icon: <TableOutlined />,
      key: `/${role}/viewProfile`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.MANAGER) return managerSidebarItems;
  else if (role === USER_ROLE.DRIVER) return driverSidebarItems;
  else {
    defaultSidebarItems;
  }
};
