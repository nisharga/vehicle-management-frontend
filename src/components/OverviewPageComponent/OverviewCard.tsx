"use client";
import Image from "next/image";
import car from "../../assets/cardImage/car.png";
import driver from "../../assets/cardImage/driver.png";
const OverviewCard = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div
          className="p-5 flex flex-row gap-2 justify-between rounded-md bg-white dark:bg-[#00334E]"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <span className="flex flex-col items-start justify-center h-full">
            <p className="text-gray-600 text-lg p-2">Joining Date</p>
            <h1 className="text-xl text-blue-700 font-bold bg-green-200 dark:bg-[#EFEFEF] p-2 rounded-full">
              19 Nov 2023
            </h1>
          </span>
          <span
            style={{ width: "50px" }}
            className="h-full flex flex-row justify-center items-center my-auto mx-auto"
          >
            <Image src={driver} alt="no image" width={150} height={90} />
          </span>
        </div>
        <div
          className="p-5 flex flex-row gap-5 rounded-md bg-white"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <span className="flex flex-col items-center justify-center h-full">
            <p className="text-gray-600 text-lg p-2">Completed Trip</p>
            <h1 className="text-xl text-blue-700 font-bold bg-pink-200 p-2 rounded-full text-center">
              {55}
            </h1>
          </span>
          <span
            style={{ width: "50px" }}
            className="h-full flex flex-row justify-center items-center my-auto mx-auto"
          >
            <Image src={car} alt="no image" width={50} height={50} />
          </span>
        </div>
        <div
          className="p-5 flex flex-row gap-5 rounded-md bg-white"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <span>
            <p className="text-gray-600 text-lg text-center p-2">All Payment</p>
            <table>
              <tbody>
                <tr>
                  <td className="text-lg text-gray-800  font-bold relative">
                    {"pending:"}
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  </td>
                  <td className="text-xl text-blue-700 font-bold">100000</td>
                </tr>
                <tr className="opacity-50	">
                  <td className="text-lg text-gray-800 font-bold">
                    {"completed: "}
                  </td>
                  <td className="text-xl  text-blue-700 font-bold">25000</td>
                </tr>
              </tbody>
            </table>
          </span>
        </div>
        <div
          className="p-5 flex flex-row gap-5 rounded-md bg-white"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <span>
            <p className="text-gray-600 text-lg p-2">Connected With Us</p>
            <table>
              <tbody>
                <tr>
                  <td className="text-xl text-gray-800 ">0 year</td>
                </tr>
                <tr>
                  <td className="text-xl text-gray-800 ">11 month 10 days</td>
                </tr>
              </tbody>
            </table>
          </span>
        </div>
      </section>
    </>
  );
};

export default OverviewCard;
