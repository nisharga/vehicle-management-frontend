import {
  AppstoreAddOutlined,
  AreaChartOutlined,
  CarOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  ExperimentOutlined,
  FileZipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  SafetyOutlined,
  ScheduleOutlined,
  ShopOutlined,
  SubnodeOutlined,
  TruckOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import { USER_ROLE } from "./role";

export const sidebarItems = (role: string) => {
  const privacyPolicySidebarItem: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/privacy`}>Privacy Policy</Link>,
      icon: <SafetyOutlined />,
      key: `/privacy`,
    },
  ];
  const faqSidebarItem: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/faq`}>FAQ</Link>,
      icon: <QuestionCircleOutlined />,
      key: `/${role}/faq`,
    },
  ];

  const contactSidebarItem: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/contact`}>Contact</Link>,
      icon: <PhoneOutlined />,
      key: `/${role}/contact`,
    },
  ];

  const profileSidebarItem: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/profile`}>Profile</Link>,
      icon: <UserOutlined />,
      key: `/${role}/profile`,
    },
  ];

  const overviewSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/overview`}>Overview</Link>,
      icon: <AreaChartOutlined />,
      key: `/${role}/overview`,
    },
  ];

  //.............Manager.......................
  const managerSidebarItems: MenuProps["items"] = [
    ...overviewSidebarItems,
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
      label: <Link href={`/${role}/user`}>User</Link>,
      icon: <CarOutlined />,
      key: `/${role}/user`,
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
      label: <Link href={`/${role}/inventory`}>Inventory</Link>,
      icon: <ShopOutlined />,
      key: `/${role}/inventory`,
    },

    {
      label: "Expenses",
      key: "expenses",
      icon: <DollarOutlined />,
      children: [
        {
          label: <Link href={`/${role}/trip-cost`}>Trip-Cost</Link>,
          key: "Trip Cost",
        },
        {
          label: <Link href={`/${role}/salary`}>Salary</Link>,
          key: "Salary",
        },
        {
          label: <Link href={`/${role}/office-cost`}>Office-Cost</Link>,
          key: "Office Cost",
        },
        {
          label: <Link href={`/${role}/accessories`}>Accessories</Link>,
          key: "Accessories",
        },
      ],
    },

    {
      label: <Link href={`/${role}/manageRequest`}>Manage Request</Link>,
      icon: <SubnodeOutlined />,
      key: `/${role}/manageRequest`,
    },
    {
      label: <Link href={`/${role}/report`}>Report</Link>,
      icon: <FileZipOutlined />,
      key: `/${role}/report`,
    },
    ...contactSidebarItem,
    ...privacyPolicySidebarItem,
    ...faqSidebarItem,
    ...profileSidebarItem,
  ];

  //.........Driver........................
  const driverSidebarItems: MenuProps["items"] = [
    ...overviewSidebarItems,

    {
      label: "Trip Schedule",
      key: "tripSchedule",
      icon: <ScheduleOutlined />,
      children: [
        {
          label: <Link href={`/${role}/upComingTrip`}>Upcoming Trip</Link>,
          key: "upComingTrip",
        },
        {
          label: <Link href={`/${role}/tripHistory`}>Trip History</Link>,
          key: "tripHistory",
        },
      ],
    },
    {
      label: <Link href={`/${role}/inventoryRequest`}>Inventory Request</Link>,
      icon: <ShopOutlined />,
      key: `/${role}/inventoryRequest`,
    },
    ...contactSidebarItem,
    ...faqSidebarItem,
    ...privacyPolicySidebarItem,
  ];

  //.............Super admin.......................
  const superAdminSidebarItems: MenuProps["items"] = [
    ...overviewSidebarItems,
    {
      label: <Link href={`/${role}/roleManage`}>Role Manage</Link>,
      icon: <AppstoreAddOutlined />,
      key: `/${role}/roleManage`,
    },

    ...contactSidebarItem,
    ...privacyPolicySidebarItem,
    ...faqSidebarItem,
    ...profileSidebarItem,
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.MANAGER) return managerSidebarItems;
  else if (role === USER_ROLE.DRIVER) return driverSidebarItems;
  else {
    privacyPolicySidebarItem;
  }
};
