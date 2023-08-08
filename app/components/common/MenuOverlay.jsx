export default function MenuOverlay({ onClose }) {
  return (
    <div
      className="absolute min-h-screen inset-0 bg-black/40 z-40"
      onClick={onClose}
    >
      <button className="absolute w-7 h-7 rounded bg-white grid place-content-center top-4 right-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
