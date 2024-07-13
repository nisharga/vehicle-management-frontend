"use client";

import Heading from "@/components/ui/Heading";
import { faker } from "@faker-js/faker";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Profit-Cost per Month",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Cost",
      data: labels.map(() => faker.number.int({ min: -10, max: 1000 })),
      borderColor: "#ec4899",
      backgroundColor: "#f9a8d4",
      yAxisID: "y",
    },
    {
      fill: true,
      label: "Profit",
      data: labels.map(() => faker.number.int({ min: -15, max: 100 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1",
    },
  ],
};

const ProfitCostLineChart = () => {
  return (
    <>
      <Heading>Cost-Profit</Heading>
      <div className="bg-white dark:bg-[#00334E] rounded-lg ">
        <Line options={options} data={data} width={100} height={25} />
      </div>
    </>
  );
};

export default ProfitCostLineChart;
