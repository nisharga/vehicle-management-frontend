import InventoryListTable from "@/components/Table/InventoryTable";
import Heading from "@/components/ui/Heading";

const inventoryPage = () => {
  return (
    <>
     
    <Heading>
        <p>Inventory</p>
      </Heading>
    <InventoryListTable />
    </>
  );
};

export default inventoryPage;
