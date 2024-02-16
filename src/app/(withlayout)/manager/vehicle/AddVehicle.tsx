"use client";

import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import { useCreateVehicleMutation } from "@/redux/api/vehecleApi";
import { formatDate } from "@/utils/formateDate";
import { Button, message } from "antd";
import { SubmitHandler } from "react-hook-form";
type AddVehicleValues = {
  license: string;
  brand: string;
  model: string;
  fuelType: string;
  seatCapacity: string;
};
const AddVehicle = () => {
  const [createVehicle] = useCreateVehicleMutation();
  const onSubmit: SubmitHandler<AddVehicleValues> = async (data: any) => {
    const registrationNo = data.registrationNo;

    const purchaseDate = formatDate(data.purchaseDate);
    const registrationDate = formatDate(data.registrationDate);

    const color = data.color;
    const mileage = Number(data.mileage);
    const price = Number(data.price);
    const tax = Number(data.tax);
    const seatCapacity = Number(data.seatCapacity);
    const vehicleType = data.vehicleType;
    const brand = data.brand;
    const model = data.model;
    const fuelType = data.fuelType;

    const formData = {
      registrationNo,
      purchaseDate,
      registrationDate,
      color,
      mileage,
      price,
      tax,
      seatCapacity,
      vehicleType,
      brand,
      model,
      fuelType,
    };

    const resData = await createVehicle(formData);
    if ((resData as any).data?.statusCode === 200) {
      message.success("Vehicle Created successful");
    } else {
      message.error("Something went wrong");
    }
  };

  return (
    <>
      <p className="font-bold text-black text-[16px] mb-2">Add Vehicle</p>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput
              name="registrationNo"
              type="text"
              size="large"
              placeholder="Vehicle Registration No"
            />
          </div>

          <p className="mb-4">Purchase:</p>
          <div className="mb-4">
            <FormInput
              name="purchaseDate"
              size="large"
              type="date"
              placeholder="Purchase Date"
            />
          </div>
          <p className="mb-4">Registration:</p>
          <div className="mb-4">
            <FormInput
              name="registrationDate"
              size="large"
              type="date"
              placeholder="Registration Date"
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
              name="mileage"
              type="number"
              size="large"
              placeholder="Mileage"
            />
          </div>
          <div className="md:flex md:gap-4 md:items-center">
            <div className="mb-4">
              <FormInput
                name="price"
                type="number"
                size="large"
                placeholder="Vehicle Price"
              />
            </div>

            <div className="mb-4">
              <FormInput
                name="tax"
                type="number"
                size="large"
                placeholder="Vehicle Tax"
              />
            </div>
          </div>

          <div className="mb-4">
            <FormInput
              name="seatCapacity"
              type="number"
              size="large"
              placeholder="Vehicle SeatCapacity"
            />
          </div>

          <div className="mb-4 flex justify-between">
            <span className="p-1">Vehicle Type:</span>

            <div className="flex">
              <FormInput
                name="vehicleType"
                type="radio"
                size="large"
                value="AC"
                id="ac"
              />
              <label htmlFor="ac" className="p-1">
                Ac
              </label>
            </div>

            <div className="flex">
              <FormInput
                name="vehicleType"
                type="radio"
                size="large"
                value="NonAC"
                id="nonac"
              />
              <label htmlFor="nonac" className="p-1">
                NonAC
              </label>
            </div>

            <div className="flex">
              <FormInput
                name="vehicleType"
                type="radio"
                size="large"
                value="SlippingBus"
                id="slippingbus"
              />
              <label htmlFor="slippingbus" className="p-1">
                Slipping
              </label>
            </div>
          </div>

          <div className="md:flex md:gap-4 md:items-center ">
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
                placeholder="Vehicle model"
              />
            </div>
          </div>

          <div className="mb-4 flex justify-between gap-1">
            <span className="p-1">Fuel Type:</span>
            <div className="flex">
              <FormInput
                name="fuelType"
                type="radio"
                size="large"
                value="Petrol"
                id="petrol"
              />
              <label htmlFor="petrol" className="p-1">
                Petrol
              </label>
            </div>

            <div className="flex">
              <FormInput
                name="fuelType"
                type="radio"
                size="large"
                value="Diesel"
                id="diesel"
              />
              <label htmlFor="diesel" className="p-1">
                Diesel
              </label>
            </div>

            <div className="flex">
              <FormInput
                name="fuelType"
                type="radio"
                size="large"
                value="Electric"
                id="electric"
              />
              <label htmlFor="electric" className="p-1">
                Electric
              </label>
            </div>

            <div className="flex">
              <FormInput
                name="fuelType"
                type="radio"
                size="large"
                value="Hybrid"
                id="hybrid"
              />
              <label htmlFor="hybrid" className="p-1">
                Hybrid
              </label>
            </div>
          </div>

          <Button
            htmlType="submit"
            className="rounded-lg bg-secondary text-[#eee]"
          >
            Add Vehicle
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddVehicle;
