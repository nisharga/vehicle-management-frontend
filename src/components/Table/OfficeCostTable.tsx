

"use client";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, Pagination, PaginationProps, Popconfirm, message } from "antd";
import ModalBox from "../ModalBox/ModalBox";


import {
  useDeleteOfficeCostMutation,
  useGetAllOfficeCostQuery,
} from "@/redux/api/officeCostApi";
import { useState } from "react";
import Heading from "../ui/Heading";
import AddOfficeCost from "@/app/(withlayout)/manager/office-cost/AddOfficeCost";
import { officeCostFields } from "./StaticTableData";
import ViewOfficeCost from "../ui/ViewOfficeCost";
import UpdateOfficeCostForm from "../Forms/UpdateOfficeCostForm";

const OfficeCostTable = () => {
  const [deleteOfficeCost] = useDeleteOfficeCostMutation();

  const confirm = async (e: any) => {
    console.log("🚀 ~ confirm ~ e:", e);
    const res = await deleteOfficeCost(e);
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

  const { data: officeCostData, isLoading } = useGetAllOfficeCostQuery(current);
  console.log("officecsot data",officeCostData)
  //searching code
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Heading>
        <p>Office Cost</p>
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
                placeholder={`Search by Cost title of total ${officeCostData?.data?.data?.length} Trips`}
                prefix={<SearchOutlined />}
                onChange={(event) => {
                  setSearchTerm(event?.target?.value);
                }}
              />
            </div>

            <ModalBox btnLabel="Add Office Cost">
              <AddOfficeCost />
            </ModalBox>
          </div>

          {/* table start */}
          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl border-b">
              <tr className="dark:bg-[#145374]">
                {(officeCostFields ?? [])?.map((officeCostField) => (
                  <th
                    key={officeCostField?.id}
                    className=" px-2 py-3 text-left text-black dark:text-[#E8E8E8]"
                  >
                    {officeCostField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="dark:text-[#E8E8E8]">
              {((officeCostData as any)?.data?.data ?? [])
                ?.filter((V: any) => {
                  if (searchTerm == "") {
                    return V;
                  } else if (
                    V?.cost_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return V;
                  }
                })
                ?.map((officeCost: any, index: number) => (
                  <tr
                    key={officeCost?.id}
                    className={`${
                      index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                    }  `}
                  >
                    <td className="px-2 py-3 text-sm leading-5">
                      {officeCost?.cost_name}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {officeCost?.amount}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {officeCost?.createdAt}
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
                          <ViewOfficeCost officeCostData={officeCost} />
                        </ModalBox>

                        <ModalBox
                          title="Edit officeCost Data"
                          btnLabel={
                            <span className="item justify-center items-center">
                              <EditOutlined />
                            </span>
                          }
                        >
                          <UpdateOfficeCostForm officeCostData={officeCost} />
                        </ModalBox>

                        <Popconfirm
                          title="Delete the task"
                          description="Are you sure to delete this task?"
                          onConfirm={() => confirm(officeCost?.id)}
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
              total={officeCostData?.data?.meta?.total | 30}
            />
          </div>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default OfficeCostTable;
