import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import AttendanceData from './AttendanceData';

export default function AttendanceDataList({ data }) {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h4>Attendance Data</h4>
          <div class="inline-flex rounded-md shadow-xs">
            <button class="p-2 grid place-content-center -ml-px first:rounded-l-md first:ml-0 last:rounded-r-lg border border-gray-300 font-medium bg-white text-gray-500">
              <ChevronLeftIcon className="w-3.5 h-3.5 text-gray-400" />
            </button>

            <button class="p-2 grid place-content-center -ml-px first:rounded-l-md first:ml-0 last:rounded-r-lg border border-gray-300 font-medium bg-white text-gray-500">
              <ChevronRightIcon className="w-3.5 h-3.5 text-gray-400" />
            </button>
          </div>
          <p className="text-black font-medium">
            1 April, 2023 — 14 April 2023
          </p>
        </div>
        <div className="flex items-center space-x-3"></div>
      </div>
      <div class="flex flex-col mt-6">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="min-w-[62rem] overflow-x-auto border rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead class="border-b border-gray-200 bg-gray-50 text-xs uppercase font-medium text-gray-500">
                  <tr>
                    <td class="px-6 py-3 text-left">Date</td>
                    <td class="px-6 py-3 text-left">Day</td>
                    <td class="px-6 py-3 text-left">Hours</td>
                    <td class="px-6 py-3 text-left">Attendance</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {data.map((el) => (
                    <AttendanceData key={el.id} item={el} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
