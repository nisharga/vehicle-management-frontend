import { useGetSingleDriverSalaryQuery } from "@/redux/api/driverSalaryApi";
import { Timeline } from "antd";

const ViewDriverSalary = ({ viewID }: any, ItemType: string) => {
  console.log(viewID, "tripCostId");
  const { data: driverSalary } = useGetSingleDriverSalaryQuery(viewID);
  console.log("single trip cost", driverSalary);
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
              children: `Name: ${driverSalary?.data?.driver?.name}`,
            },
            {
              children: `Amount: ${driverSalary?.data?.amount}`,
            },
            {
              children: `Month: ${driverSalary?.data?.month}`,
            },
            {
              children: `Position: ${driverSalary?.data?.position}`,
            },
            {
              children: `Status: ${driverSalary?.data?.status}`,
            },
            {
              children: `Description: ${driverSalary?.data?.description}`,
            },
          ]}
        />
      }
    </>
  );
};

export default ViewDriverSalary;
