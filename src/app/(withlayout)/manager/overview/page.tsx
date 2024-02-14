"use client";

import Image from "next/image";

const TopSideButtons = () => {
  const openAddNewLeadModal = () => {};

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
    <main className="flex flex-col gap-7">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div
          className="p-5 flex flex-row gap-2 justify-between rounded-md bg-white"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <span className="flex flex-col items-start justify-center h-full">
            <p className="text-gray-600 text-lg">Total Drivers</p>
            <h1 className="text-2xl text-blue-700 font-bold bg-green-200 p-2 rounded-full">
              5 drivers
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
          <span className="flex flex-col items-start justify-center h-full">
            <p className="text-gray-600 text-lg">Total Vehicles</p>
            <h1 className="text-2xl text-blue-700 font-bold bg-pink-200 p-2 rounded-full">
              5 Cars
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
          className="p-5 flex flex-row gap-5 rounded-md bg-white"
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
      </section>

      <section className="flex flex-col lg:flex-row gap-5 justify-between items-center"></section>
    </main>
  );
};

export default overviewPage;
