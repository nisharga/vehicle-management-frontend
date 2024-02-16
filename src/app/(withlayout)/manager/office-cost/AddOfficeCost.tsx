"use client";

import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import { Button } from "antd";
import { SubmitHandler } from "react-hook-form";

type AddVehicleValues = {
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  experience: string;
  nidNumber: string;
  file: string;
  profilePic: string;
};
const AddOfficeCost = () => {
  const onSubmit: SubmitHandler<AddVehicleValues> = async (data: any) => {
    console.log("add driver--->", data);
  };
  return (
    <>
      <p className="font-bold text-black text-[16px] mb-2">Add Office Cost</p>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput name="itemName" type="text" placeholder="Item Name" />
          </div>
          <div className="mb-4">
            <FormInput
              name="description"
              type="text"
              placeholder="Product Description"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="productCost"
              type="text"
              placeholder="Product Cost (Tk)"
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
