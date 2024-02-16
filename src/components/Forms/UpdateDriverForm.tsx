import { Button, message } from "antd";
import { SubmitHandler } from "react-hook-form";
import Form from "../ReusableForms/Form";
import FormInput from "../ReusableForms/FormInput";
import { useUpdateDriverMutation } from "@/redux/api/driverApi";

type AddVehicleValues = {
  name: string;
  phone: string;
  experience: string;
  pdf: string;
  photo: string;
};

const UpdateDriverForm = ({ driverData }: any) => { 
  const { name, phone, experience, id } = driverData;
  const defaultValues = {
    name: name,
    phone: phone,
    experience: experience,
  };
  const [updateDriver] = useUpdateDriverMutation();
  const onSubmit: SubmitHandler<AddVehicleValues> = async (data: any) => {
    data.id = id;
    try {
      const res = await updateDriver({ ...data });
      console.log("res: ", res)
      if ((res as any)?.data?.statusCode === 200) {
        message.success("Driver updated successfully");
      }
    } catch (error) {
      console.log("driver update error", error);
    }
  };
  return (
    <>
      <div className="mx-auto overflow-y-scroll p-5">
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <div className="mb-4">
            <FormInput name="name" type="text" placeholder="Name" />
          </div>
          <div className="mb-4">
            <FormInput name="phone" type="text" placeholder="Phone Number" />
          </div>
          <div className="mb-4">
            <FormInput
              name="experience"
              type="text"
              placeholder="Experience Update"
            />
          </div>
          {/* <div className="mb-4">
            <FormInput name="file" type="text" placeholder="File (pdf)" />
          </div> */}
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

export default UpdateDriverForm;
