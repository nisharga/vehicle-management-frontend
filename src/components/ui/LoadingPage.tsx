"use client";
import { Bars } from "react-loader-spinner";

const LoadingPage: any = () => {
  return (
    <div className="loading mx-auto flex justify-center my-[10%]">
      <Bars
        height="60"
        width="60"
        color="#001529"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoadingPage;
