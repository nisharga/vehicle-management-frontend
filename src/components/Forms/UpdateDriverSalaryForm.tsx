import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import {
  useGetSingleDriverSalaryQuery,
  useUpdateDriverSalaryMutation,
} from "@/redux/api/driverSalaryApi";
import {
  useGetSingleTripCostQuery,
  useUpdateTripCostMutation,
} from "@/redux/api/tripCostApi";
import { Button, message } from "antd";
import { SubmitHandler } from "react-hook-form";
import FormSelectField from "../ReusableForms/FormSelectField";

const UpdateDriverSalaryForm = ({ updateID }: any) => {
  const { data: driverSalary } = useGetSingleDriverSalaryQuery(updateID);
  const [updateDriverSalary] = useUpdateDriverSalaryMutation();

  const defaultValues = {
    amount: driverSalary?.data?.amount,
    month: driverSalary?.data?.month,
    position: driverSalary?.data?.position,
    status: driverSalary?.data?.status,
  };

  const onSubmit = async (data: any) => {
    const res = await updateDriverSalary({ id: updateID, data });
  };

  return (
    <>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <div className="mb-4">
            <FormInput
              name="amount"
              type="number"
              size="large"
              placeholder="Enter Salary Amount"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="month"
              type="text"
              size="large"
              placeholder="Enter Salary Month"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="position"
              type="text"
              size="large"
              placeholder="Enter Driver Position"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="startLocation"
              type="text"
              size="large"
              placeholder="Enter Start Location"
            />
          </div>

          <div className="mb-4">
            <FormSelectField
              name="status"
              size="large"
              placeholder="Enter Driver Status"
              options={[
                { label: "PENDING", value: "PENDING" },
                { label: "PROCESSING", value: "PROCESSING" },
                { label: "DONE", value: "DONE" },
              ]}
            />
          </div>

          <Button
            htmlType="submit"
            className="uppercase text-md rounded-lg bg-brand hover:bg-gray-200 hover:text-secondary"
          >
            Update Driver Salary
          </Button>
        </Form>
      </div>
    </>
  );
};

export default UpdateDriverSalaryForm;
