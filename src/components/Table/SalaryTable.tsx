"use client";
import AddDriverSalary from "@/app/(withlayout)/manager/salary/AddDriverSalary";
import {
  useDeleteDriverSalaryMutation,
  useGetAllDriverSalaryQuery,
} from "@/redux/api/driverSalaryApi";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import type { PaginationProps } from "antd";
import { Button, Input, Pagination, Popconfirm, message } from "antd";
import React, { useState } from "react";
import UpdateDriverSalaryForm from "../Forms/UpdateDriverSalaryForm";
import ModalBox from "../ModalBox/ModalBox";
import Heading from "../ui/Heading";
import ViewDriverSalary from "../ui/ViewdriverSalary";
import { driverSalaryFields } from "./StaticTableData";

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
  //searching code
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Heading>
        <p>Salary</p>
      </Heading>
      <div className="overflow-x-auto rounded-tl-xl rounded-tr-xl">
        <div
          className="align-middle inline-block min-w-full shadow 
          overflow-hidden bg-white dark:bg-[#00334E]"
        >
          <div className="flex justify-between mx-2 my-2">
            <div className=" max-w-[80%]">
              <Input
                size="large"
                placeholder={`Search by Name / Position of total ${driverSalary?.data?.data?.length} Trips`}
                prefix={<SearchOutlined />}
                onChange={(event) => {
                  setSearchTerm(event?.target?.value);
                }}
              />
            </div>

            <ModalBox btnLabel="Add Salary">
              <AddDriverSalary />
            </ModalBox>
          </div>

          {/* table start */}
          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl border-b">
              <tr className="dark:bg-[#145374]">
                {(driverSalaryFields ?? [])?.map((driverSalaryField) => (
                  <th
                    key={driverSalaryField?.id}
                    className="px-2 py-3 text-left text-black dark:text-[#E8E8E8]"
                  >
                    {driverSalaryField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="dark:text-[#E8E8E8]">
              {((driverSalary as any)?.data?.data ?? [])
                ?.filter((V: any) => {
                  if (searchTerm == "") {
                    return V;
                  } else if (
                    V?.driver?.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    V?.position.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return V;
                  }
                })
                ?.map((driverSalary: any, index: number) => (
                  <tr
                    key={driverSalary?.id}
                    className={`${
                      index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                    }  `}
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
                ))}
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
