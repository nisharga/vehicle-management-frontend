import InventoryRequestForm from "@/components/Forms/InventoryRequestForm";
import Heading from "@/components/ui/Heading";

const inventoryRequestPage = () => {
  return (
    <>
      <Heading>
        <p>Inventory Request</p>
      </Heading>
      <InventoryRequestForm />
    </>
  );
};

export default inventoryRequestPage;
