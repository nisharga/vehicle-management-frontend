import { useForm } from "react-hook-form"

const Input = (  ) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  return (
    <>
    <input
      {...register("name", { required: true })}
      placeholder="Type your Name"
    />
    {errors.name && <span>This field is required</span>}
    </>
  )
}

export default Input