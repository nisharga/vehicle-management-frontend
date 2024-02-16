import { Button, message } from "antd";
import { SubmitHandler } from "react-hook-form";
import Form from "../ReusableForms/Form";
import FormInput from "../ReusableForms/FormInput";
import {useTripSingleQuery, useUpdateSingleTripMutation} from "../../redux/api/tripApi";

type AddVehicleValues = {
  tripId: string;
  status: string;
  tripPeriod: string;
};

const UpdateTripForm = ({ updateID }: any) => {
  const {data: singleTrip} = useTripSingleQuery(updateID)
  console.log("🚀 ~ UpdateTripForm ~ singleTrip:", singleTrip)

  const defaultValues = {
    status: singleTrip?.data?.status,
    passengerCount: singleTrip?.data?.passengerCount,
    tripPeriod: singleTrip?.data?.tripPeriod,
    tripRent: singleTrip?.data?.tripRent,
  };


  const [updateTrip] = useUpdateSingleTripMutation();
  
  
  const onSubmit: SubmitHandler<AddVehicleValues> = async (data: any) => {
    data.passengerCount = parseInt(data?.passengerCount) 

    console.log("data:", updateID, data)
     
    try {
      const res = await updateTrip({ id: updateID, data });
      console.log("res: ", res)
      if ((res as any)?.data?.statusCode === 200) {
        message.success("Trip updated successfully");
      }
    } catch (error) {
      message.success("Something Went Wrong");
    }
  };
  return (
    <div>
      <h1>Update Trip For: {singleTrip?.data?.passengerName}</h1>
      <div className="mx-auto overflow-y-scroll p-5">
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          
          <div className="mb-4">
            <FormInput
              name="status"
              type="text"
              placeholder="Status (done / pending)"
            />
          </div>
          
          <div className="mb-4">
            <FormInput
              name="passengerCount"
              type="number"
              placeholder="Total passenger Count"
            />
          </div> 
          
          <div className="mb-4">
            <FormInput
              name="tripPeriod"
              type="text"
              placeholder="Single-Trip | Round-Trip"
            />
          </div>
            
          <div className="mb-4">
            <FormInput
              name="tripRent"
              type="number"
              placeholder="$tripRent"
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
