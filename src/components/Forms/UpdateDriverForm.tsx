import { Button } from "antd";
import { SubmitHandler } from "react-hook-form";
import Form from "../ReusableForms/Form";
import FormInput from "../ReusableForms/FormInput";

type AddVehicleValues = {
  name: string;
  phone: string;
  experience: string;
  pdf: string;
  photo: string;
};

const UpdateDriverForm = ({ driverData }: any) => {
  const { name, phone, experience, file } = driverData;
  const onSubmit: SubmitHandler<AddVehicleValues> = async (data: any) => {
    console.log("add driver data--->", data);
  };
  return (
    <>
      <div className="mx-auto overflow-y-scroll p-5">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput
              name="name"
              type="text"
              placeholder="Name"
              value={name}
            />
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
          <div className="mb-4">
            <FormInput
              name="file"
              type="text"
              placeholder="File (pdf)"
              value={file}
            />
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

export default UpdateDriverForm;
