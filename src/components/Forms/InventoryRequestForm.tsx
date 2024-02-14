"use client";
import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import { Button } from "antd";
import { SubmitHandler } from "react-hook-form";
type AddVehicleValues = {
  license: string;
  brand: string;
  model: string;
  fuelType: string;
  seatCapacity: string;
};

const InventoryRequestForm = ({ updateID }: any) => {
  const onSubmit: SubmitHandler<AddVehicleValues> = async (data: any) => {
    console.log("add vehicle data--->", data);
  };
  return (
    <>
      <div className="mx-auto md:max-w-[60%] lg:max-w-[40%] bg-white dark:bg-[#00334E] p-5 rounded-lg">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput
              name="name"
              type="text"
              size="large"
              placeholder="Driver Name"
              value=""
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="phone"
              type="text"
              size="large"
              placeholder="Driver Phone Number"
              value=""
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="email"
              type="email"
              size="large"
              placeholder="Driver Email"
              value=""
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="productName"
              type="text"
              size="large"
              placeholder="Product Name"
              value=""
            />
          </div>

          <Button
            shape="default"
            type="primary"
            htmlType="submit"
            className="bg-[#003343] text-[#eee] dark:bg-gray-100 dark:text-[#00334E] mt-3"
          >
            {" "}
            Send Request{" "}
          </Button>
        </Form>
      </div>
    </>
  );
};

export default InventoryRequestForm;
