"use client";
import Form from "@/components/ReusableForms/Form";
import FormInput from "@/components/ReusableForms/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfoFromToken, storeUserInfo } from "@/services/auth.service";
import { Button, Tooltip, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import logo from "../../assets/logo.png";

type FormValues = {
  id: string;
  password: string;
};

export default function LoginPage() {
  const [userLogin, { isLoading: isLogin }] = useUserLoginMutation();

  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();

      if (res?.data?.accessToken) {
        const userInfo = await getUserInfoFromToken(res?.data?.accessToken);
        if (userInfo?.role === "MANAGER") {
          router.push("/manager");
          message.success("Manager log in successful");
        } else if (userInfo?.role === "DRIVER") {
          router.push("/driver");
          message.success("Driver log in successful");
        } else {
          router.push("/super-admin");
          message.success("Admin log in successful");
        }
      }
      storeUserInfo({ accessToken: res?.data?.accessToken });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-stretch text-white ">
        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center vms-login-page-banner">
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Vehicle Management System (VMS)
            </h1>
            <p className="text-3xl my-4">Imagine having a virtual garage</p>
          </div>
        </div>

        <div
          className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 "
          style={{ backgroundColor: "#00334E" }}
        >
          <div className="w-full py-6  ">
            <Image
              alt="Mountains"
              src={logo}
              sizes="100vw"
              style={{
                width: "35%",
                height: "auto",
                margin: "auto",
                marginTop: "5%",
                marginBottom: "5%",
              }}
            />

            <p className="text-gray-200 text-xl">
              Welcome our Vehicle Managment System
            </p>

            <div className="my-8 p-2 shadow-lg text-center flex justify-evenly item-center">
              <div>
                <Tooltip
                  title="
                    Email: faruq@example.com     
                    Password: 12345678
                    "
                  color="geekblue"
                  key="geekblue"
                >
                  <p className="cursor-pointer underline text-sky-600">
                    Super-admin Credentials
                  </p>
                </Tooltip>
              </div>
              /
              <div>
                <Tooltip
                  title="Email: khaled@example.com
                    Password: 12345678"
                  color="geekblue"
                  key="geekblue"
                >
                  <p className="cursor-pointer underline text-sky-600">
                    Manager Credentials
                  </p>
                </Tooltip>
              </div>
              /
              <div>
                <Tooltip
                  title="Email: kabir@example.com 
                    Password: 12345678"
                  color="geekblue"
                  key="geekblue"
                >
                  <p className="cursor-pointer underline text-sky-600">
                    Driver Credentials
                  </p>
                </Tooltip>
              </div>
            </div>

            <Form submitHandler={onSubmit}>
              <div className={`flex flex-col justify-center items-center`}>
                <div className="w-[60%] ">
                  <FormInput
                    name="email"
                    type="email"
                    size="large"
                    placeholder="User Email"
                  />
                </div>
                <br />
                <div className="w-[60%]">
                  <FormInput
                    name="password"
                    type="password"
                    size="large"
                    placeholder="User Password"
                  />
                </div>
                <br />
                <Button
                  htmlType="submit"
                  className="uppercase block w-[60%] p-4 text-md rounded-full  bg-brand hover:bg-gray-200 hover:text-secondary 
                  focus:outline-none"
                >
                  {isLogin ? "Loading..." : "press LogIn"}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
