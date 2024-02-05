"use client";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { DriverListTableFields, vehicleDriversList } from "./StaticTableData";
import Pagination from "../ui/Pagination";
import ModalBox from "../ModalBox/ModalBox";

import ViewItem from "../ui/ViewItem";
import { Button, message, Popconfirm } from 'antd';
import UpdateDriverForm from "../Forms/UpdateDriverForm";

const DriverListTable = () => {
  const confirm = (e: any) => {
    console.log(e);
    message.success(`${e} Deleted Sucessfully`);
  };
  
  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error('Click on No');
  };
  return (
    <div>
      {/* table start */}
      <div className="overflow-x-auto rounded-lg">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <div className="flex justify-center border-b pb-3">
            <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
              <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                <div className="flex">
                  <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2   text-grey-dark text-sm">
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
                  placeholder={`Search Through ${DriverListTableFields?.length} Driver`}
                />
              </div>
            </div>
          </div>

          <table className="min-w-full">
            <thead>
              <tr>
                {DriverListTableFields?.map((DriverListTableField) => (
                  <th
                    key={DriverListTableField?.id}
                    className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider"
                  >
                    {DriverListTableField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white">
              {vehicleDriversList?.map((vehicleDriver) => (
                <tr key={vehicleDriver?.email}>
                  <td className=" px-2 py-1 border-b border-gray-500">
                    <div className="flex items-center">
                      <div className="">
                        <Image
                          className="rounded-full"
                          width={50}
                          src={vehicleDriver?.avatar}
                          alt="..."
                        />
                      </div>
                    </div>
                  </td>
                  <td className=" px-2 py-1   border-b border-gray-500">
                    <div className="text-sm leading-5 text-blue-900">
                      {vehicleDriver?.name}
                    </div>
                  </td>
                  <td className=" px-2 py-1   border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {vehicleDriver?.email}
                  </td>
                  <td className=" px-2 py-1   border-b text-blue-900 border-gray-500 text-sm leading-5">
                    {vehicleDriver?.phone}
                  </td>
                  <td className=" px-2 py-1 text-center  border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span className="relative text-xs">
                        {vehicleDriver?.experience}
                      </span>
                    </span>
                  </td>

                  <td className=" px-2 py-1 text-center border-b border-gray-500 text-blue-900 text-sm leading-5">
                    {vehicleDriver?.joinDate}
                  </td>
                  <td className=" px-2 py-1 text-center border-b border-gray-500 text-blue-900 text-sm leading-5">
                    {vehicleDriver?.rating}
                  </td>
             

                  <td className=" px-2 py-1   text-right border-b border-gray-500 text-sm leading-5">
                    <div className="flex gap-x-1">
                    <ModalBox 
                      btnLabel={ <span className="item justify-center items-center"> <EyeOutlined /> </span> }   
                       > 
                        <ViewItem viewID={vehicleDriver?.name} />
                      </ModalBox>  

                      <ModalBox btnLabel={ <span className="item justify-center items-center"> <EditOutlined /> </span> }> 
                        <UpdateDriverForm updateID={vehicleDriver?.name} />
                      </ModalBox>  
                      
                  <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    onConfirm={() => confirm(vehicleDriver?.name)}
                    onCancel={() => cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button danger >
                      <span className="item justify-center items-center"> <DeleteOutlined /> </span>
                    </Button>
                  </Popconfirm>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center my-4  mx-auto">
            <Pagination/>
          </div>
        </div>
        {/* table end */}
      </div>
    </div>
  );
};

export default DriverListTable;
