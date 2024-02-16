import CostTable from "@/components/Report/CostTable";
import IncomeTable from "@/components/Report/IncomeTable";
import LossChart from "@/components/Report/LossChart";
import ProfitChart from "@/components/Report/ProfitChart";
import ReportCard from "@/components/Report/ReportCard";

const ReportPage = () => {
  return (
    <div>
      <ReportCard />
      <IncomeTable />
      <CostTable />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="w-full">
          <ProfitChart />
        </div>
        <div className="w-full">
          <LossChart />
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
