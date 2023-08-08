import Pinned from './Pinned';
import {
  CurrencyDollarIcon,
  ClipboardDocumentListIcon,
  ExclamationTriangleIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';

const data = [
  {
    id: 1,
    label: 'Bills Due',
    stat: 12,
    status: 'Remaining',
    icon: CurrencyDollarIcon,
    bgColor: 'bg-pink-600',
  },
  {
    id: 2,
    label: 'Tasks',
    stat: 5,
    status: 'Remaining',
    icon: ClipboardDocumentListIcon,
    bgColor: 'bg-purple-600',
  },
  {
    id: 3,
    label: 'Need Attention',
    stat: 5,
    status: 'Issues',
    icon: ExclamationTriangleIcon,
    bgColor: 'bg-yellow-500',
  },
  {
    id: 4,
    label: 'Students',
    stat: 28,
    status: 'Members',
    icon: UsersIcon,
    bgColor: 'bg-green-500',
  },
];

export default function PinnedList() {
  return (
    <div className="space-y-4 mt-6">
      <h4>Pinned Items</h4>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {data.map((el) => (
          <Pinned key={el.id} item={el} />
        ))}
      </div>
    </div>
  );
}
