import Image from 'next/image';
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
} from '@heroicons/react/24/solid';

async function fetchData(id) {
  const res = await fetch(
    `https://fake-api-civil-base.vercel.app/activities2/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const data = await res.json();
  return data;
}

export default async function PersonalInfo({ id }) {
  const student = await fetchData(id);

  return (
    <div className="flex space-x-4 mt-5 lg:mt-2">
      <div className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-full overflow-hidden">
        <Image
          src={student.img}
          alt={student.name}
          width={80}
          height={80}
          className="w-full h-full"
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <h2>{student.name}</h2>
          <span className="text-indigo-800 rounded-full bg-indigo-100 font-medium px-2.5 py-0.5">
            Toddler
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-500 font-medium">
          <p className="flex items-center space-x-1.5">
            <UserIcon className="w-5 h-5 text-gray-400" />
            <span>
              {student.parent} ({student.parentRole})
            </span>
          </p>
          <p className="flex items-center space-x-1.5">
            <EnvelopeIcon className="w-5 h-5 text-gray-400" />
            <span>{student.email}</span>
          </p>
          <p className="flex items-center space-x-1.5">
            <PhoneIcon className="w-5 h-5 text-gray-400" />
            <span>{student.phone}</span>
          </p>
          <p className="flex items-center space-x-1.5">
            <CalendarIcon className="w-5 h-5 text-gray-400" />
            <span>Case</span>
            <span>#{student.case}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
