import VehicleListTable from "@/components/Table/VehicleListTable";
import ModalBox from './../../../../components/ModalBox/ModalBox';
import AddVehicle from "./AddVehicle";

const vehicle = () => {

  return (
    <>
      <div className="flex justify-between">
        <h3 className="mb-4 flex justify-center text-xl md:text-3xl text-secondary">
            Vehicle List
        </h3> 
        <ModalBox btnLabel="Add Vehecle" >
          <AddVehicle />
        </ModalBox>
      </div>
    <VehicleListTable />
    </>
  );
};

export default vehicle;
