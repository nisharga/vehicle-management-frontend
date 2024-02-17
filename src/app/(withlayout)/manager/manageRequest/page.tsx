import ManageRequestTable from "@/components/Table/ManageRequestTable";
import Heading from "@/components/ui/Heading";

const page = () => {
  return (
    <>
      <Heading>
        <p>Manage Request</p>
      </Heading>
      <ManageRequestTable />
    </>
  );
};

export default page;
