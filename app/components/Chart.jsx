'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart() {
  let remaining = 72;
  let utilized = 48;

  const data = {
    labels: ['Remaining', 'Utilized'],
    datasets: [
      {
        data: [remaining, utilized],
        backgroundColor: ['#165BAA', '#A155B9'],
        borderColor: ['#165BAA', '#A155B9'],
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
          return value + 'h'; // Display the data value as the label
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
