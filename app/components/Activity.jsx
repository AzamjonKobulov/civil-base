import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircleIcon,
  EnvelopeIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';

export default function Activity({ item }) {
  return (
    <Link
      href={`/students/${item.id}`}
      className="grid md:grid-cols-2 px-4 lg:px-6 py-4 gap-y-3 border-b"
    >
      <div className="flex items-center space-x-4">
        <Image src={item.img} alt={item.name} width={48} height={48} />
        <div className="space-y-1 lg:space-y-2">
          <h5 className="font-medium text-indigo-600">{item.name}</h5>
          <p className="flex items-center space-x-1.5 text-gray-500">
            <EnvelopeIcon className="w-5 h-5 text-gray-400" />
            <span>{item.email}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex sm:flex-col space-x-4 sm:space-x-0 sm:space-y-2">
          <p>{item.date}</p>
          <div className="flex items-center space-x-1.5">
            <CheckCircleIcon
              className={`${
                item.checked ? 'text-green-500' : 'text-[#E07373]'
              } w-5 h-5`}
            />
            <span>{item.checked ? 'Checked in' : 'Checked out'}</span>
          </div>
        </div>
        <button aria-label="Chevron right">
          <ChevronRightIcon className="w-3.5 h-3.5 text-gray-400" />
        </button>
      </div>
    </Link>
  );
}
