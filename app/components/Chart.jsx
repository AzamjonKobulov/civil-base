'use client';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

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
    },
  };

  const plugins = [
    {
      id: 'insideLabelsPlugin',
      afterDatasetsDraw(chart) {
        const {
          ctx,
          data: { datasets },
          chartArea: { width, height },
        } = chart;

        const chartData = chart.getDatasetMeta(0).data;

        chartData.forEach((datapoint, i) => {
          const { x, y } = datapoint.getCenterPoint();
          const value = datasets[1].data[i];
          const sumOfValues = datasets[1].data.reduce((acc, val) => acc + val);
          ctx.textBaseline = 'middle';

          const textX = x - ctx.measureText(value).width / 2;

          if (value / sumOfValues > 0.05) {
            ctx.fillStyle = '#f4f6f7';
            ctx.fillText(datasets[1].data[i], textX, y);
          }
        });
      },
    },
  ];

  return (
    <div className="flex">
      <div className="w-2/3">
        <Doughnut data={data} options={options} plugins={plugins} />
      </div>
      <div className="text-xs text-brand-gray-200 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-2 bg-[#165BAA]"></div>
          <p className="flex items-center space-x-2">
            <span>Remaining</span>
            <span>
              {remaining}
              {/* ({remainingPercentage}%) */}
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-2 bg-[#A155B9]"></div>
          <p className="flex items-center space-x-2">
            <span>Utilized</span>
          </p>
          <span>
            {utilized}
            {/* ({utilizedPercentage}%) */}
          </span>
        </div>
      </div>
    </div>
  );
}
