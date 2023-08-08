import Image from 'next/image';

import { EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Student({ item }) {
  return (
    <tr>
      <td class="px-4 py-3 lg:px-6 lg:py-4 text-sm font-medium">
        <div className="flex items-center space-x-4">
          <Image src={item.img} alt={item.name} width={40} height={40} />
          <div className="space-y-1 lg:space-y-2">
            <h5 className="font-medium">{item.name}</h5>
            <p className="flex items-center space-x-1.5 text-gray-500">
              <EnvelopeIcon className="w-5 h-5 text-gray-400" />
              <span>{item.email}</span>
            </p>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 shrink-0">
        <p>{item.parentJob}</p>
        <p className="text-gray-500">{item.parentStatus}</p>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <span className="text-green-800 rounded-full bg-green-100 px-2.5 py-0.5">
          {item.status}
        </span>
      </td>
      <td class="px-6 py-4 font-medium text-gray-500">{item.role}</td>
      <td class="px-6 py-4  font-medium">
        <button class="text-blue-500 hover:text-blue-700">Edit</button>
      </td>
    </tr>
  );
}
