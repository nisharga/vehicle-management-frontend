import ModalBox from "./../../../../components/ModalBox/ModalBox";
import TripCostTable from "@/components/Table/TripCostTable";
import AddTripCost from "./AddTripCost";

const tripCost = () => {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="mb-4 flex justify-center text-xl md:text-3xl text-secondary">
          Trip Cost
        </h3>
        <ModalBox btnLabel="Add Trip Cost">
          <AddTripCost />
        </ModalBox>
      </div>
      <TripCostTable />
    </>
  );
};

export default tripCost;
