"use client";
import React, { useState } from "react";
import { Button, Dropdown, Image, Menu, Modal, Pagination, PaginationProps } from "antd";
import CommonButton from "../ui/CommonButton";
import { useDeleteAccessoryMutation, useGetAccessoryAllQuery } from "@/redux/api/accessoryApi";
import AddAccessory from "@/app/(withlayout)/manager/accessories/AddAccessory";
import ModalBox from "../ModalBox/ModalBox";
import UpdateAccessory from "../Forms/UpdateAccessory";
import { EditOutlined } from "@ant-design/icons";
import UpdateVehecleForm from "../Forms/UpdateVehicleForm";

const accessoriesTableFields = [
  {
    id: 0,
    fields: "Image",
  },
  {
    id: 1,
    fields: "Product Name",
  },
  {
    id: 2,
    fields: "Quantity",
  },
  {
    id: 4,
    fields: "Purchase Date",
  },
  {
    id: 3,
    fields: "Expiration Date",
  },
  {
    id: 5,
    fields: "Price",
  },
  {
    id: 6,
    fields: "Action",
  },
];

const AccessoriesTable = () => {
  const [current, setCurrent] = useState(1);
  const [updateID, setUpdateID] = useState(null);
  const { data: accessory, isLoading, error, refetch } = useGetAccessoryAllQuery(
    current
  );

  const [deleteAccessory]= useDeleteAccessoryMutation()
  const accessoryData = accessory?.data?.data;

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page); 
  };
    const handleDelete =  (id: any) => {
      // console.log(accessoryId)
      Modal.confirm({
        title: 'Confirm Delete',
        content: 'Are you sure you want to delete this accessory?',
        okText: 'Delete',
        okType: 'danger',
        cancelText: 'Cancel',
        onOk: async () => {
        await deleteAccessory(id)
            .then(() => {
              Modal.success({
                title: 'Accessory Deleted',
                content: 'The accessory has been successfully deleted.',
              });
              // Refetch data
              refetch();
            })
            .catch((error:any) => {
              // Error message
              Modal.error({
                title: 'Delete Failed',
                okType: 'danger',
                cancelText: 'Cancel',
                content: 'An error occurred while deleting the accessory. Please try again later.',
              });
              console.error('Delete error:', error);
            });
        },
      });
    };

  const items = (accessoryId: any) => (
    <Menu>
      <Menu.Item key="1" >
      <ModalBox  btnLabel="Update">
              <UpdateAccessory updateID={accessoryId} />
            </ModalBox>
      </Menu.Item>
      <Menu.Item key="2" onClick={() => handleDelete(accessoryId)}>
        <Button danger type="text">Delete</Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="overflow-x-auto rounded-lg">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg py-10">
          <p className="my-3 text-xl uppercase font-serif">
            Vehicle Accessories
          </p>

          {/* search bar */}
          <div className="flex justify-between border-b pb-3">
            <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-10 bg-transparent">
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
                  placeholder={`Search Through ${
                    accessoryData?.length ?? "0"
                  } Vehicle`}
                />
              </div>
            </div>
            <ModalBox btnLabel="Add Accessories">
              <AddAccessory />
            </ModalBox>
          </div>

          <br />
          <table className="min-w-full ">
            <thead className="bg-gray-50 rounded-2xl">
              <tr className="">
                {accessoriesTableFields?.map((OfficeCostTableField) => (
                  <th
                    key={OfficeCostTableField?.id}
                    className=" px-2 py-3 text-left text-black"
                  >
                    {OfficeCostTableField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="bg-white">
              {accessoryData?.map((accessories: any, index: any) => {
                const dummyImg =
                  "https://img.freepik.com/free-vector/car-wheel-realistic_1284-4977.jpg?w=740&t=st=1707802295~exp=1707802895~hmac=b5f07472817317de3b3460a5b32b3e681dd1d2b5f888354dc68ac47ab97ccf92";
                  const accessoryId = accessories?.id;
                return (
                  <tr
                    key={accessories?.ID}
                    className={`${index % 2 === 0 ? "" : "bg-gray-50"}  `}
                  >
                    <td className=" px-2 py-1">
                      <Image
                        className="rounded-lg"
                        width={50}
                        src={!accessories?.image ? dummyImg : ""}
                        alt="..."
                      />
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {accessories?.accessory_name}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {accessories?.quantity}
                    </td>
                    <td className=" px-2 py-3 text-sm leading-5">
                      {accessories?.purchase_date?.slice(0, 10)}
                    </td>
                    <td className=" px-2 py-3 text-sm leading-5">
                      {accessories?.expire_date?.slice(0, 10)}
                    </td>
                    <td className=" px-2 py-3 text-sm leading-5">
                      {accessories?.amount}
                    </td>
                    <td className=" px-2 py-3 text-sm leading-5">
                      <Dropdown  overlay={() => items(accessoryId)} placement="bottomRight" arrow>
                        <Button>
                          Action
                        </Button>
                      </Dropdown>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-center items-center py-8">
            <Pagination current={current} onChange={onChange} total={accessoryData?.meta?.total | 30} />
          </div>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default AccessoriesTable;
