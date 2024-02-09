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
      text: 'Current Week trips statistics',
    },
  },
};

const trips =[
  50,65,42,38
]
const income =[
  2000, 5000, 2000, 2000
]

const expense =[
  1000, 3000, 1000, 1500
]

const labels = ['Current Week'];

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

export function CurrentWeekBarChart() {
  return <Bar options={options} data={data} />;
}
