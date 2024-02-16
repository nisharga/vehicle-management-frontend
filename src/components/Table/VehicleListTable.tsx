"use client";
import AddVehicle from "@/app/(withlayout)/manager/vehicle/AddVehicle";
import {
  useDeleteVehicleMutation,
  useVehicleAllQuery,
} from "@/redux/api/vehecleApi";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import type { PaginationProps } from "antd";
import { Button, Input, Pagination, Popconfirm, message } from "antd";
import React, { useState } from "react";
import UpdateVehecleForm from "../Forms/UpdateVehicleForm";
import ModalBox from "../ModalBox/ModalBox";
import Heading from "../ui/Heading";
import ViewItem from "../ui/ViewItem";
import { vehiclesFields } from "./StaticTableData";

interface IProps {
  id: string;
  registrationNo: string;
  model: string;
  seatCapacity: string;
  tax: string;
  brand: string;
  fuelType: string;
}

const VehicleListTable = (e: any) => {
  const [deleteVehicle] = useDeleteVehicleMutation();

  const confirm = async (e: any) => {
    const res = await deleteVehicle(e);
    message.success(`Deleted Sucessfully`);
  };

  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error("Click on No");
  };

  const [current, setCurrent] = useState(1);

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
  };

  const { data: vehicle } = useVehicleAllQuery(current);
  //searching code
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Heading>
        <p>Vehicle</p>
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
                placeholder={`Search by Reg.Id`}
                prefix={<SearchOutlined />}
                onChange={(event) => {
                  setSearchTerm(event?.target?.value);
                }}
              />
            </div>

            <ModalBox btnLabel="Add Vehicle">
              <AddVehicle />
            </ModalBox>
          </div>

          {/* table start */}
          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl border-b">
              <tr className="dark:bg-[#145374]">
                {(vehiclesFields ?? [])?.map((vehiclesField) => (
                  <th
                    key={vehiclesField?.id}
                    className="px-2 py-3 text-left text-black dark:text-[#E8E8E8]"
                  >
                    {vehiclesField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="dark:text-[#E8E8E8]">
              {((vehicle as any)?.data?.data ?? [])
                ?.filter((V: any) => {
                  if (searchTerm == "") {
                    return V;
                  } else if (
                    V?.registrationNo
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    V?.model.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return V;
                  }
                })
                ?.map((vehicle: IProps, index: number) => (
                  <tr
                    key={vehicle?.id}
                    className={`${
                      index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                    }  `}
                  >
                    <td className="px-2 py-3 text-sm leading-5">
                      {vehicle?.registrationNo}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {vehicle?.model}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {vehicle?.seatCapacity}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {vehicle?.tax}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {vehicle?.brand}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {vehicle?.fuelType}
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
                          <ViewItem viewID={vehicle?.id} ItemType="vehicle" />
                        </ModalBox>

                        <ModalBox
                          title="Edit Vehicle Data"
                          btnLabel={
                            <span className="item justify-center items-center">
                              <EditOutlined />
                            </span>
                          }
                        >
                          <UpdateVehecleForm vehicleData={vehicle} />
                        </ModalBox>

                        <Popconfirm
                          title="Delete the task"
                          description="Are you sure to delete this task?"
                          onConfirm={() => confirm(vehicle?.id)}
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
              total={vehicle?.data?.meta?.total | 30}
            />
          </div>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default VehicleListTable;
