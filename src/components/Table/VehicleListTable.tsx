"use client";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Popconfirm, message } from "antd";
import UpdateVehecleForm from "../Forms/UpdateVehicleForm";
import ModalBox from "../ModalBox/ModalBox";
import Pagination from "../ui/Pagination";
import ViewItem from "../ui/ViewItem";
import { vehicles, vehiclesFields } from "./StaticTableData";

const VehicleListTable = () => {
  const confirm = (e: any) => {
    console.log(e);
    message.success(`${e} Deleted Sucessfully`);
  };

  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error("Click on No");
  };
  return (
    <>
      <div className="overflow-x-auto rounded-lg">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-whit shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg py-10">
          {/* search bar */}
          <div className="flex justify-start pb-3">
            <div className="inline-flex border rounded w-7/12  h-10 bg-transparent">
              <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                <div className="flex bg-slate-400">
                  <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm ">
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
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.9993 16.9993L13.1328 13.1328"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <input
                  type="text"
                  className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs text-gray-500 font-thin"
                  placeholder={`Search Through ${vehicles?.length} Vehicle`}
                />
              </div>
            </div>
          </div>

          {/* table start */}
          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl">
              <tr className="">
                {(vehiclesFields ?? []).map((vehiclesField) => (
                  <th
                    key={vehiclesField?.id}
                    className=" px-2 py-3 text-left text-black"
                  >
                    {vehiclesField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {(vehicles ?? []).map((vehicle, index) => (
                <tr
                  key={vehicle?.registration_no}
                  className={`${index % 2 === 0 ? "" : "bg-gray-50"}  `}
                >
                  <td className="px-2 py-3">{vehicle?.registration_no}</td>

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
                        btnLabel={
                          <span className="item justify-center items-center">
                            <EyeOutlined />
                          </span>
                        }
                      >
                        <ViewItem viewID={vehicle?.registration_no} />
                      </ModalBox>

                      <ModalBox
                        title="Edit Vehicle Data"
                        btnLabel={
                          <span className="item justify-center items-center">
                            <EditOutlined />
                          </span>
                        }
                      >
                        <UpdateVehecleForm
                          updateID={vehicle?.registration_no}
                        />
                      </ModalBox>

                      <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => confirm(vehicle?.registration_no)}
                        onCancel={() => cancel}
                        okText="Yes"
                        cancelText="No"
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
          <div className="flex justify-center my-4 mx-auto">
            <Pagination />
          </div>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default VehicleListTable;
