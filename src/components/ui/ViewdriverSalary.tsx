import { useGetSingleDriverSalaryQuery } from "@/redux/api/driverSalaryApi";
import { Timeline } from "antd";

const ViewDriverSalary = ({ driverSalaryId }: any, ItemType: string) => {
  console.log(driverSalaryId, "tripCostId");
  const { data: driverSalary } = useGetSingleDriverSalaryQuery(driverSalaryId);
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
              children: `Name: ${driverSalary?.data?.passengerName}`,
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
