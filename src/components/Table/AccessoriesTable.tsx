"use client";
import AddAccessory from "@/app/(withlayout)/manager/accessories/AddAccessory";
import {
  useDeleteAccessoryMutation,
  useGetAccessoryAllQuery,
} from "@/redux/api/accessoryApi";
import { SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Dropdown,
  Image,
  Input,
  Menu,
  Modal,
  Pagination,
  PaginationProps,
} from "antd";
import { useState } from "react";
import UpdateAccessory from "../Forms/UpdateAccessory";
import ModalBox from "../ModalBox/ModalBox";
import Heading from "../ui/Heading";

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
  const {
    data: accessory,
    isLoading,
    error,
    refetch,
  } = useGetAccessoryAllQuery(current);

  const [deleteAccessory] = useDeleteAccessoryMutation();
  const accessoryData = accessory?.data?.data;

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
  };
  const handleDelete = (id: any) => {
    // console.log(accessoryId)
    Modal.confirm({
      title: "Confirm Delete",
      content: "Are you sure you want to delete this accessory?",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk: async () => {
        await deleteAccessory(id)
          .then(() => {
            Modal.success({
              title: "Accessory Deleted",
              content: "The accessory has been successfully deleted.",
            });
            // Refetch data
            refetch();
          })
          .catch((error: any) => {
            // Error message
            Modal.error({
              title: "Delete Failed",
              okType: "danger",
              cancelText: "Cancel",
              content:
                "An error occurred while deleting the accessory. Please try again later.",
            });
            console.error("Delete error:", error);
          });
      },
    });
  };

  const items = (accessoryId: any) => (
    <Menu>
      <Menu.Item key="1">
        <ModalBox btnLabel="Update">
          <UpdateAccessory updateID={accessoryId} />
        </ModalBox>
      </Menu.Item>
      <Menu.Item key="2" onClick={() => handleDelete(accessoryId)}>
        <Button danger type="text">
          Delete
        </Button>
      </Menu.Item>
    </Menu>
  );

  //searching code
  const [searchTerm, setSearchTerm] = useState("");
  const dummyImg =
    "https://img.freepik.com/free-vector/car-wheel-realistic_1284-4977.jpg?w=740&t=st=1707802295~exp=1707802895~hmac=b5f07472817317de3b3460a5b32b3e681dd1d2b5f888354dc68ac47ab97ccf92";
  return (
    <>
      <Heading>
        <p>Vehicle Accessories</p>
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
                placeholder={`Search by Trip Id / Passenger Name of total ${accessoryData?.length} Trips`}
                prefix={<SearchOutlined />}
                onChange={(event) => {
                  setSearchTerm(event?.target?.value);
                }}
              />
            </div>

            <ModalBox btnLabel="Add Accessories">
              <AddAccessory />
            </ModalBox>
          </div>
          {/* table start */}
          <table className="min-w-full border-b">
            <thead className="bg-gray-50 rounded-2xl">
              <tr className="dark:bg-[#145374]">
                {accessoriesTableFields?.map((OfficeCostTableField) => (
                  <th
                    key={OfficeCostTableField?.id}
                    className="px-2 py-3 text-left text-black dark:text-[#E8E8E8]"
                  >
                    {OfficeCostTableField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="dark:text-[#E8E8E8]">
              {accessoryData
                ?.filter((V: any) => {
                  if (searchTerm == "") {
                    return V;
                  } else if (
                    V?.accessory_name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return V;
                  }
                })
                ?.map((accessories: any, index: any) => {
                  const accessoryId = accessories?.id;
                  return (
                    <tr
                      key={accessories?.ID}
                      className={`${
                        index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                      }  `}
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
                      <td className=" px-2 py-3 text-sm leading-5 ">
                        <Dropdown
                          overlay={() => items(accessoryId)}
                          placement="bottomRight"
                          arrow
                        >
                          <Button>Action</Button>
                        </Dropdown>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

          <div className="flex justify-center items-center py-2">
            <Pagination
              current={current}
              onChange={onChange}
              total={accessoryData?.meta?.total | 30}
            />
          </div>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default AccessoriesTable;
