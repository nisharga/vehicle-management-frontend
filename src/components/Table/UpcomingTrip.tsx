"use client";
import { SearchOutlined } from "@ant-design/icons";
import { Input, message } from "antd";
import { useState } from "react";

import Heading from "../ui/Heading";
import { trips } from "./StaticTableData";

const UpcomingTripTable = () => {
  const confirm = (e: any) => {
    console.log(e);
    message.success(`${e} Deleted Sucessfully`);
  };

  const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error("Click on No");
  };
  //searching code
  const [searchTerm, setSearchTerm] = useState("");

  const tripFields = [
    {
      id: 0,
      fields: "TripId",
    },
    {
      id: 1,
      fields: "Passenger Name",
    },
    {
      id: 2,
      fields: "Passenger Phone",
    },
    {
      id: 3,
      fields: "Trip Period",
    },
    {
      id: 4,
      fields: "Start-Location",
    },
    {
      id: 8,
      fields: "End-Location",
    },
    {
      id: 10,
      fields: "Status",
    },
  ];

  return (
    <>
      <Heading>
        <p>Up-Cumming Trip</p>
      </Heading>
      {/* table start */}
      <div className="overflow-x-auto">
        <div
          className="align-middle inline-block min-w-full shadow 
          overflow-hidden bg-white dark:bg-[#00334E] rounded-tl-2xl rounded-tr-2xl"
        >
          <div className="mx-auto max-w-[55%] md:max-w-[42%] my-2">
            <Input
              size="large"
              placeholder={`Search by Trip Id / Passenger Name of total ${trips?.length} Trips`}
              prefix={<SearchOutlined />}
              onChange={(event) => {
                setSearchTerm(event?.target?.value);
              }}
            />
          </div>

          <table className="min-w-full">
            <thead className="bg-gray-50 ">
              <tr className="dark:bg-[#145374] border-b">
                {(tripFields ?? []).map((vehiclesField) => (
                  <th
                    key={vehiclesField?.id}
                    className=" px-2 py-3 text-left text-black dark:text-[#E8E8E8]"
                  >
                    {vehiclesField?.fields}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="dark:text-[#E8E8E8]">
              {(trips ?? [])
                ?.filter((value) => {
                  if (searchTerm == "") {
                    return value;
                  } else if (
                    value?.tripId
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    value?.passengerName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((trips, index) => (
                  <tr
                    key={trips?.startTime}
                    className={`${
                      index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                    }  `}
                  >
                    <td className="px-2 py-3 text-sm leading-5">
                      {trips?.tripId}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {trips?.passengerName}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      {trips?.passengerPhone}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {trips?.startLocation}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {trips?.endLocation}
                    </td>

                    <td className=" px-2 py-3 text-sm leading-5">
                      {trips?.tripPeriod}
                    </td>

                    <td className="px-2 py-3 text-sm leading-5">
                      <span
                        className={`${
                          trips?.status ? "bg-red-300" : "bg-green-300"
                        } inline-flex px-2 py-1 leading-none dark:text-[#00334E] rounded-lg`}
                      >
                        {trips?.status ? "Pending" : "Done"}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* table end */}
      </div>
    </>
  );
};

export default UpcomingTripTable;
