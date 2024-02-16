"use client";
import CreateTrip from "@/app/(withlayout)/manager/trip/CreateTrip";
import { useDeleteTripMutation, useTripAllQuery } from "@/redux/api/tripApi";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Pagination, PaginationProps, Popconfirm, message } from "antd";
import { useState } from "react";
import UpdateTripForm from "../Forms/UpdateTripForm";
import ModalBox from "../ModalBox/ModalBox";
import Heading from "../ui/Heading";
import { tripFields } from "./StaticTableData";

const TripListTable = () => {
  const [tripDelete] = useDeleteTripMutation();

  const confirm = async (e: any) => {
    const deleteTrip = await tripDelete(e);
    console.log("🚀 ~ confirm ~ delete:", deleteTrip);
    message.success(`${e} Deleted Sucessfully`);
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

  const { data: trip } = useTripAllQuery(current);
 
  return (
    <>
      <Heading>Trip List</Heading>
      {/* table start */}
      <div className="overflow-x-auto rounded-lg">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white   px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <div className="pb-3 flex justify-between">
            <div className="border rounded w-7/12 px-2 lg:px-6 h-10 bg-transparent">
              <div className="flex  items-stretch w-full h-full mb-6 relative">
                <div className="">
                  <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
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
                  placeholder={`Search Through ${trip?.data?.meta?.total} Vehicle`}
                />
              </div>
            </div>

            <ModalBox btnLabel="Create New Trip">
              <CreateTrip />
            </ModalBox>
          </div>

          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl">
              <tr className="">
                {(tripFields ?? []).map((vehiclesField) => (
                  <th
                    key={vehiclesField?.id}
                    className=" px-2 py-3 text-left text-black"
                  >
                    {vehiclesField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="">
              {(trip?.data?.data ?? []).map((trips: any, index: number) => (
                <tr
                  key={trips?.id}
                  className={`${index % 2 === 0 ? "" : "bg-gray-50"}  `}
                >
                  <td className="px-2 py-3 text-sm leading-5">{trips?.id}</td>

                  <td className="px-2 py-3 text-sm leading-5">
                    {trips?.passengerName}
                  </td>

                  <td className="px-2 py-3 text-sm leading-5">
                    {trips?.passengerPhone}
                  </td>

                  <td className=" px-2 py-3 text-sm leading-5">
                    {trips?.startLocation}
                  </td>

                  <td className=" px-2 py-3 text-sm leading-5">
                    {trips?.endLocation}
                  </td>

                  <td className=" px-2 py-3 text-sm leading-5">
                    {trips?.tripPeriod}
                  </td>

                  <td className="px-2 py-3 text-sm leading-5">
                    <span
                      className={`${
                        trips?.status ? "bg-red-300" : "bg-green-300"
                      } inline-flex px-2 py-1 leading-none text-primary rounded-lg`}
                    >
                      {trips?.status ? "Pending" : "Done"}
                    </span>
                  </td>

                  <td className="px-2 py-3 text-sm leading-5">
                    <div className="flex gap-x-1 justify-center">
                      <ModalBox
                        btnLabel={
                          <span className="item justify-center items-center">
                            <EditOutlined />
                          </span>
                        }
                      >
                        <UpdateTripForm updateID={trips?.startLocation} />
                      </ModalBox>

                      <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => confirm(trips?.id)}
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
              ))}
            </tbody>
          </table>
          <div className="flex justify-center items-center py-8">
            <Pagination
              current={current}
              onChange={onChange}
              total={trip?.data?.meta?.total | 15}
            />
          </div>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default TripListTable;
