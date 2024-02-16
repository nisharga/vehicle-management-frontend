import InventoryRequestListTable from "@/components/Table/InventoryRequestTable";
import InventoryListTable from "@/components/Table/InventoryRequestTable";

const page = () => {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="mb-4 flex justify-center text-xl md:text-3xl text-secondary">
          Inventory Request
        </h3>
      </div>
      {/* <InventoryListTable /> */}
      <InventoryRequestListTable />
    </>
  );
};

export default page;
