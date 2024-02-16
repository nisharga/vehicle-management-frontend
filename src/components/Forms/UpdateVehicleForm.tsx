import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import {
  useUpdateSingleVehicleMutation,
  useGetSingleVehicleQuery,
} from "@/redux/api/vehecleApi";
import { Button, message } from "antd";
import { SubmitHandler } from "react-hook-form";

type AddVehicleValues = {
  license: string;
  brand: string;
  model: string;
  fuelType: string;
  seatCapacity: string;
};

const UpdateVehecleForm = ({ vehicleData }: any) => {
  
  const { color, seatCapacity, model, tax, registrationNo, id } = vehicleData;
  const [updateVehicle] = useUpdateSingleVehicleMutation();

  const defaultValues = {
    registrationNo: registrationNo,
    color: color,
    seatCapacity: seatCapacity,
    model: model,
    tax: tax,
  };

  const onSubmit: SubmitHandler<AddVehicleValues> = async (data: any) => {
    data.seatCapacity = parseInt(data.seatCapacity);
    data.tax = parseInt(data.tax);
    //  data.registrationNo =  vehicle?.data?.registrationNo;
    // console.log(data, updateID)
    const res = await updateVehicle({ id, ...data });
    if ((res as any)?.data?.statusCode === 200) {
      message.success("Vehicle updated successfully");
    }
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
