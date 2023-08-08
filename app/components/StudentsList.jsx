import { UsersIcon, PlusIcon } from '@heroicons/react/24/solid';

import ButtonWithIcon from './common/ButtonWithIcon';
import Student from './Student';

export default function StudentsList({ data }) {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <h4>Students</h4>
        <div className="flex items-center space-x-3">
          <ButtonWithIcon>
            <UsersIcon className="w-5 h-5 text-gray-500" />
            <span>
              View all <span className="hidden sm:inline-block"> students</span>
            </span>
          </ButtonWithIcon>
          <ButtonWithIcon className="bg-indigo-600 text-white">
            <PlusIcon className="w-5 h-5" />
            <span>
              Add <span className="hidden sm:inline-block"> students</span>
            </span>
          </ButtonWithIcon>
        </div>
      </div>
      <div class="flex flex-col mt-4">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="min-w-[62rem] overflow-x-auto border rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead class="bg-gray-50 text-xs uppercase font-medium text-gray-500">
                  <tr>
                    <td class="px-6 py-3 text-left">Name</td>
                    <td class="px-6 py-3 text-left">Parent</td>
                    <td class="px-6 py-3 text-left">status</td>
                    <td class="px-6 py-3 text-left">Role</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  {data.map((el) => (
                    <Student key={el.id} item={el} />
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
