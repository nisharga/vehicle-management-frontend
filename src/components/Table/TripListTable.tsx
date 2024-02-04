"use client";
import { Button, Popconfirm, message } from "antd";
import UpdateTripForm from "../Forms/UpdateTripForm";
import ModalBox from "../ModalBox/ModalBox";
import { tripFields, trips } from "./StaticTableData";
import { EditOutlined } from '@ant-design/icons';
import { DeleteOutlined } from '@ant-design/icons';
import Pagination from "../ui/Pagination";

const TripListTable = () => {  
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
                    placeholder={`Search Through ${trips?.length} Vehicle`}
                  />
                </div>
              </div>
            </div>
  
            <table className="min-w-full text-center">
              <thead>
                <tr className="">
                  {
                  (tripFields ?? []).map((vehiclesField) => (
                    <th
                      key={vehiclesField?.id}
                      className="px-6 py-3 text-center border-b-2 border-gray-300 leading-4 text-blue-500 tracking-wider"
                    >
                      {vehiclesField?.fields}
                    </th>
                  ))}
                </tr>
              </thead>
  
              <tbody className="bg-white">
                {
                (trips ?? []).map((trips) => (
                  <tr key={trips?.startTime}>
                    <td className="px-2 py-2  border-b border-gray-500">
                      <div className="flex items-center justify-center">
                        <div>
                          <div className="text-sm leading-5 text-gray-800">
                            {trips?.startLocation}
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    <td className=" px-2  py-2  border-b text-blue-900 border-gray-500 text-sm leading-5">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative text-xs">
                          {trips?.endLocation}
                        </span>
                      </span>
                    </td>
  
                    <td className=" px-2  py-2  border-b border-gray-500 text-blue-900 text-sm leading-5">
                      {trips?.startTime}
                    </td>
  
                    <td className=" px-2  py-2  border-b border-gray-500 text-blue-900 text-sm leading-5">
                      {trips?.possibleEndTime}
                    </td>
  
                    <td className=" px-2  py-2  border-b border-gray-500 text-blue-900 text-sm leading-5">
                      {trips?.passengerCount}
                    </td>
  
                    <td className=" px-2  py-2  border-b border-gray-500 text-blue-900 text-sm leading-5">
                      {trips?.driver}
                    </td>
                    
                    <td className=" px-2  py-2  border-b border-gray-500 text-blue-900 text-sm leading-5">
                      {trips?.vehicleType}
                    </td>
  
                    <td className=" px-2 py-2 text-right border-b border-gray-500 text-sm leading-5">
                      <div className="flex gap-x-1 justify-center">
                        
                        <ModalBox btnLabel={ <span className="item justify-center items-center"> <EditOutlined /> </span> }> 
                          <UpdateTripForm updateID={trips?.startLocation} />
                        </ModalBox>  
                        
                    <Popconfirm
                      title="Delete the task"
                      description="Are you sure to delete this task?"
                      onConfirm={() => confirm(trips?.startLocation)}
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
            <div className="flex justify-center my-4 mx-auto">
              <Pagination />
            </div>
          </div>
          {/* table end */}
        </div>
      </div>
    );
  };
  
  export default TripListTable;