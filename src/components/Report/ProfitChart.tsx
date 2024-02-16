"use client";
import { faker } from "@faker-js/faker";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Heading from "../ui/Heading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "All Profit",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    // {
    //   label: "Dataset 1",
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: "rgba(255, 99, 132, 0.5)",
    // },
    {
      label: "Profit",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const ProfitChart = () => {
  return (
    <>
      <Heading>Profit</Heading>
      <div className="bg-white dark:bg-[#00334E] rounded-lg p-2">
        <Bar options={options} data={data} />
      </div>
    </>
  );
};

export default ProfitChart;
