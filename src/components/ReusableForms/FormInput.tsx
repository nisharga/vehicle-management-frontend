"use client";

// import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { Input } from "antd";
import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  defaultValue?: string;
  validation?: object;
  label?: string;
  prefix?: ReactNode;
  onChange?: any;
}

const FormInput = ({
  name,
  type,
  size = "large",
  value,
  id,
  placeholder,
  validation,
  label,
  prefix,
  ...rest
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  // const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              {...rest}
            />
          ) : (
            <Input
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              prefix={prefix}
              {...rest}
            />
          )
        }
      />
      {/* <small style={{ color: "red" }}>{errorMessage}</small> */}
    </>
  );
};

export default FormInput;
