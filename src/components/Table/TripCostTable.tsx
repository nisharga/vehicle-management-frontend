"use client";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, Modal, Popconfirm, message } from "antd";
import ModalBox from "../ModalBox/ModalBox";
///import Pagination from "../ui/Pagination";
import AddTripCost from "@/app/(withlayout)/manager/trip-cost/AddTripCost";
import {
  useDeleteTripCostMutation,
  useGetAllTripCostQuery,
} from "@/redux/api/tripCostApi";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import React, { useState } from "react";
import UpdateTripCostForm from "../Forms/UpdateTripCostForm";
import Heading from "../ui/Heading";
import ViewTripCost from "../ui/ViewTripCost";
import { tripCostFields } from "./StaticTableData";

type TripCost = {
  id: string;
  passengerName: string;
  phone: string;
  trip_period: string;
  tollCost?: number | null;
  parkingCost?: number | null;
  startLocation: string;
  description?: string | null;
  trip_id: string;
  createdAt: Date;
  updatedAt: Date;
};

const TripCostTable = () => {
  const [deleteTripCost] = useDeleteTripCostMutation();

  const handleDelete = async (e: any) => {
    Modal.confirm({
      title: "Confirm Delete",
      content: "Are you sure you want to delete?",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        await deleteTripCost(e)
          .then(() => {
            Modal.success({
              title: "Trip cost Deleted",
              content: "The trip cost has been successfully deleted.",
            });
          })
          .catch((error: any) => {
            // Error message
            Modal.error({
              title: "Delete Failed",
              okType: "danger",
              cancelText: "Cancel",
              content:
                "An error occurred while deleting the trip cost. Please try again later.",
            });
            console.error("Delete error:", error);
          });
      },
    });
  };

  
  const [current, setCurrent] = useState(1);
  const [vehicleData, setVehicleData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
  };

  const { data: tripCost, isLoading } = useGetAllTripCostQuery(current);
  //searching code
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Heading>
        <p>Trip Cost</p>
      </Heading>
      <div className="overflow-x-auto rounded-tl-xl rounded-tr-xl">
        <div
          className="align-middle inline-block min-w-full shadow 
          overflow-hidden bg-white dark:bg-[#00334E]"
        >
          {/* search bar */}
          <div className="flex justify-between mx-2 my-2">
            <div className=" max-w-[80%]">
              <Input
                size="large"
                placeholder={`Search by trip Holder Name of total ${tripCost?.data?.data?.length} Trips`}
                prefix={<SearchOutlined />}
                onChange={(event) => {
                  setSearchTerm(event?.target?.value);
                }}
              />
            </div>

            <ModalBox btnLabel="Add Trip Cost">
              <AddTripCost />
            </ModalBox>
          </div>

          {/* table start */}
          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl border-b">
              <tr className="dark:bg-[#145374]">
                {(tripCostFields ?? [])?.map((tripCostField) => (
                  <th
                    key={tripCostField?.id}
                    className=" px-2 py-3 text-left text-black dark:text-[#E8E8E8]"
                  >
                    {tripCostField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="dark:text-[#E8E8E8]">
              {((tripCost as any)?.data?.data ?? [])
                ?.filter((V: any) => {
                  if (searchTerm == "") {
                    return V;
                  } else if (
                    V?.passengerName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    V?.phone.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return V;
                  }
                })
                ?.map((tripCost: any, index: number) => (
                  <tr
                    key={tripCost?.id}
                    className={`${
                      index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                    }  `}
                  >
                    <td className="px-2 py-3 text-sm leading-5">
                      {tripCost?.passengerName}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {tripCost?.phone}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {tripCost?.trip_period}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {tripCost?.tollCost}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {tripCost?.parkingCost}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {tripCost?.startLocation}
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
                          <ViewTripCost tripCost={tripCost} />
                        </ModalBox>

                        <ModalBox
                          title="Edit tripCost Data"
                          btnLabel={
                            <span className="item justify-center items-center">
                              <EditOutlined />
                            </span>
                          }
                        >
                          <UpdateTripCostForm updateID={tripCost?.id} />
                        </ModalBox>

                        {/* <Popconfirm
                          title="Delete the task"
                          description="Are you sure to delete this task?"
                          onConfirm={() => confirm(tripCost?.id)}
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
                        </Popconfirm> */}
                        <Button danger onClick={() => handleDelete(tripCost?.id)}>
                          <span className="item justify-center items-center">
                            <DeleteOutlined />
                          </span>
                        </Button>
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
              total={tripCost?.data?.meta?.total | 30}
            />
          </div>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default TripCostTable;
