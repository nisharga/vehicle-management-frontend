import { useGetSingleTripCostQuery } from "@/redux/api/tripCostApi";
import { useGetSingleVehicleQuery } from "@/redux/api/vehecleApi";
import { formatDateToRegularDate } from "@/utils/formateDate";
import { Timeline } from "antd";

const ViewTripCost = ({ tripCost }: any, ItemType: string) => {
  // console.log(tripCostId, "tripCostId");
  // const { data: tripCost } = useGetSingleTripCostQuery(tripCostId);
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
              children: `Trip holder Name: ${tripCost?.passengerName}`,
            },
            {
              children: `Phone: ${tripCost?.phone}`,
            },
            {
              children: `Trip Period: ${tripCost?.trip_period}`,
            },
            {
              children: `Toll Cost: ${tripCost?.tollCost}`,
            },
            {
              children: `Parking Cost: ${tripCost?.parkingCost}`,
            },
            {
              children: `Start Location: ${tripCost?.startLocation}`,
            },
            {
              children: `Description: ${tripCost?.description}`,
            },
          ]}
        />
      }
    </>
  );
};

export default ViewTripCost;
