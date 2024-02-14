// vehicle.jsx

import ModalBox from "@/components/ModalBox/ModalBox";
import VehicleListTable from "@/components/Table/VehicleListTable";
import AddVehicle from "./AddVehicle";

const Vehicle = () => {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="mb-4 flex justify-center text-xl md:text-3xl text-secondary">
          Vehicle
        </h3>
        <ModalBox btnLabel="Add Vehicle">
          <AddVehicle />
        </ModalBox>
      </div>
      <VehicleListTable /> {/* Ensure correct usage */}
    </>
  );
};

export default Vehicle;
