"use client";

import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import { Button } from "antd";
import { SubmitHandler } from "react-hook-form";

type CreateTripValue = {
  passengerName: string;
  phone: string;
  tripPeriod: string;
  tollCost: string;
  parkingCost: string;
  startLocation: string;
  description: string;
  tripId: string;
};
const CreateTrip = () => {
  const onSubmit: SubmitHandler<CreateTripValue> = async (data: any) => {
    console.log("trip create Data--->", data);
  };
  return (
    <>
      <p className="font-bold text-black text-[16px] mb-2">Create A New Trip</p>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput
              name="passengerName"
              type="text"
              placeholder="Passenger Name"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="phone"
              type="phone"
              placeholder="Passenger Phone"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="tripPeriod"
              type="date"
              placeholder="Trip Period"
            />
          </div>
          <div className="mb-4">
            <FormInput name="tollCost" type="text" placeholder="Toll Cost" />
          </div>
          <div className="mb-4">
            <FormInput
              name="parkingCost"
              type="text"
              placeholder="Parking Cost"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="startLocation"
              type="text"
              placeholder="Start Location"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="description"
              type="comment"
              placeholder="Description"
            />
          </div>
          <div className="mb-4">
            <FormInput name="tripId" type="text" placeholder="TripId" />
          </div>

          <Button
            htmlType="submit"
            className="text-md rounded-lg"
            style={{
              backgroundColor: "#00334E",
              color: "#eee",
            }}
          >
            New Driver Add
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateTrip;
