import Link from 'next/link';
import {
  PencilIcon,
  PhoneArrowUpRightIcon,
  ChevronLeftIcon,
} from '@heroicons/react/24/solid';

import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

import ButtonWithIcon from '@/app/components/common/ButtonWithIcon';

export default function PersonalActions() {
  return (
    <div className="flex flex-col sm:flex-row lg:items-center justify-between space-y-6 lg:space-y-4">
      <div className="space-y-2">
        <Link
          href=""
          className="flex items-center space-x-1 font-medium text-gray-500"
        >
          <ChevronLeftIcon className="w-3.5 h-3.5 text-gray-400" />
          <span>Back</span>
        </Link>
      </div>
      <div className="flex items-center space-x-3 text-gray-500">
        <ButtonWithIcon className="border-gray-300 shadow-sm">
          <PencilIcon className="w-5 h-5" />
          <span>
            Edit <span className="hidden sm:inline-block">Info</span>
          </span>
        </ButtonWithIcon>
        <ButtonWithIcon className="border-gray-300 shadow-sm">
          <PhoneArrowUpRightIcon className="w-5 h-5" />

          <span>
            Contact <span className="hidden sm:inline-block">Parent</span>
          </span>
        </ButtonWithIcon>
        <ButtonWithIcon className="text-white bg-indigo-600 border-indigo-600 shadow-sm">
          <DocumentArrowDownIcon className="w-5 h-5" />

          <span>
            Export <span className="hidden sm:inline-block">Bill</span>
          </span>
        </ButtonWithIcon>
      </div>
    </div>
  );
}
