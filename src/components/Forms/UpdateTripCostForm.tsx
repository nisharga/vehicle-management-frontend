import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import {
  useGetSingleTripCostQuery,
  useUpdateTripCostMutation,
} from "@/redux/api/tripCostApi";
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

const UpdateTripCostForm = ({ updateID }: any) => {
  const { data: tripCost } = useGetSingleTripCostQuery(updateID);
  const [updateTripCost] = useUpdateTripCostMutation();

  const onSubmit: SubmitHandler<AddVehicleValues> = async (data: any) => {
    const color = data?.color;
    const seatCapacity = Number(data?.seatCapacity);
    const model = data?.model;
    const tax = Number(data?.tax);
    const updatedData = { color, seatCapacity, model, tax };

    if (!data.color || !data.seatCapacity || !data.model || !data.tax) {
      message.error("Every field must be filled");
    } else {
      const res = await updateTripCost({ updateID, updatedData });
      console.log(res);
    }
  };

  return (
    <>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput
              name="phone"
              type="text"
              size="large"
              placeholder="Enter phone number"
              value={tripCost?.data?.phone}
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="trip_period"
              type="text"
              size="large"
              placeholder="Trip Period"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="tollCost"
              type="number"
              size="large"
              placeholder="Enter tollCost"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="parkingCost"
              type="number"
              size="large"
              placeholder="Enter parkingCost"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="startLocation"
              type="text"
              size="large"
              placeholder="Enter Start Location"
            />
          </div>

          <Button
            htmlType="submit"
            className="uppercase text-md rounded-lg bg-brand hover:bg-gray-200 hover:text-secondary"
          >
            Update Trip Cost
          </Button>
        </Form>
      </div>
    </>
  );
};

export default UpdateTripCostForm;
