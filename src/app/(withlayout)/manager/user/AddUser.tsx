"use client";

import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import { Button } from "antd";
import { SubmitHandler } from "react-hook-form";

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
const AddUser = () => {
  const onSubmit: SubmitHandler<AddVehicleValues> = async (data: any) => {
    console.log("add user--->", data);
  };
  return (
    <>
      <p className="font-bold text-black text-[16px] mb-2">Add User</p>
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
          <div className="mb-4">
            <FormInput name="join_date" type="text" placeholder="Join Date" />
          </div>
          <div className="mb-4">
            <FormInput name="nid" type="text" placeholder="NID Number" />
          </div>
          <div className="mb-4">
            <FormInput
              name="file"
              type="text"
              placeholder="CV/Resume/passport/driving license (pdf)"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="profilePic"
              type="text"
              placeholder="Experience (year)"
            />
          </div>

          <Button
            htmlType="submit"
            className="text-md rounded-lg bg-secondary text-[#eee]"
          >
            New User Add
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddUser;
