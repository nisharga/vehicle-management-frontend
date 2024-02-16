import { Button, message } from "antd";
import { SubmitHandler } from "react-hook-form";
import Form from "../ReusableForms/Form";
import FormInput from "../ReusableForms/FormInput";
import { useUpdateRequestMutation } from "@/redux/api/inventoryRequestApi";

type UpdateInventoryValues = {
  title: string;
//   phone: string;
//   experience: string;
//   pdf: string;
//   photo: string;
};

const UpdateInventoryRequestForm = ({ inventoryRequestData }: any) => { 
  const { title } = inventoryRequestData;
  const defaultValues = {
    title: title,
  };
  
  const [updateRequest] = useUpdateRequestMutation();
  const onSubmit: SubmitHandler<UpdateInventoryValues> = async (data: any) => {
   
    data.id = inventoryRequestData.id;
    try {
      const res = await updateRequest({ ...data });
      console.log("res: ", res)
      if ((res as any)?.data?.statusCode === 200) {
        message.success("Inventory request updated successfully");
      }
    } catch (error) {
      console.log("Inventory request update error", error);
    }
  };
  return (
    <>
      <div className="mx-auto overflow-y-scroll p-5">
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <div className="mb-4">
            <FormInput name="title" type="text" placeholder="Edit itle" />
          </div>
          <Button
            htmlType="submit"
            className="uppercase text-md rounded-lg bg-brand hover:bg-gray-200 hover:text-secondary"
          >
            Update
          </Button>
        </Form>
      </div>
    </>
  );
};

export default UpdateInventoryRequestForm;
