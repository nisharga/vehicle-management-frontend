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

  const onSubmit = async (data: any) => {
    const color = data?.color;
    const seatCapacity = Number(data?.seatCapacity);
    const model = data?.model;
    const tax = Number(data?.tax);
    const updatedData = { color, seatCapacity, model, tax };

    if (!data.color || !data.seatCapacity || !data.model || !data.tax) {
      message.error("Every field must be filled");
    } else {
      const res = await updateDriverSalary({ updateID, updatedData });
      console.log(res);
    }
  };

  return (
    <>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput
              name="amount"
              type="number"
              size="large"
              placeholder="Enter Salary Amount"
              value={driverSalary?.data?.amount}
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

          <div className="mb-4">
            <FormInput
              name="startLocation"
              type="text"
              size="large"
              placeholder="Enter Start Location"
            />
          </div>

          <Button
            htmlType="submit"
            className="uppercase text-md rounded-lg bg-brand hover:bg-gray-200 hover:text-secondary"
          >
            Update Trip Cost
          </Button>
        </Form>
      </div>
    </>
  );
};

export default UpdateDriverSalaryForm;
