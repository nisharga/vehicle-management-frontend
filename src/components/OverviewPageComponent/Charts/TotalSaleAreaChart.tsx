"use client";
import Heading from "@/components/ui/Heading";
import { faker } from "@faker-js/faker";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
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
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Total Sale per Month",
      data: labels.map(() => faker.datatype.number({ min: 400, max: 1000 })),
      borderColor: "#EFEFEF",
      backgroundColor: "#002140",
    },
  ],
};

const TotalSaleAreaChart = () => {
  return (
    <>
      <Heading>Total Sale</Heading>
      <div className="bg-white dark:bg-[#00334E] rounded-lg ">
        <Line options={options} data={data} />
      </div>
    </>
  );
};

export default TotalSaleAreaChart;
