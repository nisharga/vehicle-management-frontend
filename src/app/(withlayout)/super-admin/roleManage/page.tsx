import ManageRoleTable from "@/components/Table/ManageRoleTable";
import Heading from "@/components/ui/Heading";

const roleManagePage = () => {
  return (
    <>
      <Heading>
        <p>Manage Role</p>
      </Heading>
      <ManageRoleTable />
    </>
  );
};

export default roleManagePage;
