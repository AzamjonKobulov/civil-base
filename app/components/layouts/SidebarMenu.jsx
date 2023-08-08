'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  CalendarIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';

const links = [
  {
    id: 1,
    label: 'Home',

    icon: HomeIcon,
    path: '/',
  },
  {
    id: 2,
    label: 'Students',
    stat: 3,
    icon: UsersIcon,
    path: '/students',
  },
  {
    id: 3,
    label: 'Billing',
    stat: 4,
    icon: ChartBarIcon,
    path: '/billing',
  },
  {
    id: 4,
    label: 'Calendar',
    icon: CalendarIcon,
    path: '/calendar',
  },
  {
    id: 5,
    label: 'Documents',
    stat: 12,
    icon: InboxIcon,
    path: '/documents',
  },
];

export default function SidebarMenu({ isOpen, onClose }) {
  const pathname = usePathname();

  return (
    <aside
      className={`${isOpen} -translate-x-full lg:translate-x-0 w-64 fixed top-0 left-0 min-h-screen border-r border-brand-gray-100 bg-white z-50 transition-all duration-300`}
    >
      <div className="flex items-center py-5 px-4">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={143}
          height={32}
        />
      </div>
      <div className="space-y-1 text-gray-900 font-medium px-2">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.path}
            className={` ${
              pathname === link.path ? 'bg-gray-100' : ''
            } flex items-center justify-between rounded-md py-2 pl-2 pr-3`}
            onClick={onClose}
          >
            <div className="flex items-center space-x-3">
              <link.icon
                className={`${
                  pathname === link.path ? 'text-indigo-500' : 'text-gray-400'
                } w-6 h-6`}
              />
              <span
                className={`${
                  pathname === link.path ? 'text-indigo-500' : 'text-gray-600'
                }`}
              >
                {link.label}
              </span>
            </div>
            {link.stat && (
              <span
                className={`${
                  pathname === link.path
                    ? 'bg-indigo-500 text-white'
                    : 'text-gray-600'
                } bg-gray-100  rounded-full px-3 py-0.5`}
              >
                {link.stat}
              </span>
            )}
          </Link>
        ))}
      </div>
    </aside>
  );
}
