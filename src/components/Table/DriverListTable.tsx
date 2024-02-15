"use client";
import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Image, PaginationProps } from "antd";
import ModalBox from "../ModalBox/ModalBox";

import { DriverListTableFields, vehicleDriversList } from "./StaticTableData";

import AddDriver from "@/app/(withlayout)/manager/driver/AddDriver";
import { Button, message, Popconfirm, Pagination } from "antd";
import UpdateDriverForm from "../Forms/UpdateDriverForm"; 
import { useDeleteVehicleMutation } from "@/redux/api/vehecleApi";
import { useDeleteDriverMutation, useGetAllDriverQuery } from "@/redux/api/driverApi";
import { useState } from "react";
import ViewItemDriver from "../ui/ViewItemDriver";


interface IProps {
address? : string;
avatar? : string;
createAt? : string;
email? : string;
experience? : string;
id? : string;
license_no? : string;
name? : string;
nid? : string;
password? : string;
phone? : string;
role? : string;
user_id? : string;
}

const DriverListTable = () => {
  const [deleteDriver] = useDeleteDriverMutation();

  const confirm = async (e: any) => {
    const res = await deleteDriver(e);  
      console.log("🚀 ~ confirm ~ res:", res)
      message.success(`Deleted Sucessfully`); 
  };

  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error("Click on No");
  };

  const [current, setCurrent] = useState(1);
  const [vehicleData, setVehicleData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
  };

  const { data: driver } = useGetAllDriverQuery(current);
  
   
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

            <ModalBox btnLabel="Add Driver">
              <AddDriver />
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
      {
        ((driver as any)?.data ?? []).map((drivers: IProps, index: number) => (
              <tr
                  key={drivers?.id}
                  className={`${index % 2 === 0 ? "" : "bg-gray-50"}  `}
                >
                  <td className="px-2">
                    <Image
                      className="rounded-full"
                      width={30}
                      src={drivers?.avatar}
                      alt="..."
                    />
                  </td>
                  <td className=" px-2 py-3 -space-y-1">
                    <p className="text-sm font-bold">{drivers?.name}</p>
                    <p className="text-[8] text-textColor italic">
                      {drivers?.email}
                    </p>
                  </td>

                  <td className="px-2 py-3 text-sm leading-5">
                    {drivers?.phone}
                  </td>
                  <td className="px-2 py-3 text-sm leading-5">
                    {drivers?.license_no}
                  </td>
                  <td className="px-2 py-3 text-sm leading-5">
                    {drivers?.experience}
                  </td>
                  <td className="px-2 py-3 text-sm leading-5">
                    {drivers?.nid}
                  </td>
                  
                  {/* 
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
                  </td> */}

                  <td className="px-2 py-3 text-sm leading-5">
                    <div className="flex gap-x-1">
                      <ModalBox
                        btnLabel={
                          <span className="item justify-center items-center">
                            <EyeOutlined />
                          </span>
                        }
                      >
                        <ViewItemDriver viewID={drivers?.id} ItemType="driver"/>
                      </ModalBox>

                      <ModalBox
                        btnLabel={
                          <span className="item justify-center items-center">
                            {" "}
                            <EditOutlined />
                          </span>
                        }
                      >
                        <UpdateDriverForm driverData={drivers} />
                      </ModalBox>

                      <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => confirm(drivers?.id)}
                        onCancel={() => cancel}
                        okText="Delete"
                          okType="danger"
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
          )
      )}        
            </tbody>
          </table>

          <div className="flex justify-center items-center py-8">
            <Pagination
              current={current}
              onChange={onChange}
              total={driver?.data?.meta?.total | 30}
            />
          </div>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default DriverListTable;
