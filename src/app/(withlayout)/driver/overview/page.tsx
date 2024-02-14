"use client";

import DriverOverviewCard from "@/components/OverviewPageComponent/Card/OverviewCard";
import DriverProfilePage from "@/components/OverviewPageComponent/driverProfile/DriverProfilePage";
import UpcomingTripTable from "@/components/OverviewPageComponent/table/UpcomingTripTable";

const driverOverviewPage = () => {
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
    <div className="">
      <DriverOverviewCard />
      <UpcomingTripTable />
      <DriverProfilePage />
    </div>
  );
};

export default driverOverviewPage;
