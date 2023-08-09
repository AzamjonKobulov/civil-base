import Chart from './Chart';

export default function StudentStats() {
  return (
    <div className="max-w-3xl grid lg:grid-cols-2 gap-7 mt-9">
      <div className="rounded-md shadow-lg">
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
      <div></div>
    </div>
  );
}
