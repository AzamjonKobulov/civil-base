'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels'; // Import the plugin
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart() {
  const data = {
    labels: ['Remaining', 'Utilized'],
    datasets: [
      {
        label: 'Poll',
        data: [48, 72],
        backgroundColor: ['#165BAA', '#A155B9'],
        borderColor: ['#165BAA', '#A155B9'],
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: '#fff', // Set color for the labels
        formatter: (value) => {
          return value; // Display the data value as the label
        },
      },
    },
  };

  return (
    <div className="w-4/5">
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  );
}
