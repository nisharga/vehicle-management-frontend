"use client";
import Heading from "@/components/ui/Heading";
import { useGetAllDriverQuery } from "@/redux/api/driverApi";
import { SearchOutlined } from "@ant-design/icons";
import { Image, Input } from "antd";

// import dayjs from "dayjs";

import { message } from "antd";
import { useState } from "react";
import { formatDateToRegularDate } from "../../../utils/formateDate";

const DriverList = () => {
  const { data: driverList } = useGetAllDriverQuery(1);
  
  const confirm = (e: any) => {
    console.log(e);
    message.success(`${e} Deleted Sucessfully`);
  };

  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error("Click on No");
  };

  const { data } = useGetAllDriverQuery(1);
 

  const DriverListTableFields = [
    {
      id: 0,
      fields: "Photo",
    },
    {
      id: 1,
      fields: "Name",
    },
    {
      id: 2,
      fields: "Phone",
    },
    {
      id: 5,
      fields: "Join Date",
    },
    {
      id: 4,
      fields: "Experience",
    },
  ];
  //searching code
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Heading>
        <p>Driver List</p>
      </Heading>
      <div className="overflow-x-auto">
        <div
          className="align-middle inline-block min-w-full shadow 
          overflow-hidden bg-white dark:bg-[#00334E] rounded-tl-2xl rounded-tr-2xl"
        >
          <div className="mx-auto max-w-[55%] md:max-w-[42%] my-2">
            <Input
              size="small"
              placeholder={`Search by Name / Email`}
              prefix={<SearchOutlined />}
              onChange={(event) => {
                setSearchTerm(event?.target?.value);
              }}
            />
          </div>

          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl border-b">
              <tr className="dark:bg-[#145374]">
                {DriverListTableFields?.map((DriverListTableField) => (
                  <th
                    key={DriverListTableField?.id}
                    className=" px-2 py-3 text-left text-black dark:text-[#E8E8E8]"
                  >
                    {DriverListTableField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="dark:text-[#E8E8E8]">
              {
                driverList?.data?.map((vehicleDriver:any, index:number) => (
                  <tr
                    key={vehicleDriver?.email}
                    className={`${
                      index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                    }  `}
                  >
                    <td className="px-2 py-1 text-sm leading-5">
                      <Image
                        className="rounded-full"
                        width={25}
                        src={vehicleDriver?.avatar}
                        alt="..."
                      />
                    </td>
                    <td className="px-2 py-1 text-sm leading-5">
                      <p className="text-sm font-bold">{vehicleDriver?.name}</p>
                      <p className="text-[8] text-textColor italic">
                        {vehicleDriver?.email}
                      </p>
                    </td>

                    <td className="px-2 py-1 text-sm leading-5">
                      {vehicleDriver?.phone}
                    </td>
                    <td className="px-2 py-1 text-sm leading-5">
                      {formatDateToRegularDate(vehicleDriver?.createAt)}
                    </td>
                    <td className="px-2 py-1 text-sm leading-5 text-center">
                      {vehicleDriver?.experience}
                    </td>
                  </tr>
                ))}
            </tbody>
            
          </table>
        </div>
      </div>
    </>
  );
};

export default DriverList;
