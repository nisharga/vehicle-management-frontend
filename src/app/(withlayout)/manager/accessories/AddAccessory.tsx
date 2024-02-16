"use client";

import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import { useCreateAccessoryMutation } from "@/redux/api/accessoryApi";
import { formatDate } from "@/utils/formateDate";
import { Button, message } from "antd";
import { SubmitHandler } from "react-hook-form";
const AddAccessory = () => {
  const [createAccessory] = useCreateAccessoryMutation();
  const onSubmit: SubmitHandler<any> = async (data: any) => {
    const accessory_name = data.accessory_name;
    const quantity = Number(data.quantity);
    const purchase_date = formatDate(data.purchase_date);
    const expire_date = formatDate(data.expire_date);
    const amount = Number(data.amount);
    const description = data.description;
    // console.log(accessory_name,quantity,purchase_date,expire_date,amount,description);

    const formData = {
      accessory_name,
      quantity,
      purchase_date,
      expire_date,
      amount,
      description,
    };

    const resData = await createAccessory(formData);
    console.log(resData);
    if ((resData as any).data?.statusCode === 200) {
      message.success("Accessor Created successful");
    } else {
      message.error("Something went wrong");
    }
  };

  return (
    <>
      <p className="font-bold text-black text-[16px] mb-2">Add Vehicle</p>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput
              name="accessory_name"
              type="text"
              size="large"
              placeholder="Accessory Name"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="quantity"
              size="large"
              type="number"
              placeholder="Quantity"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="purchase_date"
              size="large"
              type="date"
              placeholder="purchase Date"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="expire_date"
              type="date"
              size="large"
              placeholder="Expire Date"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="amount"
              type="number"
              size="large"
              placeholder="Amount"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="description"
              type="text"
              size="large"
              placeholder="Description"
            />
          </div>

          <Button
            htmlType="submit"
            className="rounded-lg bg-secondary text-[#eee]"
          >
            Add Accessory
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddAccessory;
