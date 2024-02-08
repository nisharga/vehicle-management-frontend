import { Button } from "antd";
import { SubmitHandler } from "react-hook-form";
import Form from "../ReusableForms/Form";
import FormInput from "../ReusableForms/FormInput";

type AddVehicleValues = {
  tripId: string;
  status: string;
  tripPeriod: string;
};

const UpdateTripForm = ({ updateID }: any) => {
  const onSubmit: SubmitHandler<AddVehicleValues> = async (data: any) => {
    console.log("update trip data--->", data);
  };
  return (
    <div>
      <h1>Update Trip Location {updateID}</h1>
      <div className="mx-auto overflow-y-scroll p-5">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput name="tripId" type="text" placeholder="Trip Id" />
          </div>
          <div className="mb-4">
            <FormInput
              name="status"
              type="text"
              placeholder="Status (done / pending)"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="tripPeriod"
              type="text"
              placeholder="Trip Period"
            />
          </div>

          <Button
            htmlType="submit"
            className="text-md rounded-lg  "
            style={{
              backgroundColor: "#00334E",
              color: "#eee",
            }}
          >
            Update Trip
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UpdateTripForm;
