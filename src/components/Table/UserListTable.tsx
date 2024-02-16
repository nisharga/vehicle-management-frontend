"use client";
import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import ModalBox from "../ModalBox/ModalBox";
import Pagination from "../ui/Pagination";
import { DriverListTableFields, vehicleDriversList } from "./StaticTableData";

import AddUser from "@/app/(withlayout)/manager/user/AddUser";
import { Button, message, Popconfirm } from "antd";
import UpdateDriverForm from "../Forms/UpdateDriverForm";
import ViewItem from "../ui/ViewItem";

const UserListTable = () => {
  const confirm = (e: any) => {
    console.log(e);
    message.success(`${e} Deleted Sucessfully`);
  };

  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error("Click on No");
  };
  return (
    <>
      {/* table start */}
      <div className="overflow-x-auto rounded-lg">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white   px-8 pt-3 rounded-bl-lg rounded-br-lg py-10">
          <div className="pb-3 flex justify-between">
            <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-10 bg-transparent">
              <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                <div className="flex">
                  <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2   text-grey-dark text-sm">
                    <svg
                      width="18"
                      height="18"
                      className="w-4 lg:w-auto"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                        stroke="#455A64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.9993 16.9993L13.1328 13.1328"
                        stroke="#455A64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <input
                  type="text"
                  className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs text-gray-500 font-thin"
                  placeholder={`Search Through ${DriverListTableFields?.length} Driver`}
                />
              </div>
            </div>

            <ModalBox btnLabel="Add User">
              <AddUser />
            </ModalBox>
          </div>

          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl">
              <tr className="">
                {DriverListTableFields?.map((DriverListTableField) => (
                  <th
                    key={DriverListTableField?.id}
                    className=" px-2 py-3 text-left text-black"
                  >
                    {DriverListTableField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="">
              {vehicleDriversList?.map((vehicleDriver, index) => (
                <tr
                  key={vehicleDriver?.email}
                  className={`${index % 2 === 0 ? "" : "bg-gray-50"}  `}
                >
                  <td className="px-2">
                    <Image
                      className="rounded-full"
                      width={30}
                      src={vehicleDriver?.avatar}
                      alt="..."
                    />
                  </td>
                  <td className=" px-2 py-3 -space-y-1">
                    <p className="text-sm font-bold">{vehicleDriver?.name}</p>
                    <p className="text-[8] text-textColor italic">
                      {vehicleDriver?.email}
                    </p>
                  </td>

                  <td className="px-2 py-3 text-sm leading-5">
                    {vehicleDriver?.phone}
                  </td>
                  <td className="px-2 py-3 text-sm leading-5">
                    {vehicleDriver?.joinDate}
                  </td>
                  <td className="px-2 py-3 text-sm leading-5">
                    {vehicleDriver?.experience}
                  </td>
                  <td className="px-2 py-3 text-sm leading-5">
                    {vehicleDriver?.nidNumber}
                  </td>
                  <td className="px-2 py-3 text-sm leading-5">
                    <Button
                      style={{
                        backgroundColor: "#00334E",
                        color: "#eee",
                      }}
                      icon={<DownloadOutlined />}
                    >
                      {vehicleDriver?.document}
                    </Button>
                  </td>

                  <td className="px-2 py-3 text-sm leading-5">
                    <div className="flex gap-x-1">
                      <ModalBox
                        btnLabel={
                          <span className="item justify-center items-center">
                            <EyeOutlined />
                          </span>
                        }
                      >
                        <ViewItem viewID={vehicleDriver?.name} />
                      </ModalBox>

                      <ModalBox
                        btnLabel={
                          <span className="item justify-center items-center">
                            {" "}
                            <EditOutlined />
                          </span>
                        }
                      >
                        <UpdateDriverForm driverData={vehicleDriver} />
                      </ModalBox>

                      <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => confirm(vehicleDriver?.name)}
                        onCancel={() => cancel}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button danger>
                          <span className="item justify-center items-center">
                            {" "}
                            <DeleteOutlined />{" "}
                          </span>
                        </Button>
                      </Popconfirm>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center my-4  mx-auto">
            <Pagination />
          </div>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default UserListTable;
