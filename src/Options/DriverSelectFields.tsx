import { useGetAllDriverQuery } from "@/redux/api/driverApi";
import FormSelectField from "@/components/ReusableForms/FormSelectField";

type DriverFieldsProps = {
  name: string;
  label?: string;
};

const DriverSelectFields = ({ name,label }: DriverFieldsProps) => {
  const { data } = useGetAllDriverQuery(1);
  const driverData = data?.data;
  const driverDataOptions = driverData?.map((driver: any) => {
    //ts-ignore
    return {
      label: `${driver?.name}`,
      value: driver?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={driverDataOptions}
    />
  );
};

export default DriverSelectFields;
