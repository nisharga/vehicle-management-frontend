import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import { useGetSingleAccessoryQuery, useUpdateAccessoryMutation } from "@/redux/api/accessoryApi";
import { useUpdateSingleVehicleMutation, useGetSingleVehicleQuery } from "@/redux/api/vehecleApi";
import { Button, Modal, message } from "antd"; 
import { SubmitHandler, useForm } from "react-hook-form";

//

const UpdateAccessory = ({ updateID }: any) => {
  // const { data: data } =  useGetSingleAccessoryQuery(updateID); 
  const  [updateAccessory] =useUpdateAccessoryMutation(); 
  const { register, handleSubmit, setValue } = useForm();
 
// 
  const onSubmit: SubmitHandler<any> = async (data: any) => {
   
    try {
      const updatedData = {
        accessory_name: data.accessory_name,
        quantity: Number(data.quantity),
        purchase_date: data.purchase_date,
        expire_date: data.expire_date,
        amount: Number(data.amount),
      };
      // console.log(updateID)
      // const body = updatedData
      const id = updateID
      const response = await updateAccessory({ id, updatedData})
      // Success message
      message.success("Accessory updated successfully");
      console.log(response)
      // Close the modal
      // Optionally, you can trigger a refetch of the accessory data here
    } catch (error) {
      // Error message
      message.error("Failed to update accessory. Please try again later.");
      console.error("Update accessory error:", error);
    }
  };
  
  return (
    <>
    <p className="font-bold text-black text-[16px] mb-2">Update Accessory</p>
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
         Update Accessory
        </Button>
      </Form>
    </div>
  </>
  );
};

export default UpdateAccessory;
