"use client";

import DriverSelectFields from "@/Options/DriverSelectFields";
import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import FormSelectField from "@/components/ReusableForms/FormSelectField";
import { useCreateDriverSalaryMutation } from "@/redux/api/driverSalaryApi";
import { Button, message } from "antd";

const AddDriverSalary = () => {
  const [createDriverSalary] = useCreateDriverSalaryMutation();
  const onSubmit = async (data: any) => {
    data.amount = parseInt(data.amount);

    try {
      const res = await createDriverSalary(data);
      message.success("DriverSalary created successfully")
    } catch (error) {
      console.log("driver salary error", error);
    }
  };

  return (
    <>
      <p className="font-bold text-black text-[16px] mb-2">Add Driver Salary</p>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
           <DriverSelectFields name="driver_id" label="Driver"/>
          </div>
          <div className="mb-4">
            <FormInput
              name="amount"
              size="large"
              type="number"
              placeholder="Enter Salary Amount"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="month"
              size="large"
              type="text"
              placeholder="Enter salary month"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="position"
              type="text"
              size="large"
              placeholder="Enter Driver position"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="description"
              type="text"
              size="large"
              placeholder="Add Description"
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
            className="rounded-lg bg-secondary text-[#eee]"
          >
            Add Driver Salary
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddDriverSalary;
