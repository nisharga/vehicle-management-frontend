import TripListTable from "@/components/Table/TripListTable";

const page = () => {
  return (
    <div>
      <h3 className="mb-4 flex text-xl md:text-3xl text-secondary">
        Trip List
      </h3>
      <TripListTable />
    </div>
  );
};

export default page;
