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
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      label: {
        display: true,
      },
    },
  };

  return (
    <div className="flex">
      <div className="w-2/3">
        <Doughnut data={data} options={options}></Doughnut>
      </div>
      <div className="text-xs text-brand-gray-200 space-y-2 mt-3">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-2 bg-[#165BAA]"></div>
          <p>Remaining</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-2 bg-[#A155B9]"></div>
          <p>Utilized</p>
        </div>
      </div>
    </div>
  );
}
