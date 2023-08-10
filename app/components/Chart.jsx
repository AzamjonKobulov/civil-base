'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart() {
  const data = {
    labels: ['Remaining', 'Utilized', 'Go', 'Come', 'Stay'],
    datasets: [
      {
        data: [72, 48],
        backgroundColor: ['#165BAA', '#A155B9', '#c4c4c4', '#000', '#7c7c'],
        borderColor: ['#165BAA', '#A155B9', '#c4c4c4', '#000', '#7c7c'],
        hoverOffset: 4,
        rotation: (90 / 450) * 360,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: '#fff',
        formatter: (value) => {
          return value + ' hours'; // Display the data value as the label
        },
        font: {
          weight: 700,
          size: 16,
        },
      },
    },
  };

  return (
    <div className="flex">
      <div className="w-2/3">
        <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
      </div>
      <div className="text-xs text-brand-gray-200 space-y-2">
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
