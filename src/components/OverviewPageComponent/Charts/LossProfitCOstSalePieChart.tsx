import Heading from "@/components/ui/Heading";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Loss", "Profit", "Cost", "Sale"],

  datasets: [
    {
      label: "# of Votes",
      data: [4, 19, 15, 50],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const LossProfitCostSalePieChart = () => {
  return (
    <>
      <Heading>Loss/Profit/Sale/Cost</Heading>
      <div className="bg-white dark:bg-[#00334E] rounded-2xl">
        <div className="w-[40%] h-[40%] mx-auto ">
          <Pie data={data} />
        </div>
      </div>
    </>
  );
};

export default LossProfitCostSalePieChart;
