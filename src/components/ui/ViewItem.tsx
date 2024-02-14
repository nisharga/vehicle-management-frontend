import { useGetSingleVehicleQuery } from "@/redux/api/vehecleApi";
import { formatDateToRegularDate } from "@/utils/formateDate";
import { Timeline } from "antd";

const ViewItem = ({ viewID }: any, ItemType: string) => {
  const { data: vehicle } =  useGetSingleVehicleQuery(viewID);
  
  const purchaseDate = formatDateToRegularDate(vehicle?.data?.purchaseDate)
  const registrationDate = formatDateToRegularDate(vehicle?.data?.registrationDate)
  return (
    <>
      <p className="text-gray-700 sm:col-span-2 underline">
      RegistrationNo: {vehicle?.data?.registrationNo}
      </p>
      <br />
      {
        <Timeline
          items={[
            {
              children: `Brand: ${vehicle?.data?.brand}`,
            },
            {
              children: `Color: ${vehicle?.data?.color}`,
            }, 
            {
              children: `FuelType: ${vehicle?.data?.fuelType}`,
            }, 
            {
              children: `Mileage: ${vehicle?.data?.mileage}`,
            },
            {
              children: `Model: ${vehicle?.data?.model}`,
            },
            {
              children: `Price: ${vehicle?.data?.price}`,
            },
            { 
              children: `PurchaseDate: ${purchaseDate}`,
            },
            {
              children: `RegistrationDate: ${registrationDate}`,
            }, 
            {
              children: `SeatCapacity: ${vehicle?.data?.seatCapacity}`,
            },
            {
              children: `Tax: ${vehicle?.data?.tax}`,
            }, 
            {
              children: `VehicleType: ${vehicle?.data?.vehicleType}`,
            },
          ]}
        /> 
      }
    </>
  );
};

export default ViewItem;
