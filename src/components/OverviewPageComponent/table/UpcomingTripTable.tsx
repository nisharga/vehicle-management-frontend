"use client";

import Heading from "@/components/ui/Heading";

const UpcomingTripTable = () => {
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
      id: 4,
      fields: "Start-Location",
    },
    {
      id: 8,
      fields: "End-Location",
    },
    {
      id: 3,
      fields: "Trip Period",
    },
  ];

  const trips = [
    {
      tripId: "12345",
      passengerName: "Omar faruq",
      passengerPhone: "789456123",
      startLocation: "123 Main St",
      endLocation: "456 Elm St",
      tripPeriod: "5",
      startTime: "2024-02-04T08:00:00",
    },
    {
      tripId: "12345",
      passengerName: "Omar Faruq",
      passengerPhone: "789456123",
      startLocation: "123 Main St",
      endLocation: "456 Elm St",
      tripPeriod: "5",
      startTime: "2024-02-04T08:00:00",
    },
    {
      tripId: "67890",
      passengerName: "Alice Smith",
      passengerPhone: "123456789",
      startLocation: "789 Oak St",
      endLocation: "321 Pine St",
      tripPeriod: "7",
      startTime: "2024-02-05T10:00:00",
    },
    {
      tripId: "13579",
      passengerName: "Bob Johnson",
      passengerPhone: "987654321",
      startLocation: "456 Elm St",
      endLocation: "789 Oak St",
      tripPeriod: "3",
      startTime: "2024-02-06T12:00:00",
    },
    {
      tripId: "24680",
      passengerName: "Emily Johnson",
      passengerPhone: "321654987",
      startLocation: "321 Pine St",
      endLocation: "123 Main St",
      tripPeriod: "4",
      startTime: "2024-02-07T14:00:00",
    },
    {
      tripId: "11223",
      passengerName: "Sophia Williams",
      passengerPhone: "456789123",
      startLocation: "789 Oak St",
      endLocation: "456 Elm St",
      tripPeriod: "6",
      startTime: "2024-02-08T16:00:00",
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
              {(trips ?? [])?.map((trips, index) => (
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
