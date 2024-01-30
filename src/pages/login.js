import { useForm } from "react-hook-form";
import Label from "../components/Shared/Form/Label";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginPage = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required()
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });
  


  const onSubmit = async (data) => { 
    const email = await data?.email;
    const password = await data?.password; 
   console.log(email, password)
   
  };

  return (
    <div >
        <div className="bg-[#00334E]">
        <div className="w-full px-4 py-24 z-50">
        <div data-aos='fade-down' className="max-w-[450px] h-auto mx-auto bg-[#707070] text-white p-2 rounded-3xl">
        <div className="max-w-[350px] mx-auto py-8">
        <h1 className="text-3xl font-bold text-[#FFB230]">Log In</h1>

      <form  onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col py-4">
         
        <div className="">
          <Label>Email *</Label>
          <input
          className="p-3 my-2 bg-gray-700 rounded w-full"
            type="email"
            {...register("email", { required: true })}
            placeholder="Type your Email"
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className="">
          <Label>Password *</Label>
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            className="p-3 my-2 bg-gray-700 rounded w-full"
          />
          <p>{errors.password?.message}</p> 
        </div>  

        <input type="submit" 
        value="Log In"
        className="bg-[#FFB230] py-3 my-6 rounded font-bold
         hover:bg-[#111111] cursor-pointer scale-100 
        hover:scale-105 transition-all duration-300 
        "
        />
      </form>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default LoginPage;
