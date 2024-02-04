import {
  AppstoreAddOutlined,
  AreaChartOutlined,
  CarOutlined,
  ExperimentOutlined,
  EyeOutlined, 
  HistoryOutlined, 
  ReadOutlined,
  ScheduleOutlined,
  SettingOutlined,
  ShopOutlined,
  SolutionOutlined,  
  EnvironmentOutlined,
  TruckOutlined 
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItems = (role: string) => {
  //............default.......................
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/overview`}>Overview</Link>,
      icon: <AreaChartOutlined />,
      key: `/${role}/overview`,
    },
    {
      label: "Report",
      key: "report",
      icon: <ReadOutlined />,
      children: [
        {
          label: <Link href={`/${role}/fuelReport`}>Fuel Report</Link>,
          key: "fuelReport",
        },
        {
          label: (
            <Link href={`/${role}/expenditureReport`}>Expenditure Report</Link>
          ),
          key: "expenditureReport",
        },
        {
          label: <Link href={`/${role}/incomeReport`}>Income Report</Link>,
          key: "incomeReport",
        },
        {
          label: <Link href={`/${role}/tripReport`}>Trip Report</Link>,
          key: "tripReport",
        },
      ],
    },
    {
      label: "Settings",
      key: "settings",
      icon: <SettingOutlined />,
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

  //.............Manager.......................
  const managerSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
     
    {
      label: <Link href={`/${role}/vehicle`}>Vehicle</Link>,
      icon: <TruckOutlined />,
      key: `/${role}/vehicle`,
    }, 
    {
      label: <Link href={`/${role}/driver`}>Driver</Link>,
      icon: <CarOutlined />,
      key: `/${role}/driver`,
    },
    
    {
      label: <Link href={`/${role}/trip`}>Trip</Link>,
      icon: <EnvironmentOutlined />,
      key: `/${role}/trip`,
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
          label: <Link href={`/${role}/tools`}>Tools</Link>,
          key: "tools",
        },
        {
          label: <Link href={`/${role}/furniture`}>Furniture</Link>,
          key: "furniture",
        },
        {
          label: <Link href={`/${role}/vehicleWheels`}>Vehicle Wheels</Link>,
          key: "vehicleWheels",
        },
        {
          label: <Link href={`/${role}/others`}>Others</Link>,
          key: "others",
        },
      ],
    },
  ];

  //.........Driver........................
  const driverSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/tripHistory`}>Trip History</Link>,
      icon: <HistoryOutlined />,
      key: `/${role}/tripHistory`,
    },
    {
      label: "Trip Schedule",
      key: "tripSchedule",
      icon: <ScheduleOutlined />,
      children: [
        {
          label: <Link href={`/${role}/completeTrip`}>Complete Trip</Link>,
          key: "completeTrip",
        },
        {
          label: <Link href={`/${role}/upComingTrip`}>Up Coming Trip</Link>,
          key: "upComingTrip",
        },
        {
          label: <Link href={`/${role}/onGoingTrip`}>On-Going Trip</Link>,
          key: "onGoingTrip",
        },
      ],
    },

    {
      label: "Driver History",
      key: "driverHistory",
      icon: <SolutionOutlined />,
      children: [
        {
          label: <Link href={`/${role}/totalTrip`}>Total trip</Link>,
          key: "totalTrip",
        },
        {
          label: <Link href={`/${role}/shifting`}>Shifting</Link>,
          key: "shifting",
        },
        {
          label: <Link href={`/${role}/holyday`}>Holyday</Link>,
          key: "holyday",
        },
        {
          label: <Link href={`/${role}/salaryStatus`}>Salary Status</Link>,
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

  //.............Super admin.......................
  const superAdminSidebarItems: MenuProps["items"] = [
    // ...managerSidebarItems,
    // ...driverSidebarItems,
    // ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/roleManage`}>Role Manage</Link>,
      icon: <AppstoreAddOutlined />,
      key: `/${role}/roleManage`,
    },
    {
      label: <Link href={`/${role}/viewProfile`}>View Profile</Link>,
      icon: <EyeOutlined />,
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
