"use client";

import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import FormSelectField from "@/components/ReusableForms/FormSelectField"; 
import { useCreateTripCostMutation } from "@/redux/api/tripCostApi";
import { Button, message } from "antd";

const AddTripCost = () => {
 

  const [createTripCost] = useCreateTripCostMutation();
  const onSubmit = async (data: any) => {
    data.parkingCost = parseInt(data.parkingCost);
    data.tollCost = parseInt(data.tollCost);
    console.log("tripCost: ", data);

    try {
      const res = await createTripCost(data);
      console.log("res: ", res);
      if ((res as any)?.data?.success) {
        message.success("tripCost created successfully");
      }
    } catch (error) {
      console.log("trip cost error", error);
    }
  };

  return (
    <>
      <p className="font-bold text-black text-[16px] mb-2">Add Trip Cost</p>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput
              name="passengerName"
              type="text"
              size="large"
              placeholder="Trip Holder Name"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="phone"
              size="large"
              type="text"
              placeholder="Enter phone number"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="trip_period"
              size="large"
              type="text"
              placeholder="Enter trip period"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="tollCost"
              type="number"
              size="large"
              placeholder="Toll Cost"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="parkingCost"
              type="number"
              size="large"
              placeholder="Parking Cost"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="startLocation"
              type="text"
              size="large"
              placeholder="Start Location"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="description"
              type="text"
              size="large"
              placeholder="Enter Description"
            />
          </div>

          <div className="mb-4">
            <FormSelectField
              name="trip_id"
              placeholder="trip Name"
              options={[{ label: "Dhaka", value: "65cb71d2a3fe678a70804db9" }]}
            />
          </div>

          <Button
            htmlType="submit"
            className="rounded-lg bg-secondary text-[#eee]"
          >
            Add Trip Cost
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddTripCost;
