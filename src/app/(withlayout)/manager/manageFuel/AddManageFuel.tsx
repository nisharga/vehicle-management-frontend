"use client";

import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import { useDriverVehicleQuery } from "@/redux/api/driverApi";
import { useCreateTripMutation } from "@/redux/api/tripApi";
import { formatDate } from "@/utils/formateDate";
import { Button, message } from "antd";
import { useState } from "react";
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

const AddManageFuel = () => {
  const [selectedDriver, setSelectedDriver] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState([]);

  const [createTrip] = useCreateTripMutation();

  const onSubmit: SubmitHandler<CreateTripValue> = async (data: any) => {
    data.status = "UPCOMMING";
    data.passengerCount = parseInt(data?.passengerCount);
    data.tripRent = parseInt(data?.tripRent);
    data.startTime = formatDate(data?.startTime);
    data.vehicle_id = selectedVehicle;
    data.driver_id = selectedDriver;

    const res = await createTrip(data);

    if ((res as any)?.data?.statusCode === 200) {
      message.success(`Create Trip Sucessfully`);
    }
  };

  const { data: driverVehicle } = useDriverVehicleQuery({});

  function handleSelectDriver(event: any) {
    setSelectedDriver(event.target.value);
  }
  function handleSelectVehicle(event: any) {
    setSelectedVehicle(event.target.value);
  }

  return (
    <>
      <p className="font-bold text-black text-[16px] mb-2">Add Fuel Page</p>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput
              name="startLocation"
              type="text"
              placeholder="Select vehicle"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="endLocation"
              type="text"
              placeholder="Fuel tyoe"
            />
          </div>

          <div className="mb-4 flex gap-2 items-center">
            <label className="mr-2">Purchase Date:</label>
            <FormInput name="startTime" type="date" placeholder="Purchase Date" />
          </div>

          <div className="mb-4">
            <FormInput
              name="passengerName"
              type="text"
              placeholder="invoice"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="passengerPhone"
              type="text"
              placeholder="Amount"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="passengerCount"
              type="number"
              placeholder="Liter"
            />
          </div>

  
    

          <Button
            htmlType="submit"
            className="text-md rounded-lg"
            style={{
              backgroundColor: "#00334E",
              color: "#eee",
            }}
          >
            Add Fuel
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddManageFuel;
