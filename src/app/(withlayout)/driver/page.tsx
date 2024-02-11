"use client"  
import TitleCard from "@/components/Cards/TitleCards/TitleCards";
import Subtitle from "@/components/Cards/Typography/Subtitle";
import PieChartBox from "@/components/Charts/pie/PieChartBox";
import { trips } from "@/components/Table/StaticTableData";
import UpCommingTrip from "@/components/Table/UpCommingTrip";
import Image from "next/image";

const TopSideButtons = () => {
  const openAddNewLeadModal = () => {}; 
  return <div className="inline-block float-right"></div>;
};

const driverPage = () => {
  return (
    <>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
    <div
      className="p-5 flex flex-row gap-2 justify-between rounded-md bg-white"
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <span className="flex flex-col items-start justify-center h-full">
        <p className="text-gray-600 text-lg p-2">Joining Date</p>
        <h1 className="text-xl text-blue-700 font-bold bg-green-200 p-2 rounded-full">
         19 Nov 2023
        </h1>
      </span>
      <span
        style={{ width: "50px" }}
        className="h-full flex flex-row justify-center items-center my-auto mx-auto"
      >
        <Image src="/driver.png" alt="no image" width={150} height={90} />
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
        <Image src="/car.png" alt="no image" width={50} height={50} />
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
              <td className="text-lg text-gray-800 font-bold">{"completed: "}</td>
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
              <td className="text-xl text-gray-800 ">
                0 year 
              </td> 
            </tr>
             <tr>
              <td className="text-xl text-gray-800 ">
              11 month 10 days
              </td> 
            </tr>  
          </tbody>
        </table>
      </span>
    </div>
  </section>
    <div className="flex flex-col md:flex-row items-center justify-start md:justify-around ">
      <div className="pt-8">
        <Subtitle styleClass="text-lg text-gray-800 p-2">Up Comming Trip</Subtitle>
        <UpCommingTrip/>
      </div>
      <div className="">
      <Subtitle styleClass="text-lg text-gray-800 text-right py-4 px-2">Trip Overview</Subtitle>
       <PieChartBox pending={3} completed={90} cancel={5}/>
      </div>
    
    </div>

    <TitleCard
        title="Trip List"
        topMargin="my-2"
        TopSideButtons={<TopSideButtons />}
      >
        {/* vehicles List in table format loaded from slice after api call */}
        <section className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-left">Trip No</th>
                <th className="text-left">Passenger Name</th>
                <th className="text-left">Start Location</th>
                <th className="text-left">End Location</th>
                <th className="text-left">Passenger Count</th>
                <th className="text-left">Trip Period</th>
                <th className="text-left">Status</th>
              </tr>
            </thead>
            <tbody className="">
              {trips.map((l: any, k: any) => {
                return (
                  <tr key={k} className="p-5">
                    <td className="text-left h-12">{l.tripId}</td>
                    <td className="font-bold text-left">{l.passengerName}</td>
                    <td className="text-sm opacity-50 text-left">{l.startLocation}</td>
                    <td className="text-left">{l.endLocation}</td>
                    <td className="text-left"> {l.passengerCount} </td>
                    <td className="text-left"> {l.tripPeriod} </td>
                    <td className="text-left"> {l.status === true ? 'completed' : 'pending'} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </TitleCard>
    </>
  );
};

export default driverPage;
