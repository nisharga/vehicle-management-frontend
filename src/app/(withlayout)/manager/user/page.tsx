import ModalBox from "@/components/ModalBox/ModalBox";

// import AddDriver from "./AddDriver";
import UserListTable from "@/components/Table/UserListTable";

const page = () => {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="mb-4 flex justify-center text-xl md:text-3xl text-secondary">
          User List
        </h3>
        
      </div>
      <UserListTable />
    </>
  );
};

export default page;
