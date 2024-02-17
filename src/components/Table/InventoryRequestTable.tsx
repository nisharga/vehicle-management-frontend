"use client";
import { EditOutlined } from "@ant-design/icons";
import { PaginationProps } from "antd";
import ModalBox from "../ModalBox/ModalBox";

import { InventoryRequestListTableFields } from "./StaticTableData";

import MakeInventoryRequest from "@/app/(withlayout)/driver/inventoryRequest/MakeRequest";
import { useDeleteDriverMutation } from "@/redux/api/driverApi";
import { useGetAllRequestQuery } from "@/redux/api/inventoryRequestApi";
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import UpdateInventoryRequestForm from "../Forms/UpdateInvetoryRequestForm";
import Heading from "../ui/Heading";

interface IProps {
  address?: string;
  avatar?: string;
  createAt?: string;
  email?: string;
  experience?: string;
  id?: string;
  license_no?: string;
  name?: string;
  nid?: string;
  password?: string;
  phone?: string;
  role?: string;
  user_id?: string;
}

const InventoryRequestListTable = () => {
   
    const [inventoryRequest, setInventoryRequest] = useState([{
        title: ''
    }]);
    const [requests, setRequest] = useState({
        data:[],
        meta:{limit:0,page:0,total:0}
    })
    const [current, setCurrent] = useState(1);

    const onChange: PaginationProps["onChange"] = (page) => {
        
        setCurrent(page);
    };
 
  const [isFetching, setIsFetching] = useState(false);
  const [deleteDriver] = useDeleteDriverMutation();



  const { data: allRequest } = useGetAllRequestQuery(current);

  useEffect(() => {
    if (allRequest != undefined) {
      setInventoryRequest(allRequest.data);
      setRequest(allRequest.data);
    }
  }, [allRequest]);

  return (
    <>
      <Heading>
        <p>Inventory Request</p>
      </Heading>
      <div className="overflow-x-auto rounded-tl-xl rounded-tr-xl">
        <div
          className="align-middle inline-block min-w-full shadow 
          overflow-hidden bg-white dark:bg-[#00334E]"
        >
          <div className=" flex justify-end mx-2 my-2">
            <ModalBox btnLabel="Make Request">
              <MakeInventoryRequest />
            </ModalBox>
          </div>

          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl border-b">
              <tr className="dark:bg-[#145374]">
                {InventoryRequestListTableFields?.map(
                  (InventoryRequestListTableField) => (
                    <th
                      key={InventoryRequestListTableField?.id}
                      className="px-2 py-3 text-left text-black dark:text-[#E8E8E8]"
                    >
                      {InventoryRequestListTableField?.fields}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody className="dark:text-[#E8E8E8]">
              {((inventoryRequest as any)?.data ?? []).map(
                (inventory: any, index: number) => (
                  <tr
                    key={inventory?.id}
                    className={`${
                      index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                    }  `}
                  >
                    <td className="px-2 py-3 text-sm leading-5">{index + 1}</td>
                    <td className="px-2 py-3 text-sm leading-5">
                      <p className="text-sm font-bold">{inventory?.title}</p>
                    </td>
                    <td className="px-2 py-3 text-sm leading-5">
                      <p className="text-sm font-bold">
                        {inventory?.approve_status}
                      </p>
                    </td>
                    <td className="px-2 py-3 text-sm leading-5">
                      <div className="flex gap-x-1">
                        <ModalBox
                          btnLabel={
                            <span className="item justify-center items-center">
                              {" "}
                              <EditOutlined />
                            </span>
                          }
                        >
                          <UpdateInventoryRequestForm
                            inventoryRequestData={inventory}
                          />
                        </ModalBox>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <div className="flex justify-center items-center py-3 border-t">
            <Pagination
              current={current}
              onChange={onChange}
              total={requests?.meta?.total}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryRequestListTable;
