import Chart from './Chart';
import { ExclamationTriangleIcon, CakeIcon } from '@heroicons/react/24/solid';

export default function StudentStats() {
  return (
    <div className="max-w-3xl grid md:grid-cols-2 grid-rows-3 gap-7 mt-9 sm:px-10 md:px-0">
      <div className="rounded-md shadow-md row-span-3">
        <div className="space-y-2 px-7 py-6 border-b-2">
          <p className="text-brand-gray-300 font-semibold">Remaining Hours</p>
          <p className="text-4xl text-brand-value font-semibold">72</p>
          <p className="text-brand-200">
            Total Allocated: <span className="font-medium">120</span>
          </p>
        </div>
        <div className="p-7">
          <Chart />
        </div>
      </div>

      <div className="flex items-center space-x-4 md:space-x-6 p-5 rounded-md shadow-md">
        <ExclamationTriangleIcon className="w-12 h-12 md:w-14 md:h-14 text-[#F59E0B]" />
        <div className="text-brand-gray-200">
          <p className="text-base md:text-lg font-semibold">Bills Due</p>
          <p className="md:text-base">for 03/14/2023 to 03/31/2023</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 md:space-x-6 p-5 rounded-md shadow-md">
        <CakeIcon className="w-12 h-12 md:w-14 md:h-14 text-[#5165C3]" />
        <div className="text-brand-gray-200">
          <p className="text-base md:text-lg font-semibold">
            Birthday Reminder
          </p>
          <p className="md:text-base">April 15, 2023</p>
        </div>
      </div>
      <div className="flex items-center space-x-4 md:space-x-6 py-5 px-5 sm:py-10 md:py-5 rounded-md shadow-md">
        <p className="text-5xl md:text-[4.375rem] font-medium text-brand-value">
          360
        </p>
        <p className="md:text-lg">Lifetime Billable hours</p>
      </div>
    </div>
  );
}
