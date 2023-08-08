import {
  PencilIcon,
  LinkIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';

import ButtonWithIcon from './common/ButtonWithIcon';

export default function Actions() {
  return (
    <div className="flex flex-col sm:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 lg:space-x-4 font-medium text-gray-500">
          <p>Health Services</p>
          <ChevronRightIcon className="w-3.5 h-3.5 text-gray-400" />
          <p>Daycare</p>
        </div>
        <h2>Minnesota Daycare</h2>
      </div>
      <div className="flex items-center space-x-3 text-gray-500">
        <ButtonWithIcon className="border-gray-300 shadow-sm">
          <PencilIcon className="w-5 h-5" />
          <span>Edit</span>
        </ButtonWithIcon>
        <ButtonWithIcon className="border-gray-300 shadow-sm">
          <LinkIcon className="w-5 h-5" />

          <span>View</span>
        </ButtonWithIcon>
        <ButtonWithIcon className="text-white bg-indigo-600 border-indigo-600 shadow-sm">
          <CheckIcon className="w-5 h-5" />

          <span>Publish</span>
        </ButtonWithIcon>
      </div>
    </div>
  );
}
