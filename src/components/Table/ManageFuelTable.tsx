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
import { useEffect, useState } from "react";
import UpdateTripForm from "../Forms/UpdateTripForm";
import ModalBox from "../ModalBox/ModalBox";
import Heading from "../ui/Heading";
import { manageFuelFields, tripFields } from "./StaticTableData";
import { formatDateToRegularDate } from "@/utils/formateDate";
import { useGetManageFuelQuery } from "@/redux/api/manageFuelApi";
import AddManageFuel from "@/app/(withlayout)/manager/manageFuel/AddManageFuel";

const ManageFuelTable = () => {
  const [tripDelete] = useDeleteTripMutation();
  const [fuels, setFuels] = useState({
    data:[],
    meta:{
        limit:0,
        page:0,
        total:0
    }
  })

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
  const {data:manageFuels} = useGetManageFuelQuery(current)
   
  useEffect(() => {
    if (manageFuels != undefined) {
        setFuels(manageFuels.data)
    }
}, [manageFuels])

console.log(fuels,trip)
  //searching code
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Heading>
        <p>Manage Fuel</p>
      </Heading>
      {/* table start */}
      <div className="overflow-x-auto rounded-tl-xl rounded-tr-xl">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white dark:bg-[#00334E]">
          <div className="flex justify-between mx-2 my-2">
            <div className=" max-w-[80%]">
              <Input
                size="large"
                placeholder={`Search by Passenger Name of total ${manageFuels?.length} Trips`}
                prefix={<SearchOutlined />}
                onChange={(event) => {
                  setSearchTerm(event?.target?.value);
                }}
              />
            </div>
            <ModalBox btnLabel="Add Fuel">
              <AddManageFuel />
            </ModalBox>
          </div>

          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl border-b">
              <tr className="dark:bg-[#145374]">
                {(manageFuelFields ?? []).map((V) => (
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
              {(manageFuels?.data?.data ?? [])
                ?.filter((V: any) => {
                  if (searchTerm == "") {
                    return V;
                  } else if (
                    V?.amount
                      .includes(searchTerm) ||
                    V?.invoice_number
                      .includes(searchTerm)
                  ) {
                    return V;
                  }
                })
                ?.map((fuel: any, index: number) => (
                  <tr
                    key={fuel?.id}
                    className={`${
                      index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                    }  `}
                  >
                    <td className="px-2 py-3 text-sm leading-5">{fuel?.vehicle_id}</td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {fuel?.fuel_type}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {formatDateToRegularDate(fuel?.invoice_number)}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {fuel?.purchase_date}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {fuel?.amount}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {fuel?.ltr}
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
                          <UpdateTripForm updateID={fuel?.id} />
                        </ModalBox>

                        <Popconfirm
                          title="Delete the task"
                          description="Are you sure to delete this task?"
                          onConfirm={() => confirm(fuel?.id)}
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
              total={fuels?.meta?.total }
            />
          </div>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default ManageFuelTable;
