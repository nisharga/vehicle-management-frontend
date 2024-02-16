"use client";

import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import { useCreateDriverMutation } from "@/redux/api/driverApi";
import { Button } from "antd";
import { SubmitHandler } from "react-hook-form";
import { message } from "antd";
import { useCreateRequestMutation } from "@/redux/api/inventoryRequestApi";

type MakeRequestValues = {
  name: string;
 
};

const MakeInventoryRequest = () => {
  const [createRequest] = useCreateRequestMutation();
  const onSubmit: SubmitHandler<MakeRequestValues> = async (data: any) => {
    
    
  const res = await createRequest(data);
 
  if((res as any)?.data?.statusCode === 200){
    message.success((res as any).data.message);
  }else{
    message.error("Something went wrong");
  } 

  };
  
  return (
    <>
      <p className="font-bold text-black text-[16px] mb-2">Make request</p>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput name="title" type="text" placeholder="Inventory request item name" />
          </div>
        
          <Button
            htmlType="submit"
            className="text-md rounded-lg bg-secondary text-[#eee]"
          >
            Request
          </Button>
        </Form>
      </div>
    </>
  );
};

export default MakeInventoryRequest;