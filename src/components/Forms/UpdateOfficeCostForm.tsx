import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import { useUpdateOfficeCostMutation } from "@/redux/api/officeCostApi";
import { Button, message } from "antd";

const UpdateOfficeCostForm = ({ officeCostData }: any) => {
  const { id, cost_name, amount, description } = officeCostData;
  console.log("office cost id: " + id);
  const [updateOfficeCost] = useUpdateOfficeCostMutation();

  const defaultValues = {
    cost_name: cost_name,
    amount: amount,
    description: description,
  };

  const onSubmit = async (data: any) => {
    console.log("id", id, data);
    data.amount = parseInt(data.amount);
    console.log("object updated", data);
    const res = await updateOfficeCost({ id, ...data });
    console.log(res);
  };

  return (
    <>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit} defaultValues={defaultValues}>
          <div className="mb-4">
            <FormInput
              name="cost_name"
              type="text"
              size="large"
              placeholder="Enter Cost Name"
            />
          </div>
          <div className="mb-4">
            <FormInput
              name="amount"
              type="number"
              size="large"
              placeholder="Cost Amount"
            />
          </div>

          <div className="mb-4">
            <FormInput
              name="description"
              type="text"
              size="large"
              placeholder="Enter Description"
            />
          </div>

          <Button
            htmlType="submit"
            className="uppercase text-md rounded-lg bg-brand hover:bg-gray-200 hover:text-secondary"
          >
            Update Office Cost
          </Button>
        </Form>
      </div>
    </>
  );
};

export default UpdateOfficeCostForm;
