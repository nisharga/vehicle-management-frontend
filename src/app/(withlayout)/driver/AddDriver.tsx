"use client";

import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import { useCreateDriverMutation } from "@/redux/api/driverApi";
import { Button } from "antd";
import { SubmitHandler } from "react-hook-form";
import { message } from "antd";

type AddVehicleValues = {
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  experience: string;
  nidNumber: string;
  file: string;
  profilePic: string;
};

const AddDriver = () => {
  const [addDriver] = useCreateDriverMutation();
  const onSubmit: SubmitHandler<AddVehicleValues> = async (data: any) => {
    
  const res = await addDriver(data);
    
  if((res as any)?.data?.statusCode === 200){
    message.success("Driver Created successful");
  }else{
    message.error("Something went wrong");
  } 

  };
  
  return (
    <>
      <p className="font-bold text-black text-[16px] mb-2">Add Driver</p>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput name="name" type="text" placeholder="Driver Name" />
          </div>
          <div className="mb-4">
            <FormInput name="email" type="text" placeholder="Driver Email" />
          </div>
          <div className="mb-4">
            <FormInput name="phone" type="text" placeholder="Phone Number" />
          </div>
          {/* <div className="md:flex md:gap-4 md:items-center ">
            <p className='mb-4'>Join Date:</p>
            <div className="mb-4">
              <FormInput
                name="joindate"
                size="large"
                type="date"
                placeholder="join_date"
              />
            </div>
          </div> */}
          <div className="mb-4">
            <FormInput name="nid" type="text" placeholder="NID Number" />
          </div>
          <div className="mb-4">
            <FormInput name="license_no" type="text" placeholder="License No" />
          </div>
          <div className="mb-4">
            <FormInput name="address" type="text" placeholder="Address" />
          </div>
          {/* <div className="mb-4">
            <FormInput
              name="file"
              type="text"
              placeholder="CV/Resume/passport/driving license (pdf)"
            />
          </div> */}
          <div className="mb-4">
            <FormInput
              name="experience"
              type="text"
              placeholder="Experience (year)"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="avatar"
              type="text"
              placeholder="Avater"
            />
          </div>

          <Button
            htmlType="submit"
            className="text-md rounded-lg bg-secondary text-[#eee]"
          >
            New Driver Add
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddDriver;