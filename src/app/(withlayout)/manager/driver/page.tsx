import ModalBox from "@/components/ModalBox/ModalBox";
import DriverListTable from "@/components/Table/DriverListTable";
import AddDriver from "./AddDriver";

const page = () => {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="mb-4 flex justify-center text-xl md:text-3xl text-secondary">
          Driver List
        </h3>
        
      </div>
      <DriverListTable />
    </>
  );
};

export default page;
