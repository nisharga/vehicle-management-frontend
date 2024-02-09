"use client";
import { Bars } from "react-loader-spinner";

const LoadingPage: any = () => {
  return (
    <div className="loading mx-auto">
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
