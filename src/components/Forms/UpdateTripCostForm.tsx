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
  console.log("update trip cost", tripCost);
  const [updateTripCost] = useUpdateTripCostMutation();

  const defaultValues = {
    phone: tripCost?.data?.phone,
    trip_period: tripCost?.data?.trip_period,
    tollCost: tripCost?.data?.tollCost,
    parkingCost: tripCost?.data?.parkingCost,
    startLocation: tripCost?.data?.startLocation,
  };

  const onSubmit: SubmitHandler<AddVehicleValues> = async (data: any) => {
    data.tollCost = parseInt(data.tollCost);
    data.parkingCost = parseInt(data.parkingCost);
    const res = await updateTripCost({ id: updateID, data });
    console.log("res: " ,res);
    if ((res as any)?.data?.success) {
      message.success("Trip Cost updated successfully");
    }
  };

  return (
    <>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
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
