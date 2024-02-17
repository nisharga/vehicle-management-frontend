"use client";

import Heading from "@/components/ui/Heading";
import { FC } from "react";
import {formatDateToRegularDate} from "../../../utils/formateDate"
import { useTripDetailsAllQuery } from "@/redux/api/tripApi";
// interface IProps {
//   driver: {
//     address: string;
//     avatar: string;
//     email: string;
//     experience: string;
//     license_no: string;
//     // Add any other properties if available
//   };
//   driver_id: string;
//   endLocation: string;
//   id: string;
//   passengerCount: number;
//   passengerName: string;
//   passengerPhone: string;
//   startLocation: string;
//   startTime: string;
//   status: string;
//   tripCosts: any[]; // Change any[] to the correct type if available
//   tripPeriod: string;
//   tripRent: number;
//   vehicle: {
//     id: string;
//     fuelType: string;
//     mileage: number;
//     price: number;
//     purchaseDate: string;
//     // Add any other properties if available
//   };
//   vehicle_id: string;
// }


const UpcomingTripTable = () => {
  const { data: trip } = useTripDetailsAllQuery({}); 

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
      fields: "Start-Location",
    },
    {
      id: 4,
      fields: "End-Location",
    },
    {
      id: 5,
      fields: "tripPeriod",
    },
    {
      id: 6,
      fields: "Date",
    },
    {
      id: 7,
      fields: "Status",
    },
  ];

  
  return (
    <>
      <Heading>
        <p>Upcoming Trip </p>
      </Heading>
      <div className="overflow-x-auto rounded-tl-xl rounded-tr-xl">
        <div
          className="align-middle inline-block min-w-full shadow 
          overflow-hidden bg-white dark:bg-[#00334E]   "
        >
          <table className="min-w-full">
            <thead className="bg-gray-50 rounded-2xl border-b">
              <tr className="dark:bg-[#145374]">
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
              {(trip?.data?.data ?? [])?.map((trips: any, index: number) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "" : "bg-gray-50 dark:bg-[#145374]"
                  }  `}
                >
                  <td className="px-2 py-3 text-sm leading-5">
                    {index + 1}
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
                  
                  <td className=" px-2 py-3 text-sm leading-5">
                    {formatDateToRegularDate(trips?.startTime)}
                  </td>
                  <td className=" px-2 py-3 text-sm leading-5">
                    {trips?.status}
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
