"use client";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Popconfirm, message } from "antd";
import UpdateVehecleForm from "../Forms/UpdateVehicleForm";
import ModalBox from "../ModalBox/ModalBox";
///import Pagination from "../ui/Pagination";
import ViewItem from "../ui/ViewItem";
import { Icons } from "@/assets/Icons/Icons";
import { Pagination } from "antd";
import React, { useState, useEffect } from "react";
import type { PaginationProps } from "antd";
import {
  useDeleteVehicleMutation,
  useVehicleAllQuery,
} from "@/redux/api/vehecleApi";
import { tripCostFields } from "./StaticTableData";
import {
  useDeleteTripCostMutation,
  useGetAllTripCostQuery,
} from "@/redux/api/tripCostApi";
import ViewTripCost from "../ui/ViewTripCost";
import LoadingPage from "../ui/LoadingPage";
import UpdateTripCostForm from "../Forms/UpdateTripCostForm";

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

  const confirm = async (e: any) => {
    console.log("🚀 ~ confirm ~ e:", e);
    const res = await deleteTripCost(e);
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

  const { data: tripCost, isLoading } = useGetAllTripCostQuery(current);

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
                    tripCost?.data?.meta?.total | 0
                  } data`}
                />
              </div>
            </div>
          </div>

          {/* table start */}
          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl">
              <tr className="">
                {(tripCostFields ?? []).map((tripCostField) => (
                  <th
                    key={tripCostField?.id}
                    className=" px-2 py-3 text-left text-black"
                  >
                    {tripCostField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {((tripCost as any)?.data?.data ?? []).map(
                (tripCost: any, index: number) => (
                  <tr
                    key={tripCost?.id}
                    className={`${index % 2 === 0 ? "" : "bg-gray-50"}  `}
                  >
                    <td className="px-2 py-3">{tripCost?.passengerName}</td>

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
                          <ViewTripCost
                            viewID={tripCost?.id}
                            ItemType="tripCost"
                          />
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

                        <Popconfirm
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
