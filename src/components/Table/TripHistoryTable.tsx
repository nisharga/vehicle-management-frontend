"use client";
import { SearchOutlined } from "@ant-design/icons";
import { Input, message } from "antd";
import { useEffect, useState } from "react";

import Heading from "../ui/Heading";
import { trips } from "./StaticTableData";
import { useTripAllQuery } from "@/redux/api/tripApi";

const TripHistoryTable = () => {
  const [current, setCurrent] = useState(1);
  const [allTrip, setAllTrip] = useState([{
    id:'',
    passengerName:'',
    passengerPhone:'',
    startLocation: "",
    tripPeriod:"",
    endLocation:"",
    status:''
  }])
  const { data:tripAll , isLoading } = useTripAllQuery(current);

  useEffect(()=>{
    if(tripAll != undefined){
      setAllTrip(tripAll.data.data)
    }
    
  },[tripAll])

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

  console.log(allTrip)
  return (
    <>
      <Heading>
        <p>Trip History</p>
      </Heading>
      {/* table start */}
      <div className="overflow-x-auto">
        <div
          className="align-middle inline-block min-w-full shadow 
        overflow-hidden bg-white dark:bg-[#00334E] rounded-tr-2xl rounded-tl-2xl"
        >
          <div className=" my-2 mx-auto max-w-[55%] md:max-w-[42%]">
            <Input
              size="large"
              placeholder={`Search by Trip Id / Passenger Name of total ${allTrip?.length} Trips`}
              prefix={<SearchOutlined />}
              onChange={(event) => {
                setSearchTerm(event?.target?.value);
              }}
            />
          </div>

          <table className="min-w-full">
            <thead className="bg-gray-50 border-b ">
              <tr className="dark:bg-[#145374]">
                {(tripFields ?? [])?.map((vehiclesField) => (
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
              {(allTrip ?? [])
                ?.filter((value) => {
                  if (searchTerm == "") {
                    return value;
                  } else if (
                    value?.id
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase()) ||
                    value?.passengerName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return value;
                  }
                })
                ?.map((trips, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                    }  `}
                  >
                    <td className="px-2 py-3 text-sm leading-5">
                      {trips?.id}
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
                          trips?.status === "UPCOMMING"? "bg-orange-300" : trips.status === 'COMPLETED' ? "bg-green-300" : "bg-red-300" 
                        } inline-flex px-2 py-1 leading-none dark:text-[#00334E] rounded-lg `}
                      >
                        {trips?.status }
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

export default TripHistoryTable;
