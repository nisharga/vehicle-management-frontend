import DriverListTable from "@/components/Table/DriverListTable";

const driverListPage = () => {
  return (
    <>
      <p className="text-xl flex justify-center mb-4 text-secondary">
        Driver List
      </p>
      <DriverListTable />
    </>
  );
};

export default driverListPage;
