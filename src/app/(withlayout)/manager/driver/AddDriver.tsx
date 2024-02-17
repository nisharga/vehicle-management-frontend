"use client";

import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import { useCreateDriverMutation } from "@/redux/api/driverApi";
import { Button } from "antd";
import { SubmitHandler } from "react-hook-form";
import { message } from "antd";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form"; 

type AddVehicleValues = {
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  experience: string;
  nidNumber: string;
  file: string;
  profilePic: string;
};

const AddDriver = () => {
  const [avater, setAvater] = useState("");
   
  const [currentImage, setCurrentImage] = useState(avater || "https://i.ibb.co/SRF75vM/avatar.png");
     
  const handleImageUpload = (e : any) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
          setCurrentImage((reader as any)?.result);
      };
      reader.readAsDataURL(file);
  } else {
      setCurrentImage(currentImage);
  }

        const imageStoragekey = '68cb5fb5d48334a60f021c30aff06ada'
        
        const formData = new FormData()
        formData.append('image', file)
        fetch(`https://api.imgbb.com/1/upload?key=${imageStoragekey}`, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => setAvater(result?.data?.display_url))


  }
  
  const [addDriver] = useCreateDriverMutation();
  const onSubmit: SubmitHandler<AddVehicleValues> = async (data: any) => {
  data.avatar = avater;

  const res = await addDriver(data);
    console.log(res)
    
  if((res as any)?.data?.statusCode === 200){
    message.success("Driver Created successful");
  }else{
    message.error("Something went wrong");
  } 

  };
  
  return (
    <>
      <p className="font-bold text-black text-[16px] mb-2">Add Driver</p>
      <div className="mx-auto overflow-y-scroll ">
        <Form submitHandler={onSubmit}>
          <div className="mb-4">
            <FormInput name="name" type="text" placeholder="Driver Name" />
          </div>
          <div className="mb-4">
            <FormInput name="email" type="text" placeholder="Driver Email" />
          </div>
          <div className="mb-4">
            <FormInput name="phone" type="text" placeholder="Phone Number" />
          </div>
          
          <div className="mb-4">
            <FormInput name="nid" type="text" placeholder="NID Number" />
          </div>
          <div className="mb-4">
            <FormInput name="license_no" type="text" placeholder="License No" />
          </div>
          <div className="mb-4">
            <FormInput name="address" type="text" placeholder="Address" />
          </div>
          <div className="mb-4">
            <FormInput
              name="experience"
              type="text"
              placeholder="Experience (year)"
            />
          </div>
          {/* <div className="mb-4">
            <FormInput
              name="avatar"
              type="text"
              placeholder="Avater"
            /> 
          </div> */}
                                   <div className="flex lg:flex-row flex-col gap-4 justify-center lg:items-center mt-2 py-2">
                                     
                                     <div className="form-control w-full max-w-x flex items-center gap-2"
                                     >
                                      <div className="w-2/5">
                                         <label className="label">
                                             <span className="label-text text-gray-600 font-semibold">Profile Image</span>
                                         </label>
                                         <div className="w-12 h-12 rounded-full">
                                         <Image
                                                 src={currentImage}
                                                 alt='avater'
                                                 className="w-full
                                                 object-cover"
                                                 width={0}
                                                 height={0}
                                                 unoptimized
                                             />
                                         </div>
                                      </div> 

                                         <input
                                             type="file"
                                             placeholder="Image"
                                             className="input input-bordered input-warning w-full max-w-x mt-2"
                                            onChange= {handleImageUpload}
                                         />
                                     </div>
                                 </div>
                             

          <Button
            htmlType="submit"
            className="text-md rounded-lg bg-secondary text-[#eee]"
          >
            New Driver Add
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddDriver;