"use client";
import { SearchOutlined } from "@ant-design/icons";
// import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, PaginationProps, Select, message } from "antd";
// import { Input, PaginationProps, Dropdown, Space, MenuProps } from "antd";

import {
  useAllUserQuery,
  useManageRoleMutation,
} from "@/redux/api/manageRoleApi";
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { ManageRoleListTableFields } from "./StaticTableData";

interface IProps {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  location?: string;
}

const ManageRoleTable = () => {
  const [manageRole] = useManageRoleMutation();
  const [current, setCurrent] = useState(1);
  
  const [availableUser, setAvailableUser] = useState({
    data: [],
    meta: { limit: 0, page: 0, total: 0 },
  });

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
  };

  const { data: users } = useAllUserQuery(current);

  useEffect(() => {
    if (users != undefined) {
      setAvailableUser(users.data);
    }
  }, [users]);

  const handleChange = async (value: string) => {
    const tempData = value.split("/");
    try {
      const res = await manageRole({ id: tempData[0], data: tempData[1] });
      if ((res as any)?.data?.statusCode === 200) {
        message.success("User role updated");
      }
    } catch (error: any) {
      message.error(error);
    }
  };

  //searching code
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      {/* table start */}
      <div className="overflow-x-auto rounded-tl-xl rounded-tr-x">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white dark:bg-[#00334E]">
          <div className="flex justify-between mx-2 my-2">
            <div className=" max-w-[80%]">
              <Input
                size="large"
                placeholder={`Search by Trip Id / Passenger Name of total ${users?.length} Trips`}
                prefix={<SearchOutlined />}
                onChange={(event) => {
                  setSearchTerm(event?.target?.value);
                }}
              />
            </div>
          </div>

          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl border-b">
              <tr className="dark:bg-[#145374]">
                {ManageRoleListTableFields?.map((ManageRoleListTableField) => (
                  <th
                    key={ManageRoleListTableField?.id}
                    className=" px-2 py-3 text-left text-black dark:text-[#E8E8E8]"
                  >
                    {ManageRoleListTableField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="dark:text-[#E8E8E8]">
              {((availableUser as any)?.data ?? [])?.map(
                (user: IProps, index: number) => (
                  <tr
                    key={user?.id}
                    className={`${
                      index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                    }  `}
                  >
                    <td className="px-2 py-3 text-sm leading-5">
                      <p className="text-sm font-bold">{user?.name}</p>
                      <p className="text-[8] text-textColor italic">
                        {user?.email}
                      </p>
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {user?.phone}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {/* <Select onChange={onChange}>
                                                <Select.Option value="sample">Sample</Select.Option>
                                            </Select> */}

                      <Select
                        defaultValue={user?.role}
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={[
                          { value: `${user?.id}/ADMIN`, label: "ADMIN" },
                          { value: `${user?.id}/USER`, label: "USER" },
                          { value: `${user?.id}/DRIVER`, label: "DRIVER" },
                          { value: `${user?.id}/MANAGER`, label: "MANAGER" },
                        ]}
                      />
                    </td>
                    <td className="px-2 py-3 text-sm leading-5">
                      {user?.location}
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
              total={availableUser?.meta?.total}
              // total={availableUser?.meta?.total | 30}
            />
          </div>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default ManageRoleTable;
