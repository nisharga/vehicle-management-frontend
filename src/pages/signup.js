import { useForm } from "react-hook-form";
import Label from "../components/Shared/Form/Label";
import { useState } from "react";
import Image from "next/image";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const SignUpPage = () => {
  const [avater, setAvater] = useState("");
  const [currentImage, setCurrentImage] = useState(
    avater || "https://i.ibb.co/SRF75vM/avatar.png"
  );
  const [isPasswordMatch, setIsPasswordMatch] = useState(null);


  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email must be unique"),
    password: yup.string().min(8).max(32).required("Password is required"),
    password2: yup.string().min(8).max(32).required("Confirm Password is required"),
    phone: yup.string().required("Phone number is required"), 
    address: yup.string().required("Address is required"),
    location: yup.string().required("Location is required"), 
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
    const name = await data?.name;
    const email = await data?.email;
    const password = await data?.password;
    const phone = await data?.phone; 
    const address = await data?.address;
    const location = await data?.location;
     
   if(data.password !== data.password2){
     setIsPasswordMatch("Password not matched with Confirm Password")
   }else{
    console.log(
    "name:", name,
    "email:", email,
    "password:", password,
    "phone:", phone, 
    "address:", address,
    "location:", location,
    "usrAvater:", avater);
   }
    
    
  };

  return (
    <div>
        <div className="bg-[#00334E]">
        <div className="w-full px-4 py-24 z-50">
        <div data-aos='fade-down' className="max-w-[450px] h-auto mx-auto bg-[#707070] text-white p-2 rounded-3xl">
        <div className="max-w-[350px] mx-auto py-8">
        <h1 className="text-3xl font-bold text-[#FFB230]">Sign Up</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col py-4">
        <div className="">
          <Label>Name *</Label>
          <input
            {...register("name", { required: true })}
            placeholder="Type your Name"
            className="p-3 my-2 bg-gray-700 rounded w-full"
          />
          <p>{errors.name?.message}</p>
        </div>
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
          <p>{isPasswordMatch && isPasswordMatch}</p> 
        </div>
        <div className="">
          <Label>Confirm Password *</Label>
          <input
            type="password"
            {...register("password2", { required: true })}
            placeholder="Confirm Password"
            className="p-3 my-2 bg-gray-700 rounded w-full"
          />
          <div>
          <p>{errors.password2?.message}</p>
          <p>{isPasswordMatch && isPasswordMatch}</p> 
          </div>
        </div>
        <div className="">
          <Label>Phone *</Label>
          <input
            {...register("phone", { required: true })}
            placeholder="Phone number"
            className="p-3 my-2 bg-gray-700 rounded w-full"
          />
          <p>{errors.phone?.message}</p>
        </div>
         
        <div className="">
          <Label>Address *</Label>
          <input
            {...register("address", { required: true })}
            placeholder="Type your full address"
            className="p-3 my-2 bg-gray-700 rounded w-full"
          />
          <p>{errors.address?.message}</p>
        </div>
        <div className="">
          <Label>Location *</Label>
          <input
            {...register("location", { required: true })}
            placeholder="Your Current Location"
            className="p-3 my-2 bg-gray-700 rounded w-full"
          />
          <p>{errors.location?.message}</p>
        </div>

        <div className="flex lg:flex-row flex-col gap-4 justify-center lg:items-center mt-2">
          <div className="form-control w-full max-w-x">
          <Label>Profile Image</Label>
            <div className="w-12 h-12 md-w-20 md:h-20 rounded-full mt-3">
              <Image
                src={currentImage}
                alt="avater"
                className="w-full
                    object-cover"
                width={0}
                height={0}
                unoptimized
              />
            </div>

            <input
              type="file"
              placeholder="Image"
              className="p-3 bg-gray-700 rounded w-full"
              {...register("image", {
                onChange: (e) => {
                  const file = e.target.files[0]; 
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setCurrentImage(reader.result);
                      const imageStoragekey = "68cb5fb5d48334a60f021c30aff06ada";
    //const image = data.image[0];
    const formData = new FormData();
    formData.append("image", file);
    fetch(`https://api.imgbb.com/1/upload?key=${imageStoragekey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => setAvater(result?.data?.display_url)); 
                    };
                    reader.readAsDataURL(file);
                  } else {
                    setCurrentImage(currentImage);
                  }
                },
              })}
            />
          </div>
        </div>

        <input type="submit" 
        value="Sign Up"
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

export default SignUpPage;
