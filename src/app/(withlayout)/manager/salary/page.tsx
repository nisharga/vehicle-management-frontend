import ModalBox from "@/components/ModalBox/ModalBox";
import SalaryTable from "@/components/Table/SalaryTable";
import AddDriverSalary from "./AddDriverSalary";

const salaryPage = () => {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="mb-4 flex justify-center text-xl md:text-3xl text-secondary">
          Trip Cost
        </h3>
        <ModalBox btnLabel="Add Salary">
          <AddDriverSalary />
        </ModalBox>
      </div>
      <SalaryTable />
    </>
  );
};

export default salaryPage;
