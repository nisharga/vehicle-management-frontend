"use client";

import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import { useDriverVehicleQuery } from "@/redux/api/driverApi";
import { Button, message } from "antd";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form"; 
import { formatDate } from '@/utils/formateDate';
import { useCreateTripMutation } from "@/redux/api/tripApi";


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
  const [selectedDriver, setSelectedDriver] = useState([]); 
  const [selectedVehicle, setSelectedVehicle] = useState([]); 

  const [createTrip] = useCreateTripMutation()

  const onSubmit: SubmitHandler<CreateTripValue> = async (data: any) => {
    data.status = "UPCOMMING";
    data.passengerCount = parseInt(data?.passengerCount);
    data.tripRent = parseInt(data?.tripRent);
    data.startTime = formatDate(data?.startTime);
    data.vehicle_id = selectedVehicle;
    data.driver_id = selectedDriver;
   
    const res = await createTrip(data) 

    if((res as any)?.data?.statusCode === 200){
      message.success(`Create Trip Sucessfully`);
    }
 
  };

   const {data: driverVehicle} = useDriverVehicleQuery({})
  
  function handleSelectDriver(event: any) {
    setSelectedDriver(event.target.value);
  }
  function handleSelectVehicle(event: any) {
    setSelectedVehicle(event.target.value);
  }



  return (
    <>
      <p className="font-bold text-black text-[16px] mb-2">Create A New Trip</p>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit}>
         
          <div className="mb-4">
            <FormInput
              name="startLocation"
              type="text"
              placeholder="Start Location"
            />
          </div>
          
          <div className="mb-4">
            <FormInput
              name="endLocation"
              type="text"
              placeholder="End Location"
            />
          </div>

          <div className="mb-4 flex gap-2 items-center">
          <label className="mr-2">Date:</label>
            <FormInput
              name="startTime"
              type="date"
              placeholder="Trip Date"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="passengerName"
              type="text"
              placeholder="Passenger Name"
            />
          </div>
          
          <div className="mb-4">
            <FormInput
              name="passengerPhone"
              type="text"
              placeholder="Passenger Phone"
            />
          </div>
          
          <div className="mb-4">
            <FormInput
              name="passengerCount"
              type="number"
              placeholder="Total passenger Count"
            />
          </div> 
          
          <div className="mb-4">
            <FormInput
              name="tripPeriod"
              type="text"
              placeholder="Single-Trip | Round-Trip"
            />
          </div>
            
          <div className="mb-4">
            <FormInput
              name="tripRent"
              type="number"
              placeholder="$tripRent"
            />
          </div>

          <div className="mb-4">
          <label className="mr-2">Select Driver:</label>
          <select value={selectedDriver} onChange={handleSelectDriver}>   
              {
               (driverVehicle?.data?.driverResult ?? []).map((driver: any) => {
                return <option value={driver?.id} key={driver?.id}>{driver?.name}</option>
               })
              }  
            </select>
          </div>
          
          <div className="mb-4">
          <label className="mr-2">Select Vehicle:</label>
          <select value={selectedVehicle} onChange={handleSelectVehicle}>   
              {
               (driverVehicle?.data?.vehicleResult ?? []).map((vehicle: any) => {
                return <option value={vehicle?.id} key={vehicle?.id}>{vehicle?.brand}</option>
               })
              }  
            </select>
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
