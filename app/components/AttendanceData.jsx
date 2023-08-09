export default function AttendanceData({ item }) {
  let className = '';

  switch (item.attendance) {
    case 'Absent':
      className = 'text-red-800 bg-red-100';
      break;
    case 'Holiday':
      className = 'text-yellow-800 bg-yellow-100';
      break;
    default:
      className = 'text-green-800 bg-green-100';
  }

  return (
    <tr className="even:bg-gray-50">
      <td class="px-4 py-3 lg:px-6 lg:py-4 text-sm font-medium">
        <div className="flex items-center space-x-4">
          <div className="space-y-1 lg:space-y-2">
            <p>{item.date}</p>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 shrink-0">
        <p className="text-gray-500">{item.day}</p>
      </td>
      <td class="px-6 py-4 text-gray-500">{item.hours}</td>
      <td class="px-6 py-4 whitespace-nowrap">
        <span className={`${className} rounded-full text-xs  px-2.5 py-0.5`}>
          {item.attendance}
        </span>
      </td>
      <td class="px-6 py-4 text-center">
        <button class="text-blue-500 hover:text-blue-700">Edit</button>
      </td>
    </tr>
  );
}
