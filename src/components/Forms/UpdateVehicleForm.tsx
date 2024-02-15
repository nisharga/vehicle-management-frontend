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
  
   const defaultValues = {
     color: vehicle?.data?.color,
     seatCapacity: vehicle?.data?.seatCapacity,
     model: vehicle?.data?.model, 
     tax: vehicle?.data?.tax,
   };

  const onSubmit: SubmitHandler<AddVehicleValues> = async (data: any) => {
       
   data.seatCapacity = parseInt(data.seatCapacity);
   data.tax = parseInt(data.tax); 
   data.registrationNo =  vehicle?.data?.registrationNo;

  console.log(data, updateID) 

   const res = await updateVehicle({id: updateID, data})

   console.log("🚀 ~ constonSubmit:SubmitHandler<AddVehicleValues>= ~ res:", res)

   
  };
  
  return (
    <>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
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
