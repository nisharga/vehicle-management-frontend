import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker'
import { faker } from '@faker-js/faker';

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
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Monthly trips statistics',
    },
  },
};

const trips =[
  112,115,112,118
]
const income =[
  22000, 35000, 20000, 29000
]

const expense =[
  12000, 15000, 10000, 15000
]

const labels = ['First Week', 'Second Week', 'Third Week', 'Forth Week'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Trips',
      data: trips.map((info)=>info),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Expense',
      data: expense.map((info)=>info),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Income',
      data: income.map((info)=>info),
      backgroundColor: 'rgba(245, 230, 39, 0.8)',
    },
  ],
};

export function MonthlyBarChart() {
  return <Bar options={options} data={data} />;
}
