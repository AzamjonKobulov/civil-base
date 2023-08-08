import { XMarkIcon } from '@heroicons/react/24/solid';

export default function MenuOverlay({ onClose }) {
  return (
    <div
      className="absolute min-h-screen inset-0 bg-black/40 z-40"
      onClick={onClose}
    >
      <button className="absolute w-7 h-7 rounded bg-white grid place-content-center top-4 right-4">
        <XMarkIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
