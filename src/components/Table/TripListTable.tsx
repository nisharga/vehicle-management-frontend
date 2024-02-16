"use client";
import CreateTrip from "@/app/(withlayout)/manager/trip/CreateTrip";
import { useDeleteTripMutation, useTripAllQuery } from "@/redux/api/tripApi";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  Input,
  Pagination,
  PaginationProps,
  Popconfirm,
  message,
} from "antd";
import { useState } from "react";
import UpdateTripForm from "../Forms/UpdateTripForm";
import ModalBox from "../ModalBox/ModalBox";
import Heading from "../ui/Heading";
import { tripFields } from "./StaticTableData";
import { formatDateToRegularDate } from "@/utils/formateDate";

const TripListTable = () => {
  const [tripDelete] = useDeleteTripMutation();

  const confirm = async (e: any) => {
    const deleteTrip = await tripDelete(e);
    console.log("🚀 ~ confirm ~ delete:", deleteTrip);
    message.success(`  Deleted Sucessfully`);
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
   
  //searching code
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Heading>Trip</Heading>
      {/* table start */}
      <div className="overflow-x-auto rounded-tl-xl rounded-tr-xl">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white dark:bg-[#00334E]">
          <div className="flex justify-between mx-2 my-2">
            <div className=" max-w-[80%]">
              <Input
                size="large"
                placeholder={`Search by Passenger Name of total ${trip?.length} Trips`}
                prefix={<SearchOutlined />}
                onChange={(event) => {
                  setSearchTerm(event?.target?.value);
                }}
              />
            </div>
            <ModalBox btnLabel="Create New Trip">
              <CreateTrip />
            </ModalBox>
          </div>

          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl border-b">
              <tr className="dark:bg-[#145374]">
                {(tripFields ?? []).map((V) => (
                  <th
                    key={V?.id}
                    className=" px-2 py-3 text-left text-black dark:text-[#E8E8E8]"
                  >
                    {V?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="dark:text-[#E8E8E8]">
              {(trip?.data?.data ?? [])
                ?.filter((V: any) => {
                  if (searchTerm == "") {
                    return V;
                  } else if (
                    V?.passengerName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    V?.passengerPhone
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return V;
                  }
                })
                ?.map((trips: any, index: number) => (
                  <tr
                    key={trips?.id}
                    className={`${
                      index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                    }  `}
                  >
                    <td className="px-2 py-3 text-sm leading-5">{trips?.startLocation}</td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {trips?.endLocation}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {formatDateToRegularDate(trips?.startTime)}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {trips?.passengerName}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {trips?.passengerCount}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {trips?.tripPeriod}
                    </td>
                    
                   
                    
                    <td className=" px-2 py-3 text-sm leading-5">
                      {trips?.tripRent}
                    </td>
                    
                    <td className=" px-2 py-3 text-sm leading-5">
                      {trips?.driver?.name}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {trips?.vehicle?.brand}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      <span
                        className={`${
                          trips?.status ? "bg-red-300" : "bg-green-300"
                        } inline-flex px-2 py-1 leading-none text-primary rounded-lg`}
                      >
                        {trips?.status ? trips?.status : "Pending"}
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
                          <UpdateTripForm updateID={trips?.id} />
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
