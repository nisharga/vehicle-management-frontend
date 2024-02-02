import VehicleListTable from "@/components/Table/VehicleListTable";

const vehicleListPage = () => {
  return (
    <>
      <p className="mb-4 flex justify-center text-xl text-secondary">
        Vehicle List
      </p>
      <VehicleListTable />
    </>
  );
};

export default vehicleListPage;
