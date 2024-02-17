"use client";

import DriverOverviewCard from "@/components/OverviewPageComponent/Card/OverviewCard";
import DriverProfilePage from "@/components/OverviewPageComponent/driverProfile/DriverProfilePage";
import UpcomingTripTable from "@/components/OverviewPageComponent/table/UpcomingTripTable";
 

const driverOverviewPage = () => { 
  return (
    <div className="">
      <DriverOverviewCard />
      <UpcomingTripTable  />
      <DriverProfilePage />
    </div>
  );
};

export default driverOverviewPage;
