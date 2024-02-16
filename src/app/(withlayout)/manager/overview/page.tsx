"use client";
import AdminOverviewCard from "@/components/OverviewPageComponent/Card/AdminOverviewCard";
import LossProfitCostSalePieChart from "@/components/OverviewPageComponent/Charts/LossProfitCOstSalePieChart";
import LossProfitLineChart from "@/components/OverviewPageComponent/Charts/LossProfitLineChart";
import ProfitCostLineChart from "@/components/OverviewPageComponent/Charts/ProfitCostLineChart";
import TotalCostAreaChart from "@/components/OverviewPageComponent/Charts/TotalCostAreaChart";
import TotalSaleAreaChart from "@/components/OverviewPageComponent/Charts/TotalSaleAreaChart";
import DriverList from "@/components/OverviewPageComponent/table/DriverList";
import VehicleList from "@/components/OverviewPageComponent/table/VehicleList";
import TripListTable from "@/components/Table/TripListTable";
import TripUpcoming from "@/components/Table/TripUpcoming";

const overviewPage = () => {
  return (
    <div className="">
      {/*components  */}
      <AdminOverviewCard />
      <div className="grid md:grid-cols-2 gap-7">
        <div className="">
          <TotalSaleAreaChart />
        </div>
        <div className="">
          {" "}
          <TotalCostAreaChart />
        </div>
      </div>

      <ProfitCostLineChart />
      <LossProfitLineChart />

      <div className="grid md:grid-cols-2 gap-7">
        <div className="">
          <VehicleList />
        </div>
        <div className="">
          <DriverList />
        </div>
      </div>
      <TripUpcoming />
      <LossProfitCostSalePieChart />
      <TripListTable />
    </div>
  );
};

export default overviewPage;
