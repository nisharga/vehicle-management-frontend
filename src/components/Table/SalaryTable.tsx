"use client";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Popconfirm, message } from "antd";
import ModalBox from "../ModalBox/ModalBox";
import { Icons } from "@/assets/Icons/Icons";
import { Pagination } from "antd";
import React, { useState } from "react";
import type { PaginationProps } from "antd";
import {
  useDeleteDriverSalaryMutation,
  useGetAllDriverSalaryQuery,
} from "@/redux/api/driverSalaryApi";
import { driverSalaryFields } from "./StaticTableData";
import ViewDriverSalary from "../ui/ViewdriverSalary";
import UpdateDriverSalaryForm from "../Forms/UpdateDriverSalaryForm";

const SalaryTable = () => {
  const [deleteDriverSalary] = useDeleteDriverSalaryMutation();

  const confirm = async (e: any) => {
    console.log("🚀 ~ confirm ~ e:", e);
    const res = await deleteDriverSalary(e);
    console.log("🚀 ~ confirm ~ res:", res);
    // message.success(`${e} Deleted Sucessfully`);
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

  const { data: driverSalary, isLoading } = useGetAllDriverSalaryQuery(current);
  console.log("driver salary", driverSalary);

  return (
    <>
      <div className="overflow-x-auto rounded-lg">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg py-10">
          {/* search bar */}
          <div className="flex justify-start pb-3">
            <div className="inline-flex border rounded w-7/12  h-10 bg-transparent">
              <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                <div className="flex bg-slate-400">
                  <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm ">
                    <Icons.SearchIcon />
                  </span>
                </div>
                <input
                  type="text"
                  className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs text-gray-500 font-thin"
                  placeholder={`Search Through ${
                    driverSalary?.data?.meta?.total | 0
                  } data`}
                />
              </div>
            </div>
          </div>

          {/* table start */}
          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl">
              <tr className="">
                {(driverSalaryFields ?? []).map((driverSalaryField) => (
                  <th
                    key={driverSalaryField?.id}
                    className=" px-2 py-3 text-left text-black"
                  >
                    {driverSalaryField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {((driverSalary as any)?.data?.data ?? []).map(
                (driverSalary: any, index: number) => (
                  <tr
                    key={driverSalary?.id}
                    className={`${index % 2 === 0 ? "" : "bg-gray-50"}  `}
                  >
                    <td className="px-2 py-3 text-sm leading-5">
                      {driverSalary?.driver?.name}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {driverSalary?.amount}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {driverSalary?.month}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {driverSalary?.position}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {driverSalary?.status}
                    </td>

                    <td className="px- py-3 text-sm leading-5">
                      <div className="flex gap-x-1 ">
                        <ModalBox
                          title="View Details"
                          modalWidth={300}
                          btnLabel={
                            <span className="item justify-center items-center">
                              <EyeOutlined />
                            </span>
                          }
                        >
                          <ViewDriverSalary
                            viewID={driverSalary?.id}
                            ItemType="driverSalary"
                          />
                        </ModalBox>

                        <ModalBox
                          title="Edit driverSalary Data"
                          btnLabel={
                            <span className="item justify-center items-center">
                              <EditOutlined />
                            </span>
                          }
                        >
                          <UpdateDriverSalaryForm updateID={driverSalary?.id} />
                        </ModalBox>

                        <Popconfirm
                          title="Delete the task"
                          description="Are you sure to delete this task?"
                          onConfirm={() => confirm(driverSalary?.id)}
                          onCancel={() => cancel}
                          cancelText="No"
                          okText="Delete"
                          okType="danger"
                        >
                          <Button danger>
                            <span className="item justify-center items-center">
                              <DeleteOutlined />
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
              total={driverSalary?.data?.meta?.total | 30}
            />
          </div>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default SalaryTable;
