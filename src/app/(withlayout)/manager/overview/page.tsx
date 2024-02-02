"use client";
import TitleCard from "@/components/Cards/TitleCards/TitleCards";
import Chart from "chart.js";
import moment from "moment";
import Image from "next/image";
import { useEffect } from "react";

const TopSideButtons = () => {
  // const dispatch = useDispatch()

  const openAddNewLeadModal = () => {
    // dispatch(openModal({title : "Add New Lead", bodyType : MODAL_BODY_TYPES.LEAD_ADD_NEW}))
  };

  return <div className="inline-block float-right"></div>;
};

const overviewPage = () => {
  const drivers: any = [
    {
      avatar: "/user_1.png",
      email: "user@example.com",
      joiningDate: "2022-01-30T12:00:00Z",
      first_name: "John",
      last_name: "Doe",
    },
    {
      avatar: "/user_2.png",
      email: "john.doe@example.com",
      joiningDate: "2022-02-15T08:30:00Z",
      first_name: "Alice",
      last_name: "Smith",
    },
    {
      avatar: "/user_3.png",
      email: "alice.jones@example.com",
      joiningDate: "2022-03-20T15:45:00Z",
      first_name: "Bob",
      last_name: "Johnson",
    },
    {
      avatar: "/user_4.png",
      email: "jane.smith@example.com",
      joiningDate: "2022-04-10T10:15:00Z",
      first_name: "Ella",
      last_name: "Davis",
    },
  ];

  const vehicles: any = [
    {
      color: "Blue",
      mileage: 12000,
      seatCapacicty: 5,
      isAc: "Not Available",
      brand: "Toyota",
      model: "Camry",
    },
    {
      color: "Red",
      mileage: 15000,
      seatCapacicty: 7,
      isAc: " Not Available",
      brand: "Honda",
      model: "Civic",
    },
    {
      color: "Silver",
      mileage: 18000,
      seatCapacicty: 4,
      isAc: "Available",
      brand: "Ford",
      model: "Mustang",
    },
    {
      color: "Green",
      mileage: 20000,
      seatCapacicty: 6,
      isAc: "Not Available",
      brand: "Chevrolet",
      model: "Malibu",
    },
    {
      color: "Black",
      mileage: 22000,
      seatCapacicty: 8,
      isAc: "Available",
      brand: "Nissan",
      model: "Rogue",
    },
  ];



  return (
    <div className="flex flex-col gap-7">
      <span className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div
          className="p-5 flex flex-row gap-5 rounded-md"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <span className="flex flex-col items-start justify-center h-full">
            <p className="text-gray-600 text-lg">Total Drivers</p>
            <h1 className="text-3xl text-blue-700 font-bold">5 drivers</h1>
          </span>
          <span
            style={{ width: "50px" }}
            className="h-full flex flex-row justify-center items-center my-auto mx-auto"
          >
            <Image src="/driver.png" alt="no image" width={150} height={90} />
          </span>
        </div>
        <div
          className="p-5 flex flex-row gap-5 rounded-md"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <span className="flex flex-col items-start justify-center h-full">
            <p className="text-gray-600 text-lg">Total Vehicles</p>
            <h1 className="text-3xl text-blue-700 font-bold">5 Cars</h1>
          </span>
          <span
            style={{ width: "50px" }}
            className="h-full flex flex-row justify-center items-center my-auto mx-auto"
          >
            <Image src="/car.png" alt="no image" width={50} height={50} />
          </span>
        </div>
        <div
          className="p-5 flex flex-row gap-5 rounded-md"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <span>
            <p className="text-gray-600 text-lg">Total Sales ( Taka )</p>
            <table>
              <tbody>
                <tr>
                  <td className="text-lg text-gray-800  font-bold">
                    Monthly -{" "}
                  </td>
                  <td className="text-2xl text-blue-700 font-bold"> 100000</td>
                </tr>
                <tr>
                  <td className="text-lg text-gray-800 font-bold">Weekly - </td>
                  <td className="text-2xl  text-blue-700 font-bold"> 25000</td>
                </tr>
              </tbody>
            </table>
          </span>
        </div>
        <div
          className="p-5 flex flex-row gap-5 rounded-md"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <span>
            <p className="text-gray-600 text-lg">Total Cost ( Taka )</p>
            <table>
              <tbody>
                <tr>
                  <td className="text-lg text-gray-800  font-bold">
                    Monthly -{" "}
                  </td>
                  <td className="text-2xl text-blue-700 font-bold"> 40000</td>
                </tr>
                <tr>
                  <td className="text-lg text-gray-800 font-bold">Weekly - </td>
                  <td className="text-2xl  text-blue-700 font-bold"> 10000</td>
                </tr>
              </tbody>
            </table>
          </span>
        </div>
      </span>
     
      <TitleCard
        title="Driver List"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
      >
        {/* Drivers List in table format loaded from slice after api call */}
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-left">Avatar</th>
                <th className="text-left">First Name</th>
                <th className="text-left">Last Name</th>
                <th className="text-left">Email Id</th>
                <th className="text-left">Join Date</th>
              </tr>
            </thead>
            <tbody className="">
              {drivers.map((l: any, k: any) => {
                return (
                  <tr key={k} className="p-5">
                    <td className="text-left">
                      <div className="flex items-center space-x-3">
                        <div className="avatar w-full">
                          <div
                            className="mask mask-squircle w-full h-12"
                            style={{ width: "50px" }}
                          >
                            <Image
                              src={l.avatar}
                              alt="Avatar"
                              width={150}
                              height={100}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-bold text-left">{l.first_name}</td>
                    <td className="text-sm opacity-50 text-left">
                      {l.last_name}
                    </td>
                    <td className="text-left">{l.email}</td>
                    <td className="text-left">
                      {moment(new Date())
                        .add(-5 * (k + 2), "days")
                        .format("DD MMM YY")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>

      <TitleCard
        title="Vehicle List"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
      >
        {/* vehicles List in table format loaded from slice after api call */}
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-left">Brand</th>
                <th className="text-left">model</th>
                <th className="text-left">color</th>
                <th className="text-left">mileage</th>
                <th className="text-left">seatCapacicty</th>
                <th className="text-left">A/C</th>
              </tr>
            </thead>
            <tbody className="">
              {vehicles.map((l: any, k: any) => {
                return (
                  <tr key={k} className="p-5">
                    <td className="text-left h-12">{l.brand}</td>
                    <td className="font-bold text-left">{l.model}</td>
                    <td className="text-sm opacity-50 text-left">{l.color}</td>
                    <td className="text-left">{l.mileage}</td>
                    <td className="text-left"> {l.seatCapacicty} </td>
                    <td className="text-left"> {l.isAc} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </div>
  );
};

export default overviewPage;
