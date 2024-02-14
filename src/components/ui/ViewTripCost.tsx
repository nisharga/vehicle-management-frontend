import { useGetSingleTripCostQuery } from "@/redux/api/tripCostApi";
import { useGetSingleVehicleQuery } from "@/redux/api/vehecleApi";
import { formatDateToRegularDate } from "@/utils/formateDate";
import { Timeline } from "antd";

const ViewTripCost = ({ tripCostId }: any, ItemType: string) => {
  console.log(tripCostId, "tripCostId");
  const { data: tripCost } = useGetSingleTripCostQuery(tripCostId);
  console.log("single trip cost", tripCost);
  // const purchaseDate = formatDateToRegularDate(vehicle?.data?.purchaseDate);
  // const registrationDate = formatDateToRegularDate(
  //   vehicle?.data?.registrationDate
  // );
  return (
    <>
      {/* <p className="text-gray-700 sm:col-span-2 underline">
        RegistrationNo: {vehicle?.data?.registrationNo}
      </p> */}
      <br />
      {
        <Timeline
          items={[
            {
              children: `PassengerName: ${tripCost?.data?.passengerName}`,
            },
            {
              children: `Phone: ${tripCost?.data?.phone}`,
            },
            {
              children: `Trip Period: ${tripCost?.data?.trip_period}`,
            },
            {
              children: `Toll Cost: ${tripCost?.data?.tollCost}`,
            },
            {
              children: `Parking Cost: ${tripCost?.data?.parkingCost}`,
            },
            {
              children: `Start Location: ${tripCost?.data?.startLocation}`,
            },
            {
              children: `Description: ${tripCost?.data?.description}`,
            },
          ]}
        />
      }
    </>
  );
};

export default ViewTripCost;
