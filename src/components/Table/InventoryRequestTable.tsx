"use client";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Image, PaginationProps } from "antd";
import ModalBox from "../ModalBox/ModalBox";

import { InventoryRequestListTableFields } from "./StaticTableData";

import MakeInventoryRequest from "@/app/(withlayout)/driver/inventoryRequest/MakeRequest";
import {
    useDeleteDriverMutation,
} from "@/redux/api/driverApi";
import { Button, Pagination, Popconfirm, message } from "antd";
import { useEffect, useState } from "react";
import { useGetAllRequestQuery } from "@/redux/api/inventoryRequestApi";
import UpdateInventoryRequestForm from "../Forms/UpdateInvetoryRequestForm";

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
    const [current, setCurrent] = useState(1);
    const [inventoryRequest, setInventoryRequest] = useState([{
        title: ''
    }]);
    const [requests, setRequest] = useState({
        data:[],
        meta:{limit:0,page:0,total:0}
    })
    const [isFetching, setIsFetching] = useState(false);
    const [deleteDriver] = useDeleteDriverMutation();


    const onChange: PaginationProps["onChange"] = (page) => {
        setCurrent(page);
    };

    const { data: allRequest } = useGetAllRequestQuery(current);

    useEffect(() => {
        if (allRequest != undefined) {
            setInventoryRequest(allRequest.data)
            setRequest(allRequest.data)
        }
    }, [allRequest])

    
    return (
        <>

            <div className="overflow-x-auto rounded-lg">
                <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white   px-8 pt-3 rounded-bl-lg rounded-br-lg py-10">
                    <div className="pb-3 flex justify-between">
                        <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-10 bg-transparent">
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
                                    placeholder={`Search Through ${InventoryRequestListTableFields?.length} Driver`}
                                />
                            </div>
                        </div>

                        <ModalBox btnLabel="Make Request">
                            <MakeInventoryRequest />
                        </ModalBox>
                    </div>

                    <table className="min-w-full">
                        <thead className="bg-gray-50 rounded-2xl">
                            <tr className="">
                                {InventoryRequestListTableFields?.map((InventoryRequestListTableField) => (
                                    <th
                                        key={InventoryRequestListTableField?.id}
                                        className=" px-2 py-3 text-left text-black"
                                    >
                                        {InventoryRequestListTableField?.fields}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody className="">
                            {((inventoryRequest as any)?.data ?? []).map(
                                (inventory: any, index: number) => (
                                    <tr
                                        key={inventory?.id}
                                        className={`${index % 2 === 0 ? "" : "bg-gray-50"} `}
                                    >
                                        <td className="px-2 py-3 -space-y-1 ">
                                            {index + 1}
                                        </td>
                                        <td className="px-2 py-3 -space-y-1 flex-auto">
                                            <p className="text-sm font-bold">{inventory?.title}</p>
                                        </td>
                                        <td className="px-2 py-3 -space-y-1 flex-auto">
                                            <p className="text-sm font-bold">{inventory?.approve_status}</p>
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
                                                    <UpdateInventoryRequestForm inventoryRequestData={inventory} />
                                                </ModalBox>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>

                    <div className="flex justify-center items-center py-8">
                        <Pagination
                            current={current}
                            onChange={onChange}
                            total={requests?.meta?.total }
                        />
                    </div>
                </div>

            </div>


        </>
    );
};

export default InventoryRequestListTable;
