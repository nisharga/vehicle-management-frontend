import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import { useUpdateSingleVehicleMutation, useGetSingleVehicleQuery } from "@/redux/api/vehecleApi";
import { Button, message } from "antd"; 
import { SubmitHandler } from "react-hook-form";

type AddVehicleValues = {
  license: string;
  brand: string;
  model: string;
  fuelType: string;
  seatCapacity: string;
};

const UpdateVehecleForm = ({ updateID }: any) => {
  const { data: vehicle } =  useGetSingleVehicleQuery(updateID); 
  const  [updateVehicle] =  useUpdateSingleVehicleMutation(); 
  
 

  const onSubmit: SubmitHandler<AddVehicleValues> = async (data: any) => {
   const color = data?.color;
   const seatCapacity = Number(data?.seatCapacity);
   const model = data?.model;
   const tax = Number(data?.tax);
   const updatedData = {color, seatCapacity, model, tax}

     if(!data.color || !data.seatCapacity || !data.model || !data.tax){
      message.error("Every field must be filled")
    }else{
      const res = await updateVehicle({updateID, updatedData})
      console.log(res)
      message.success(`${e} Deleted Sucessfully`); 
    }
  };
  
  return (
    <>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput
              name="registrationNo"
              type="text"
              size="large"
              placeholder="Vehicle License Number"
              value={vehicle?.data?.registrationNo}
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="color"
              type="text"
              size="large"
              placeholder="Vehicle Color" 
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="seatCapacity"
              type="text"
              size="large"
              placeholder="Seat Capacity"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="model"
              type="text"
              size="large"
              placeholder="Vehicle Model" 
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="tax"
              type="text"
              size="large"
              placeholder="Vehicle tax" 
            />
          </div>
           
          <Button
            htmlType="submit"
            className="uppercase text-md rounded-lg bg-brand hover:bg-gray-200 hover:text-secondary"
          >
            Update Vehicle
          </Button>
        </Form>
      </div>
    </>
  );
};

export default UpdateVehecleForm;
