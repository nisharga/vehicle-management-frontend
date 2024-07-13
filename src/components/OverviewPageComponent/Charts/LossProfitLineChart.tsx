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
  maintainAspectRatio: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Loss-Profit per/Month",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      //   grid: {
      //     drawOnChartArea: false,
      //     drawBorder: true,
      //     color: "#FFFFFF",
      //   },
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      //   grid: {
      //     drawOnChartArea: false,
      //     drawBorder: true,
      //     color: "#E8E8E8",
      //   },
      //   ticks: {
      //     beginAtZero: true,
      //     fontColor: "#E8E8E8",
      //   },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Loss",
      data: labels.map(() => faker.number.int({ min: -10, max: 9954 })),
      borderColor: "#1e3a8a",
      backgroundColor: "#1d4ed8",
      yAxisID: "y",
    },
    {
      fill: true,
      label: "Profit",
      data: labels.map(() => faker.number.int({ min: -15, max: 8899 })),
      borderColor: "#0c4a6e",
      backgroundColor: "#0369a1",
      yAxisID: "y1",
    },
  ],
};

const LossProfitLineChart = () => {
  return (
    <>
      <Heading>Loss-Profit</Heading>
      <div className="h-[50%] bg-white dark:bg-[#00334E] rounded-lg ">
        <Line options={options} data={data} width={100} height={25} />
      </div>
    </>
  );
};

export default LossProfitLineChart;
