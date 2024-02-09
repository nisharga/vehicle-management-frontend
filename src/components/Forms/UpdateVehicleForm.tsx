import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import { Button } from "antd";
import { SubmitHandler } from "react-hook-form";
type AddVehicleValues = {
  license: string;
  brand: string;
  model: string;
  fuelType: string;
  seatCapacity: string;
};

const UpdateVehecleForm = ({ updateID }: any) => {
  const onSubmit: SubmitHandler<AddVehicleValues> = async (data: any) => {
    console.log("add vehicle data--->", data);
  };
  return (
    <>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput
              name="license number"
              type="text"
              size="large"
              placeholder="Vehicle License Number"
              value={updateID}
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="brand"
              type="text"
              size="large"
              placeholder="Vehicle Brand"
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
              name="fuelType"
              type="text"
              size="large"
              placeholder="Vehicle Fuel Type"
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
