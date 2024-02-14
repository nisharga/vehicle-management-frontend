"use client";
import Heading from "@/components/ui/Heading";
import { SearchOutlined } from "@ant-design/icons";
import { Image, Input } from "antd";

import { message } from "antd";
import { useState } from "react";

const DriverList = () => {
  const confirm = (e: any) => {
    console.log(e);
    message.success(`${e} Deleted Sucessfully`);
  };

  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error("Click on No");
  };

  // data
  const vehicleDriversList = [
    {
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      avatar: "https://i.ibb.co/hFjP6S5/Screenshot-2020-12-14-114235.png",
      experience: 2,
      joinDate: "2022-01-01",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      avatar: "https://i.ibb.co/hFjP6S5/Screenshot-2020-12-14-114235.png",
      experience: 5,
      joinDate: "2021-12-15",
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "555-555-5555",
      avatar: "https://i.ibb.co/hFjP6S5/Screenshot-2020-12-14-114235.png",
      experience: 1,
      joinDate: "2023-03-10",
    },

    {
      name: "Bob Williams",
      email: "bob@example.com",
      phone: "111-222-3333",
      avatar: "https://i.ibb.co/hFjP6S5/Screenshot-2020-12-14-114235.png",
      experience: 3,
      joinDate: "2020-09-20",
    },
    {
      name: "Emily Brown",
      email: "emily@example.com",
      phone: "999-888-7777",
      avatar: "https://i.ibb.co/hFjP6S5/Screenshot-2020-12-14-114235.png",
      experience: 4,
      joinDate: "2023-07-05",
    },
  ];
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
              placeholder={`Search by Name / Email of total ${vehicleDriversList?.length} Trips`}
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
              {vehicleDriversList
                ?.filter((value) => {
                  if (searchTerm == "") {
                    return value;
                  } else if (
                    value?.name
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    value?.email
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return value;
                  }
                })
                ?.map((vehicleDriver, index) => (
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
                      {vehicleDriver?.joinDate}
                    </td>
                    <td className="px-2 py-1 text-sm leading-5">
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
