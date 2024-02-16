"use client";

import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import { useCreateOfficeCostMutation } from "@/redux/api/officeCostApi";
import { Button } from "antd";
const AddOfficeCost = () => {
  const [createOfficeCost] = useCreateOfficeCostMutation();
  const onSubmit = async (data: any) => {
    data.amount = parseInt(data.amount);
    const response = await createOfficeCost(data);
    console.log("response", response);
  };
  return (
    <>
      <p className="font-bold text-black text-[16px] mb-2">Add Office Cost</p>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput
              name="cost_name"
              type="text"
              placeholder="Enter Cost title"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="amount"
              type="number"
              placeholder="Enter Cost amount"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="description"
              type="text"
              placeholder="Enter Cost description"
            />
          </div>
          <Button
            htmlType="submit"
            className="text-md rounded-lg bg-secondary text-[#eee]"
          >
            Add Office Cost
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddOfficeCost;
